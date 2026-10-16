import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { createInitialProfiles, createNewProfile, topicDefaults } from "./app-data";
import { MaterialResults } from "./components/material-results";
import { ProfileEditor } from "./components/profile-editor";
import type {
  FinalizationResponse,
  GenerationHistoryEntry,
  GenerationRequest,
  GenerationResponse,
  MaterialId,
  PackagePreset,
  ProfileStatus,
  StudentProfile,
  TopicKey,
} from "./domain";
import {
  hasAssessmentMaterial,
  hasObservableEvidence,
  materialCatalog,
  presetCatalog,
  presetMaterials,
} from "./package-catalog";
import { generateMockMaterial } from "./mock-generator";
import {
  finalizeWithN8n,
  N8nGenerationError,
  generateWithN8n,
} from "./n8n-client";

interface RequestForm {
  subject: string;
  topicKey: TopicKey;
  topic: string;
  preset: PackagePreset;
  requestedMaterials: MaterialId[];
  durationMinutes: string;
  generalObjective: string;
  sourceContext: string;
  generalInstructions: string;
}

interface FormMessage {
  severity: "error" | "success";
  text: string;
}

const initialTopic = "genetics" as const;
const initialPreset = "workshop" as const;
const initialForm: RequestForm = {
  subject: topicDefaults[initialTopic].subject,
  topicKey: initialTopic,
  topic: topicDefaults[initialTopic].topic,
  preset: initialPreset,
  requestedMaterials: presetMaterials(initialPreset),
  durationMinutes: "45",
  generalObjective: topicDefaults[initialTopic].objective,
  sourceContext: topicDefaults[initialTopic].sourceContext,
  generalInstructions: "",
};

const n8nGenerationUrl = import.meta.env.VITE_N8N_GENERATE_URL?.trim();
const steps = [
  "Definir paquete",
  "Perfiles y materiales",
  "Revisar y exportar",
];

export function App() {
  const [form, setForm] = useState<RequestForm>(initialForm);
  const [profiles, setProfiles] = useState<StudentProfile[]>(createInitialProfiles);
  const [generation, setGeneration] = useState<GenerationResponse | null>(null);
  const [generatedRequest, setGeneratedRequest] = useState<GenerationRequest | null>(null);
  const [generationHistory, setGenerationHistory] = useState<
    GenerationHistoryEntry[]
  >([]);
  const [formMessage, setFormMessage] = useState<FormMessage | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [accessKey, setAccessKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [finalization, setFinalization] = useState<FinalizationResponse | null>(
    null,
  );
  const [globalFeedback, setGlobalFeedback] = useState("");
  const [feedbackByProfile, setFeedbackByProfile] = useState<
    Record<string, string>
  >({});
  const [selectedProfileIds, setSelectedProfileIds] = useState<string[]>([]);
  const [includeApprovedProfiles, setIncludeApprovedProfiles] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const isLiveMode = Boolean(n8nGenerationUrl);

  const handleTopicChange = (topicKey: TopicKey) => {
    const defaults = topicDefaults[topicKey];
    setForm((current) => ({
      ...current,
      topicKey,
      subject: defaults.subject,
      topic: defaults.topic,
      generalObjective: defaults.objective,
      sourceContext: defaults.sourceContext,
    }));
    setFormMessage(null);
  };

  const handlePresetChange = (preset: PackagePreset) => {
    setForm((current) => ({
      ...current,
      preset,
      requestedMaterials: presetMaterials(preset),
    }));
    setFormMessage(null);
  };

  const handleMaterialToggle = (materialId: MaterialId, checked: boolean) => {
    setForm((current) => ({
      ...current,
      preset: "custom",
      requestedMaterials: checked
        ? [...current.requestedMaterials, materialId]
        : current.requestedMaterials.filter((item) => item !== materialId),
    }));
    setFormMessage(null);
  };

  const handleProfileChange = (updatedProfile: StudentProfile) => {
    setProfiles((currentProfiles) =>
      currentProfiles.map((profile) => (profile.id === updatedProfile.id ? updatedProfile : profile)),
    );
  };

  const handleProfileRemoval = (profileId: string) => {
    setProfiles((currentProfiles) => {
      if (currentProfiles.length === 1) {
        setFormMessage({ severity: "error", text: "La solicitud necesita al menos un perfil educativo." });
        return currentProfiles;
      }
      return currentProfiles.filter((profile) => profile.id !== profileId);
    });
  };

  const generateMaterial = async (
    request: GenerationRequest,
    kind: "initial" | "revision",
  ) => {
    setIsGenerating(true);
    setFormMessage(null);

    try {
      const response = isLiveMode
        ? await generateWithN8n(n8nGenerationUrl, accessKey, request)
        : generateMockMaterial(request);

      if (kind === "initial") {
        setGeneratedRequest(request);
        setGeneration(response);
        setGenerationHistory([
          { response, globalFeedback: "", feedbackByProfile: {} },
        ]);
        setFeedbackByProfile({});
        setSelectedProfileIds([]);
      } else {
        setGeneration((current) =>
          current ? mergeGeneration(current, response) : response,
        );
        setGenerationHistory((current) => [
          ...current,
          {
            response,
            sourceGenerationId: request.revision?.previousGenerationId,
            globalFeedback: request.revision?.globalFeedback ?? "",
            feedbackByProfile: Object.fromEntries(
              (request.revision?.profiles ?? []).map((profile) => [
                profile.profileId,
                profile.feedback,
              ]),
            ),
          },
        ]);
        setFeedbackByProfile((current) =>
          clearValues(
            current,
            request.profiles.map((profile) => profile.id),
          ),
        );
        setSelectedProfileIds([]);
        setGlobalFeedback("");
      }

      setFinalization(null);
      setActiveStep(2);
      setFormMessage({
        severity: "success",
        text: isLiveMode
          ? kind === "revision"
            ? "Nueva versión generada para los perfiles seleccionados. Las versiones aprobadas no se han modificado."
            : "Paquete educativo generado mediante n8n. Revisa cada perfil antes de aprobarlo."
          : "Paquete de demostración generado localmente. Configura el webhook para sustituir este modo por n8n.",
      });

      window.requestAnimationFrame(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        resultsRef.current?.focus({ preventScroll: true });
      });
    } catch (error) {
      setFormMessage({
        severity: "error",
        text:
          error instanceof N8nGenerationError
            ? error.message
            : "No se pudo conectar con el servicio de generación. Comprueba la URL, CORS y la disponibilidad de n8n.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleContextContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      setFormMessage({
        severity: "error",
        text: "Revisa el contexto del paquete antes de continuar.",
      });
      return;
    }
    if (isLiveMode && !accessKey.trim()) {
      setFormMessage({
        severity: "error",
        text: "Introduce la clave de acceso para generar mediante n8n.",
      });
      return;
    }
    setFormMessage(null);
    setActiveStep(1);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const selectionError = materialSelectionError(form.requestedMaterials);

    if (!formElement.checkValidity() || selectionError) {
      formElement.reportValidity();
      setFormMessage({
        severity: "error",
        text:
          selectionError ??
          "Revisa los campos obligatorios antes de generar el paquete.",
      });
      return;
    }
    if (isLiveMode && !accessKey.trim()) {
      setFormMessage({
        severity: "error",
        text: "Introduce la clave de acceso para generar mediante n8n.",
      });
      return;
    }

    const request = buildGenerationRequest(form, profiles, createRequestId());
    await generateMaterial(request, "initial");
  };

  const handleFeedbackChange = (profileId: string, feedback: string) => {
    setFeedbackByProfile((current) => ({ ...current, [profileId]: feedback }));
    setGeneration((current) =>
      updateProfileStatus(
        current,
        profileId,
        feedback.trim() ? "needs_revision" : "generated",
      ),
    );
  };

  const handleApproval = (profileId: string) => {
    setGeneration((current) =>
      updateProfileStatus(current, profileId, "approved"),
    );
    setFeedbackByProfile((current) => clearValues(current, [profileId]));
    setSelectedProfileIds((current) =>
      current.filter((id) => id !== profileId),
    );
  };

  const handleSelectionChange = (profileId: string, selected: boolean) => {
    setSelectedProfileIds((current) =>
      selected
        ? [...new Set([...current, profileId])]
        : current.filter((id) => id !== profileId),
    );
  };

  const handleRegenerate = async () => {
    if (!generation || !generatedRequest) return;
    const targets = generation.materials.filter(
      (material) =>
        selectedProfileIds.includes(material.profileId) &&
        (includeApprovedProfiles || material.status !== "approved"),
    );
    const hasFeedback =
      Boolean(globalFeedback.trim()) ||
      targets.some((target) => feedbackByProfile[target.profileId]?.trim());

    if (!targets.length) {
      setFormMessage({
        severity: "error",
        text: "Selecciona al menos un perfil pendiente de revisión para regenerar.",
      });
      return;
    }
    if (!hasFeedback) {
      setFormMessage({
        severity: "error",
        text: "Añade feedback global o un comentario para al menos uno de los perfiles seleccionados.",
      });
      return;
    }

    const selectedProfiles = generatedRequest.profiles.filter((profile) =>
      targets.some((target) => target.profileId === profile.id),
    );
    const request = buildGenerationRequest(
      form,
      selectedProfiles,
      generatedRequest.requestId,
      {
        previousGenerationId: generation.generationId,
        globalFeedback: globalFeedback.trim(),
        profiles: targets.map((material) => ({
          profileId: material.profileId,
          previousVersion: material.version,
          feedback: feedbackByProfile[material.profileId]?.trim() ?? "",
          previousArtifacts: material.artifacts,
        })),
      },
    );

    await generateMaterial(request, "revision");
  };

  const handleFinalize = async () => {
    if (!generation || !generatedRequest) return;
    const approvedProfileIds = generation.materials
      .filter((material) => material.status === "approved")
      .map((material) => material.profileId);

    if (approvedProfileIds.length !== generation.materials.length) {
      setFormMessage({
        severity: "error",
        text: "Aprueba cada perfil antes de cerrar el paquete para mantener una trazabilidad inequívoca.",
      });
      return;
    }

    setIsFinalizing(true);
    setFormMessage(null);
    try {
      const finalizationRequest = {
        requestId: generatedRequest.requestId,
        generationId: generation.generationId,
        profileCount: generation.materials.length,
        iterationCount: Math.max(0, generationHistory.length - 1),
        approvedProfileIds,
      };
      const localFinalization: FinalizationResponse = {
        requestId: finalizationRequest.requestId,
        generationId: finalizationRequest.generationId,
        finalizedAt: new Date().toISOString(),
        approvedProfileIds,
      };
      const result = isLiveMode
        ? await finalizeWithN8n(
            n8nGenerationUrl,
            accessKey,
            finalizationRequest,
          )
        : localFinalization;

      setFinalization(result);
      setFormMessage({
        severity: "success",
        text: isLiveMode
          ? "Aprobación registrada en n8n. No se realizó una nueva llamada al modelo."
          : "Aprobación registrada solo en esta vista local; el modo local no crea un log remoto.",
      });
    } catch (error) {
      setFormMessage({
        severity: "error",
        text:
          error instanceof N8nGenerationError
            ? error.message
            : "No se pudo registrar la aprobación. Revisa la configuración del webhook y vuelve a intentarlo.",
      });
    } finally {
      setIsFinalizing(false);
    }
  };

  return (
    <>
      <AppBar
        className="no-print"
        color="transparent"
        elevation={0}
        position="sticky"
        sx={{
          bgcolor: "rgb(255 255 255 / 92%)",
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(10px)",
        }}
      >
        <ToolbarContent isLiveMode={isLiveMode} />
      </AppBar>

      <Box component="main" id="workspace">
        <Container maxWidth="lg">
          <Box
            className="no-print"
            component="section"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              py: { xs: 3.5, md: 4.5 },
            }}
          >
            <Stack spacing={1.75}>
              <Typography color="primary" variant="overline">
                Sistema de diseño educativo adaptativo
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem", lg: "3.1rem" },
                  maxWidth: 820,
                }}
                variant="h1"
              >
                Paquetes educativos coherentes por perfil.
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.6, maxWidth: 760 }}
              >
                Estructura una sesión, taller, evaluación o repaso; selecciona
                los módulos y revisa cada versión antes de aprobarla.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap" }}
                useFlexGap
              >
                <Chip
                  label="Perfiles · módulos · revisión docente"
                  size="small"
                  variant="outlined"
                />
              </Stack>
            </Stack>
          </Box>

          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className="no-print"
            sx={{ mb: 3, mt: 3 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 ? (
            <Paper
              component="form"
              elevation={0}
              id="request-form"
              onSubmit={handleContextContinue}
              sx={{ border: 1, borderColor: "divider", p: { xs: 2, sm: 3 } }}
              variant="outlined"
            >
              <SectionHeading
                label="Paso 1 de 3"
                title="¿Qué quieres preparar?"
                description="El preset traduce una intención docente a una lista explícita de módulos editables."
              />
              <Grid container spacing={{ xs: 1, sm: 1.5 }} sx={{ mb: 3 }}>
                {presetCatalog.map((preset) => (
                  <Grid key={preset.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Button
                      aria-pressed={form.preset === preset.id}
                      fullWidth
                      onClick={() => handlePresetChange(preset.id)}
                      sx={{
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        minHeight: 94,
                        p: 1.5,
                        textAlign: "left",
                      }}
                      type="button"
                      variant={
                        form.preset === preset.id ? "contained" : "outlined"
                      }
                    >
                      <Stack spacing={0.5}>
                        <Typography
                          component="span"
                          sx={{ fontWeight: 750 }}
                          variant="body2"
                        >
                          {preset.label}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{
                            opacity: form.preset === preset.id ? 0.9 : 0.75,
                            whiteSpace: "normal",
                          }}
                          variant="caption"
                        >
                          {preset.description}
                        </Typography>
                      </Stack>
                    </Button>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ mb: 3 }} />
              <SectionHeading
                title="Contexto común"
                description="Este contexto se mantiene para todos los perfiles y artefactos del paquete."
              />
              <Alert
                icon={false}
                severity={isLiveMode ? "warning" : "info"}
                sx={{ mb: 2.5, py: 0, "& .MuiAlert-message": { py: 0.5 } }}
                variant="standard"
              >
                <Typography variant="body2">
                  {isLiveMode
                    ? "La clave se transmite solo como cabecera X-TFM-Access-Key; no se incluye en el JSON ni se guarda en el navegador."
                    : "Modo local: el paquete sirve para validar el flujo, los contratos y la revisión sin enviar datos a n8n."}
                </Typography>
              </Alert>
              <Grid container spacing={{ xs: 1.5, md: 2 }}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    label="Caso de demostración"
                    onChange={(event) =>
                      handleTopicChange(event.target.value as TopicKey)
                    }
                    select
                    value={form.topicKey}
                  >
                    <MenuItem value="genetics">
                      BIO-01 · Genética mendeliana
                    </MenuItem>
                    <MenuItem value="motion">
                      FIS-01 · Movimiento rectilíneo
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                  <TextField
                    fullWidth
                    label="Materia"
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        subject: event.target.value,
                      }))
                    }
                    required
                    value={form.subject}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    label="Tema o unidad"
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        topic: event.target.value,
                      }))
                    }
                    required
                    value={form.topic}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 2 }}>
                  <TextField
                    fullWidth
                    label="Duración estimada"
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        durationMinutes: event.target.value,
                      }))
                    }
                    required
                    slotProps={{ htmlInput: { max: 180, min: 5 } }}
                    type="number"
                    value={form.durationMinutes}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Objetivo general"
                    minRows={2}
                    multiline
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        generalObjective: event.target.value,
                      }))
                    }
                    required
                    value={form.generalObjective}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    helperText="Contenido de partida común. Las instrucciones incluidas en esta fuente no se ejecutan como órdenes."
                    label="Contexto o fuente de partida"
                    minRows={3}
                    multiline
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        sourceContext: event.target.value,
                      }))
                    }
                    value={form.sourceContext}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Indicaciones comunes"
                    minRows={3}
                    multiline
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        generalInstructions: event.target.value,
                      }))
                    }
                    placeholder="Por ejemplo: usar lenguaje inclusivo o priorizar una representación."
                    slotProps={{ htmlInput: { maxLength: 3000 } }}
                    value={form.generalInstructions}
                  />
                </Grid>
                {isLiveMode ? (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      autoComplete="off"
                      fullWidth
                      helperText="Se conserva solo durante esta sesión y n8n la valida antes de ejecutar el workflow."
                      label="Clave de acceso"
                      onChange={(event) => setAccessKey(event.target.value)}
                      required
                      type="password"
                      value={accessKey}
                    />
                  </Grid>
                ) : null}
              </Grid>
              <ActionRow
                message={formMessage}
                primaryLabel="Continuar con perfiles"
                primaryType="submit"
              />
            </Paper>
          ) : null}

          {activeStep === 1 ? (
            <Paper
              component="form"
              elevation={0}
              id="request-form"
              onSubmit={handleSubmit}
              sx={{ border: 1, borderColor: "divider", p: { xs: 2, sm: 3 } }}
              variant="outlined"
            >
              <SectionHeading
                label="Paso 2 de 3"
                title="Materiales del paquete"
                description="La selección se transmite siempre como una lista explícita, incluso cuando procede de un preset."
              />
              <Typography
                color="text.secondary"
                sx={{ mb: 1.5 }}
                variant="body2"
              >
                {form.preset === "custom"
                  ? "Selección manual activa."
                  : `Preset activo: ${presetCatalog.find((preset) => preset.id === form.preset)?.label}. Modificar un módulo cambia a Personalizado.`}
              </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <MaterialSelection
                  audience="students"
                  form={form}
                  onToggle={handleMaterialToggle}
                  title="Material para alumnado"
                />
                <MaterialSelection
                  audience="teacher"
                  form={form}
                  onToggle={handleMaterialToggle}
                  title="Material para docente"
                />
              </Grid>
              <Divider sx={{ my: 3 }} />
              <SectionHeading
                title="Perfiles a adaptar"
                description="Curso, conocimientos previos, objetivo y complejidad esperada definen la adaptación; la edad no decide por sí sola."
              />
              <Stack spacing={1}>
                {profiles.map((profile, index) => (
                  <ProfileEditor
                    index={index}
                    key={profile.id}
                    onChange={handleProfileChange}
                    onRemove={handleProfileRemoval}
                    profile={profile}
                    totalProfiles={profiles.length}
                  />
                ))}
              </Stack>
              <Button
                onClick={() =>
                  setProfiles((currentProfiles) => [
                    ...currentProfiles,
                    createNewProfile(currentProfiles),
                  ])
                }
                startIcon={<AddRoundedIcon />}
                sx={{ mt: 2 }}
                type="button"
                variant="outlined"
              >
                Añadir otro perfil
              </Button>
              <Divider sx={{ my: 3 }} />
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                spacing={1.5}
                sx={{ justifyContent: "space-between" }}
              >
                <Button
                  onClick={() => {
                    setActiveStep(0);
                    setFormMessage(null);
                  }}
                  startIcon={<ArrowBackRoundedIcon />}
                  type="button"
                  variant="outlined"
                >
                  Volver al contexto
                </Button>
                <Box aria-live="polite">
                  {formMessage ? (
                    <Alert severity={formMessage.severity}>
                      {formMessage.text}
                    </Alert>
                  ) : null}
                </Box>
                <Button
                  disabled={isGenerating}
                  endIcon={<ArrowForwardRoundedIcon />}
                  type="submit"
                  variant="contained"
                >
                  {isGenerating
                    ? "Generando…"
                    : isLiveMode
                      ? "Generar paquete"
                      : "Generar paquete de prueba"}
                </Button>
              </Stack>
            </Paper>
          ) : null}

          {activeStep === 2 ? (
            <Box sx={{ pb: 3 }}>
              {formMessage ? (
                <Alert severity={formMessage.severity} sx={{ mb: 2 }}>
                  {formMessage.text}
                </Alert>
              ) : null}
              <MaterialResults
                feedbackByProfile={feedbackByProfile}
                finalization={finalization}
                generationHistory={generationHistory}
                globalFeedback={globalFeedback}
                includeApprovedProfiles={includeApprovedProfiles}
                isFinalizing={isFinalizing}
                isGenerating={isGenerating}
                onApproval={handleApproval}
                onEditRequest={() => {
                  setActiveStep(1);
                  setFormMessage(null);
                }}
                onFeedbackChange={handleFeedbackChange}
                onFinalize={handleFinalize}
                onGlobalFeedbackChange={setGlobalFeedback}
                onIncludeApprovedChange={setIncludeApprovedProfiles}
                onPrint={() => window.print()}
                onRegenerate={handleRegenerate}
                onSelectionChange={handleSelectionChange}
                panelRef={resultsRef}
                request={generatedRequest}
                response={generation}
                selectedProfileIds={selectedProfileIds}
              />
            </Box>
          ) : null}
        </Container>
      </Box>

      <Box
        className="no-print"
        component="footer"
        sx={{ borderTop: 1, borderColor: "divider", py: 3 }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography color="text.secondary" variant="body2">
              Adaptive Lab · MVP de investigación. La IA propone; el docente
              revisa, corrige y aprueba.
            </Typography>
            <Typography color="text.secondary" variant="body2">
              La opción PDF abre la impresión del navegador y renderiza solo
              contenido estructurado.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function ToolbarContent({ isLiveMode }: { isLiveMode: boolean }) {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 60 },
        }}
      >
        <Stack
          component="a"
          direction="row"
          href="#workspace"
          spacing={1}
          sx={{
            alignItems: "center",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              alignItems: "center",
              bgcolor: "primary.main",
              borderRadius: 1.25,
              color: "common.white",
              display: "flex",
              height: 32,
              justifyContent: "center",
              width: 32,
            }}
          >
            <SchoolOutlinedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Typography sx={{ fontWeight: 750 }} variant="subtitle2">
            Adaptive Lab
          </Typography>
          <Chip
            label="MVP académico"
            size="small"
            sx={{ display: { xs: "none", sm: "flex" } }}
            variant="outlined"
          />
        </Stack>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            aria-hidden="true"
            sx={{
              bgcolor: "success.main",
              borderRadius: "50%",
              height: 7,
              width: 7,
            }}
          />
          <Typography color="text.secondary" variant="body2">
            {isLiveMode ? "n8n configurado" : "Modo local"}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description: string;
}) {
  return (
    <Stack spacing={0.5} sx={{ mb: 2.5 }}>
      {label ? (
        <Typography color="primary" variant="overline">
          {label}
        </Typography>
      ) : null}
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {description}
      </Typography>
    </Stack>
  );
}

function MaterialSelection({
  audience,
  form,
  onToggle,
  title,
}: {
  audience: "students" | "teacher";
  form: RequestForm;
  onToggle: (materialId: MaterialId, checked: boolean) => void;
  title: string;
}) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Paper sx={{ height: "100%", p: 2 }} variant="outlined">
        <Typography component="h3" variant="subtitle1">
          {title}
        </Typography>
        <FormGroup sx={{ mt: 1 }}>
          {materialCatalog
            .filter((material) => material.audience === audience)
            .map((material) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.requestedMaterials.includes(material.id)}
                    onChange={(event) =>
                      onToggle(material.id, event.target.checked)
                    }
                  />
                }
                key={material.id}
                label={
                  <Box>
                    <Typography variant="body2">{material.label}</Typography>
                    <Typography color="text.secondary" variant="caption">
                      {material.description}
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", my: 0.25 }}
              />
            ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
}

function ActionRow({
  message,
  primaryLabel,
  primaryType,
}: {
  message: FormMessage | null;
  primaryLabel: string;
  primaryType: "submit";
}) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{
        alignItems: { xs: "stretch", sm: "center" },
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      <Box aria-live="polite">
        {message ? (
          <Alert severity={message.severity}>{message.text}</Alert>
        ) : null}
      </Box>
      <Button
        endIcon={<ArrowForwardRoundedIcon />}
        type={primaryType}
        variant="contained"
      >
        {primaryLabel}
      </Button>
    </Stack>
  );
}

function buildGenerationRequest(
  form: RequestForm,
  profiles: StudentProfile[],
  requestId: string,
  revision?: GenerationRequest["revision"],
): GenerationRequest {
  return {
    requestId,
    subject: form.subject.trim(),
    topicKey: form.topicKey,
    topic: form.topic.trim(),
    generalObjective: form.generalObjective.trim(),
    durationMinutes: Number(form.durationMinutes),
    preset: form.preset,
    requestedMaterials: form.requestedMaterials,
    sourceContext: form.sourceContext.trim(),
    generalInstructions: form.generalInstructions.trim(),
    profiles,
    ...(revision ? { revision } : {}),
  };
}

function createRequestId(): string {
  return typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `REQ-${Date.now().toString(36).toUpperCase()}`;
}

function materialSelectionError(materials: MaterialId[]): string | null {
  if (!materials.length)
    return "Selecciona al menos un módulo para el paquete.";
  if (materials.includes("answer_key") && !hasAssessmentMaterial(materials)) {
    return "El solucionario requiere ejercicios, cuestionario o evaluación breve para poder corresponderse con sus ítems.";
  }
  if (materials.includes("rubric") && !hasObservableEvidence(materials)) {
    return "La rúbrica requiere una actividad, taller o instrumento de evaluación con evidencia observable.";
  }
  return null;
}

function mergeGeneration(
  current: GenerationResponse,
  update: GenerationResponse,
): GenerationResponse {
  const byProfile = new Map(
    update.materials.map((material) => [material.profileId, material]),
  );
  return {
    ...current,
    generationId: update.generationId,
    generatedAt: update.generatedAt,
    title: update.title,
    materials: current.materials.map(
      (material) => byProfile.get(material.profileId) ?? material,
    ),
  };
}

function updateProfileStatus(
  current: GenerationResponse | null,
  profileId: string,
  status: ProfileStatus,
): GenerationResponse | null {
  if (!current) return current;
  return {
    ...current,
    materials: current.materials.map((material) =>
      material.profileId === profileId && material.status !== "approved"
        ? { ...material, status }
        : material,
    ),
  };
}

function clearValues(
  values: Record<string, string>,
  profileIds: string[],
): Record<string, string> {
  const next = { ...values };
  profileIds.forEach((profileId) => delete next[profileId]);
  return next;
}
