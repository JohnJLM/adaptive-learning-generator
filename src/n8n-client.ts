import type {
  FinalizationRequest,
  FinalizationResponse,
  GenerationRequest,
  GenerationResponse,
  MaterialId,
  ProfileArtifacts,
} from "./domain";

interface N8nErrorPayload {
  error?: {
    code?: unknown;
    message?: unknown;
  };
}

export class N8nGenerationError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly code?: string,
  ) {
    super(message);
    this.name = "N8nGenerationError";
  }
}

export async function generateWithN8n(
  endpoint: string,
  accessKey: string,
  request: GenerationRequest,
  fetcher: typeof fetch = fetch,
): Promise<GenerationResponse> {
  const response = await fetcher(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-TFM-Access-Key": accessKey,
    },
    body: JSON.stringify(request),
  });

  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const error = isN8nErrorPayload(payload) ? payload.error : undefined;
    throw new N8nGenerationError(
      response.status,
      messageForStatus(response.status, error?.message),
      typeof error?.code === "string" ? error.code : undefined,
    );
  }

  if (!isGenerationResponse(payload, request)) {
    throw new N8nGenerationError(502, "n8n devolvió una respuesta que no cumple el contrato de generación.");
  }

  return payload;
}

export async function finalizeWithN8n(
  endpoint: string,
  accessKey: string,
  request: FinalizationRequest,
  fetcher: typeof fetch = fetch,
): Promise<FinalizationResponse> {
  const response = await fetcher(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-TFM-Access-Key": accessKey,
      "X-TFM-Event": "finalize",
    },
    body: JSON.stringify(request),
  });

  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const error = isN8nErrorPayload(payload) ? payload.error : undefined;
    throw new N8nGenerationError(
      response.status,
      messageForStatus(response.status, error?.message),
      typeof error?.code === "string" ? error.code : undefined,
    );
  }

  if (!isFinalizationResponse(payload)) {
    throw new N8nGenerationError(502, "n8n no confirmó el cierre de esta generación.");
  }

  return payload;
}

function isN8nErrorPayload(value: unknown): value is N8nErrorPayload {
  return isRecord(value) && (value.error === undefined || isRecord(value.error));
}

function isGenerationResponse(value: unknown, request: GenerationRequest): value is GenerationResponse {
  if (!isRecord(value)) return false;
  const requestedMaterials = value.requestedMaterials;
  if (!isMaterialIdArray(requestedMaterials)) return false;
  return (
    value.requestId === request.requestId &&
    typeof value.generationId === "string" &&
    (value.mode === "mock" || value.mode === "live") &&
    typeof value.generatedAt === "string" &&
    typeof value.title === "string" &&
    typeof value.generalObjective === "string" &&
    isPreset(value.preset) &&
    value.preset === request.preset &&
    sameValues(requestedMaterials, request.requestedMaterials) &&
    Array.isArray(value.materials) &&
    value.materials.length === request.profiles.length &&
    value.materials.every((material) => isProfileMaterialPackage(material, requestedMaterials)) &&
    sameValues(value.materials.map((material) => isRecord(material) && typeof material.profileId === "string" ? material.profileId : ""), request.profiles.map((profile) => profile.id))
  );
}

function isFinalizationResponse(value: unknown): value is FinalizationResponse {
  return (
    isRecord(value) &&
    typeof value.requestId === "string" &&
    typeof value.generationId === "string" &&
    typeof value.finalizedAt === "string" &&
    Array.isArray(value.approvedProfileIds) &&
    value.approvedProfileIds.every((profileId) => typeof profileId === "string")
  );
}

function isProfileMaterialPackage(value: unknown, requestedMaterials: MaterialId[]): boolean {
  return (
    isRecord(value) &&
    typeof value.profileId === "string" &&
    typeof value.profileName === "string" &&
    typeof value.generationId === "string" &&
    typeof value.version === "number" &&
    Number.isInteger(value.version) &&
    value.version >= 1 &&
    (value.status === "generated" || value.status === "needs_revision" || value.status === "approved") &&
    typeof value.adaptationSummary === "string" &&
    isProfileArtifacts(value.artifacts, requestedMaterials)
  );
}

function isProfileArtifacts(value: unknown, requestedMaterials: MaterialId[]): value is ProfileArtifacts {
  if (!isRecord(value)) return false;
  const artifactIds = Object.keys(value);
  if (artifactIds.length !== requestedMaterials.length || artifactIds.some((id) => !requestedMaterials.includes(id as MaterialId))) {
    return false;
  }

  return requestedMaterials.every((materialId) => isArtifact(materialId, value[materialId]));
}

function isArtifact(materialId: MaterialId, value: unknown): boolean {
  if (!isRecord(value) || typeof value.title !== "string") return false;

  if (materialId === "explanation") {
    return typeof value.introduction === "string" && Array.isArray(value.sections) && value.sections.every(isTextSection);
  }
  if (materialId === "summary") return typeof value.content === "string";
  if (materialId === "activity" || materialId === "workshop") {
    return typeof value.expectedEvidence === "string" && Number.isInteger(value.estimatedMinutes) && Array.isArray(value.instructions) && value.instructions.every(isString);
  }
  if (materialId === "exercises" || materialId === "quiz" || materialId === "short_assessment") {
    return typeof value.instructions === "string" && Array.isArray(value.items) && value.items.every(isQuestionItem);
  }
  if (materialId === "answer_key") {
    return Array.isArray(value.items) && value.items.every(isAnswerKeyItem);
  }
  if (materialId === "evaluation_criteria") {
    return Array.isArray(value.criteria) && value.criteria.every(isCriterion);
  }
  if (materialId === "rubric") {
    return typeof value.evidenceExpected === "string" && Array.isArray(value.criteria) && value.criteria.every(isRubricCriterion);
  }
  return typeof value.overview === "string" && Array.isArray(value.sequence) && typeof value.reviewNotes === "string" && value.sequence.every(isGuideStep);
}

function isPreset(value: unknown): boolean {
  return value === "class_session" || value === "workshop" || value === "assessment" || value === "review" || value === "custom";
}

function isMaterialIdArray(value: unknown): value is MaterialId[] {
  return Array.isArray(value) && value.length > 0 && value.every((materialId) => typeof materialId === "string" && materialIds.has(materialId as MaterialId));
}

const materialIds = new Set<MaterialId>([
  "explanation",
  "summary",
  "activity",
  "workshop",
  "exercises",
  "quiz",
  "short_assessment",
  "answer_key",
  "evaluation_criteria",
  "rubric",
  "teacher_guide",
]);

function isTextSection(value: unknown): boolean {
  return isRecord(value) && typeof value.heading === "string" && typeof value.content === "string";
}

function isQuestionItem(value: unknown): boolean {
  return isRecord(value) && typeof value.id === "string" && typeof value.prompt === "string";
}

function isAnswerKeyItem(value: unknown): boolean {
  return isRecord(value) && typeof value.itemId === "string" && typeof value.answer === "string" && typeof value.rationale === "string";
}

function isCriterion(value: unknown): value is Record<string, unknown> {
  return isRecord(value) && typeof value.criterion === "string" && typeof value.description === "string";
}

function isRubricCriterion(value: unknown): boolean {
  return isCriterion(value) && Array.isArray(value.levels) && value.levels.every(isCriterionLevel);
}

function isCriterionLevel(value: unknown): boolean {
  return isRecord(value) && typeof value.label === "string" && typeof value.description === "string";
}

function isGuideStep(value: unknown): boolean {
  return isRecord(value) && typeof value.step === "string" && typeof value.description === "string";
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function sameValues(values: string[], expected: string[]): boolean {
  return values.length === expected.length && values.every((value) => expected.includes(value)) && new Set(values).size === values.length;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function messageForStatus(status: number, providerMessage: unknown): string {
  if (status === 401 || status === 403) {
    return "La clave de acceso no es válida o no tiene permiso para generar material.";
  }
  if (typeof providerMessage === "string" && providerMessage.trim()) {
    return providerMessage;
  }
  return "No se pudo generar el material. Revisa la configuración y el historial de n8n.";
}
