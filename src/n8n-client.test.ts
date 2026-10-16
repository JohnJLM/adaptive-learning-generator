import { describe, expect, it, vi } from "vitest";

import type { FinalizationRequest, GenerationRequest, GenerationResponse } from "./domain";
import { finalizeWithN8n, N8nGenerationError, generateWithN8n } from "./n8n-client";

const request: GenerationRequest = {
  requestId: "REQ-TEST",
  subject: "Biología y Geología",
  topicKey: "genetics",
  topic: "Genética mendeliana",
  generalObjective: "Explicar un modelo de herencia.",
  durationMinutes: 30,
  preset: "class_session",
  requestedMaterials: ["explanation"],
  sourceContext: "Contexto de prueba.",
  generalInstructions: "",
  profiles: [
    {
      id: "P01",
      name: "Acceso inicial",
      course: "1.º ESO",
      knowledgeLevel: "Inicial",
      priorKnowledge: "Vocabulario elemental.",
      specificObjective: "Reconocer la idea central.",
      expectedComplexity: "introductory",
      accessibilitySupportIds: ["plain_language"],
      considerations: "Apoyo explícito.",
      additionalInstructions: "",
    },
  ],
};

const liveResponse: GenerationResponse = {
  requestId: request.requestId,
  generationId: "GEN-TEST",
  mode: "live",
  generatedAt: "2026-10-12T00:00:00.000Z",
  title: "Genética mendeliana",
  generalObjective: request.generalObjective,
  preset: request.preset,
  requestedMaterials: request.requestedMaterials,
  materials: [
    {
      profileId: "P01",
      profileName: "Acceso inicial",
      generationId: "GEN-TEST",
      version: 1,
      status: "generated",
      adaptationSummary: "Vocabulario accesible y ejemplo guiado.",
      artifacts: {
        explanation: {
          title: "Explicación",
          introduction: "Introducción.",
          sections: [{ heading: "Idea clave", content: "Contenido válido." }],
        },
      },
    },
  ],
};

const finalizationRequest: FinalizationRequest = {
  requestId: request.requestId,
  generationId: liveResponse.generationId,
  profileCount: 1,
  iterationCount: 2,
  approvedProfileIds: ["P01"],
};

describe("generateWithN8n", () => {
  it("envía la clave exclusivamente como cabecera y conserva el contrato JSON", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify(liveResponse), { status: 200, headers: { "Content-Type": "application/json" } }),
    );

    await expect(generateWithN8n("https://n8n.example/webhook/generate", "clave-manual", request, fetcher)).resolves.toEqual(liveResponse);

    const [, options] = fetcher.mock.calls[0] ?? [];
    expect(options?.headers).toMatchObject({ "X-TFM-Access-Key": "clave-manual" });
    expect(JSON.parse(String(options?.body))).toEqual(request);
    expect(JSON.parse(String(options?.body))).not.toHaveProperty("accessKey");
  });

  it("rechaza una respuesta que omite un artefacto solicitado", async () => {
    const invalidResponse = { ...liveResponse, materials: [{ ...liveResponse.materials[0], artifacts: {} }] };
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(invalidResponse), { status: 200 }));

    await expect(generateWithN8n("https://n8n.example/webhook/generate", "clave-manual", request, fetcher)).rejects.toEqual(
      new N8nGenerationError(502, "n8n devolvió una respuesta que no cumple el contrato de generación."),
    );
  });

  it("explica una denegación de acceso sin exponer la respuesta interna", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ error: { code: "UNAUTHORIZED", message: "secreto interno" } }), { status: 401 }),
    );

    await expect(generateWithN8n("https://n8n.example/webhook/generate", "incorrecta", request, fetcher)).rejects.toEqual(
      new N8nGenerationError(401, "La clave de acceso no es válida o no tiene permiso para generar material.", "UNAUTHORIZED"),
    );
  });

  it("registra el cierre sin enviar comentarios ni volver a generar", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(
        JSON.stringify({ requestId: request.requestId, generationId: liveResponse.generationId, finalizedAt: "2026-10-12T00:00:00.000Z", approvedProfileIds: ["P01"] }),
        { status: 202, headers: { "Content-Type": "application/json" } },
      ),
    );

    await expect(finalizeWithN8n("https://n8n.example/webhook/generate", "clave-manual", finalizationRequest, fetcher)).resolves.toMatchObject({ generationId: liveResponse.generationId });

    const [, options] = fetcher.mock.calls[0] ?? [];
    expect(options?.headers).toMatchObject({ "X-TFM-Access-Key": "clave-manual", "X-TFM-Event": "finalize" });
    expect(JSON.parse(String(options?.body))).toEqual(finalizationRequest);
  });
});
