import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import type { RefObject } from "react";

import { accessibilitySupportLabels } from "../accessibility-supports";
import type {
  FinalizationResponse,
  GenerationHistoryEntry,
  GenerationRequest,
  GenerationResponse,
  MaterialId,
  ProfileArtifacts,
} from "../domain";
import { materialLabel } from "../package-catalog";

interface MaterialResultsProps {
  panelRef: RefObject<HTMLDivElement | null>;
  request: GenerationRequest | null;
  response: GenerationResponse | null;
  generationHistory: GenerationHistoryEntry[];
  onPrint: () => void;
  globalFeedback: string;
  feedbackByProfile: Record<string, string>;
  selectedProfileIds: string[];
  includeApprovedProfiles: boolean;
  finalization: FinalizationResponse | null;
  isFinalizing: boolean;
  isGenerating: boolean;
  onReturnToMenu: () => void;
  onGlobalFeedbackChange: (value: string) => void;
  onFeedbackChange: (profileId: string, value: string) => void;
  onSelectionChange: (profileId: string, selected: boolean) => void;
  onIncludeApprovedChange: (value: boolean) => void;
  onApproval: (profileId: string) => void;
  onFinalize: () => void;
  onRegenerate: () => void;
}

const statusLabels = {
  generated: "Pendiente de revisión",
  needs_revision: "Revisión solicitada",
  approved: "Aprobado",
} as const;

export function MaterialResults({
  panelRef,
  request,
  response,
  generationHistory,
  onPrint,
  globalFeedback,
  feedbackByProfile,
  selectedProfileIds,
  includeApprovedProfiles,
  finalization,
  isFinalizing,
  isGenerating,
  onReturnToMenu,
  onGlobalFeedbackChange,
  onFeedbackChange,
  onSelectionChange,
  onIncludeApprovedChange,
  onApproval,
  onFinalize,
  onRegenerate,
}: MaterialResultsProps) {
  const hasResults = response !== null && request !== null;
  const resultLabel = response?.mode === "live" ? "Paquete generado con n8n" : "Paquete local generado";
  const resultMode = response?.mode === "live" ? "workflow n8n" : "modo local";
  const allApproved = hasResults && response.materials.every((material) => material.status === "approved");
  const selectedCount = response?.materials.filter((material) => selectedProfileIds.includes(material.profileId)).length ?? 0;

  return (
    <Paper component="section" elevation={0} id="results" ref={panelRef} sx={{ border: 1, borderColor: "divider", p: { xs: 2, sm: 3 }, scrollMarginTop: 76 }} tabIndex={-1} variant="outlined">
      <Stack className="no-print" direction={{ xs: "column", md: "row" }} spacing={1.5} sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", mb: 2.5 }}>
        <Box>
          <Typography component="h2" variant="h5">Paquete educativo por perfil</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, mt: 0.5 }} variant="body2">
            Revisa la coherencia entre explicación, tarea, evaluación y material docente antes de aprobar cada perfil.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }} useFlexGap>
          <Chip color={hasResults ? "success" : "default"} label={hasResults ? resultLabel : "Aún sin generar"} size="small" />
          <Button disabled={!hasResults} onClick={onPrint} startIcon={<PrintOutlinedIcon />} variant="outlined">Guardar como PDF</Button>
        </Stack>
      </Stack>

      {hasResults ? (
        <Box aria-live="polite">
          <Box className="print-only">
            <Typography variant="overline">Adaptive Lab · Paquete educativo adaptativo</Typography>
            <Typography component="h2" variant="h4">{response.title}</Typography>
          </Box>

          <Paper sx={{ bgcolor: "rgb(244 246 255)", border: 1, borderColor: "primary.light", mb: 2.5, p: 2.5 }} variant="outlined">
            <Stack direction={{ xs: "column", lg: "row" }} spacing={2} sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typography color="primary" variant="overline">{response.generationId} · {resultMode}</Typography>
                <Typography component="h3" variant="h5">{response.title}</Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 760, mt: 0.75 }}>{response.generalObjective}</Typography>
              </Box>
              <Grid container spacing={1} sx={{ alignContent: "flex-start", flexShrink: 0, minWidth: { lg: 330 } }}>
                <Grid size={4}><Metadata label="Perfiles" value={String(response.materials.length)} /></Grid>
                <Grid size={4}><Metadata label="Duración" value={`${request.durationMinutes} min`} /></Grid>
                <Grid size={4}><Metadata label="Módulos" value={String(response.requestedMaterials.length)} /></Grid>
              </Grid>
            </Stack>
            <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", mt: 1.5 }} useFlexGap>
              {response.requestedMaterials.map((materialId) => <Chip key={materialId} label={materialLabel(materialId)} size="small" variant="outlined" />)}
            </Stack>
          </Paper>

          <Stack spacing={2}>
            {response.materials.map((material, index) => {
              const profile = request.profiles.find((item) => item.id === material.profileId);
              const requestedSupports = profile ? accessibilitySupportLabels(profile.accessibilitySupportIds) : "";
              const canReviseApproved = includeApprovedProfiles && material.status === "approved";
              const reviewDisabled = finalization !== null || isFinalizing || isGenerating || (material.status === "approved" && !canReviseApproved);

              return (
                <Card className="print-material" component="article" key={material.profileId} sx={(theme) => ({ borderLeft: 4, borderLeftColor: [theme.palette.primary.main, theme.palette.secondary.main, "#b57824"][index % 3] })} variant="outlined">
                  <CardContent sx={{ p: { xs: 2, sm: 2.5 }, "&:last-child": { pb: { xs: 2, sm: 2.5 } } }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: { xs: "flex-start", sm: "flex-start" }, justifyContent: "space-between" }}>
                      <Box>
                        <Typography color="primary" variant="overline">{material.profileId} · Versión {material.version} · {material.generationId}</Typography>
                        <Typography component="h3" variant="h5">{material.profileName}</Typography>
                      </Box>
                      <Chip color={material.status === "approved" ? "success" : material.status === "needs_revision" ? "warning" : "default"} label={statusLabels[material.status]} size="small" variant="outlined" />
                    </Stack>
                    <Typography color="secondary.dark" sx={{ fontWeight: 700, mt: 1.5 }} variant="body2">{material.adaptationSummary}</Typography>
                    {requestedSupports ? <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">Apoyos solicitados: {requestedSupports}.</Typography> : null}

                    <Divider sx={{ my: 2 }} />
                    <Stack spacing={2}>
                      {response.requestedMaterials.map((materialId) => <ArtifactView artifacts={material.artifacts} key={materialId} materialId={materialId} />)}
                    </Stack>

                    <Box className="no-print" sx={{ mt: 2.5 }}>
                      <Stack direction={{ xs: "column", md: "row" }} spacing={1} sx={{ alignItems: { xs: "flex-start", md: "center" }, mb: 1 }}>
                        <FormControlLabel
                          control={<Checkbox checked={selectedProfileIds.includes(material.profileId)} disabled={reviewDisabled} onChange={(event) => onSelectionChange(material.profileId, event.target.checked)} />}
                          label="Incluir en la siguiente regeneración"
                        />
                        <Button color="success" disabled={reviewDisabled || material.status === "approved"} onClick={() => onApproval(material.profileId)} size="small" startIcon={<CheckCircleOutlineIcon />} variant="outlined">
                          {material.status === "approved" ? "Perfil aprobado" : "Aprobar perfil"}
                        </Button>
                      </Stack>
                      <TextField
                        disabled={reviewDisabled}
                        fullWidth
                        helperText={material.status === "approved" && !includeApprovedProfiles ? "Un perfil aprobado queda protegido; activa la opción de regeneración explícita para modificarlo." : "El feedback se envía junto con el contexto y la versión anterior de este perfil."}
                        label={`Feedback para ${material.profileName}`}
                        minRows={2}
                        multiline
                        onChange={(event) => onFeedbackChange(material.profileId, event.target.value)}
                        placeholder="Indica qué debe conservarse, ajustarse o aclararse en este perfil."
                        slotProps={{ htmlInput: { maxLength: 2000 } }}
                        value={feedbackByProfile[material.profileId] ?? ""}
                      />
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>

          <Paper className="no-print" sx={{ bgcolor: "action.hover", mt: 2.5, p: 2.5 }} variant="outlined">
            <Stack spacing={1.5}>
              <Box>
                <Typography component="h3" variant="h6">Revisión, iteración y cierre</Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }} variant="body2">
                  Una iteración conserva el contexto original y envía solo los perfiles seleccionados, su versión previa y el feedback. Los perfiles aprobados quedan excluidos salvo confirmación explícita.
                </Typography>
              </Box>
              <TextField disabled={finalization !== null || isFinalizing || isGenerating} fullWidth label="Feedback global" minRows={2} multiline onChange={(event) => onGlobalFeedbackChange(event.target.value)} placeholder="Por ejemplo: conserva el contenido base y aclara el vínculo entre la actividad y la evaluación." slotProps={{ htmlInput: { maxLength: 2000 } }} value={globalFeedback} />
              <FormControlLabel control={<Switch checked={includeApprovedProfiles} disabled={finalization !== null || isFinalizing || isGenerating} onChange={(event) => onIncludeApprovedChange(event.target.checked)} />} label="Permitir seleccionar de forma explícita perfiles ya aprobados" />
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1} useFlexGap>
                <Button onClick={onReturnToMenu} startIcon={<ArrowBackRoundedIcon />} variant="outlined">Volver al menú</Button>
                <Button disabled={!selectedCount || finalization !== null || isGenerating || isFinalizing} onClick={onRegenerate} startIcon={<ReplayOutlinedIcon />} variant="contained">
                  {isGenerating ? "Regenerando…" : `Regenerar ${selectedCount} perfil${selectedCount === 1 ? "" : "es"}`}
                </Button>
                <Button color="success" disabled={!allApproved || finalization !== null || isGenerating || isFinalizing} onClick={onFinalize} startIcon={<CheckCircleOutlineIcon />} variant="outlined">
                  {finalization ? "Paquete aprobado" : isFinalizing ? "Registrando…" : "Cerrar aprobación"}
                </Button>
              </Stack>
              {!allApproved && !finalization ? <Typography color="text.secondary" variant="caption">Aprueba cada perfil para poder cerrar el paquete. El historial conserva las generaciones realizadas durante esta sesión.</Typography> : null}
            </Stack>
          </Paper>

          <Paper className="no-print" sx={{ mt: 2.5, p: 2 }} variant="outlined">
            <Typography component="h3" variant="subtitle1">Historial de generaciones</Typography>
            <Stack spacing={0.75} sx={{ mt: 1 }}>
              {generationHistory.map((entry, index) => (
                <Box key={`${entry.response.generationId}-${index}`}>
                  <Typography color="text.secondary" variant="body2">
                    {index + 1}. {entry.response.generationId} · {entry.response.generatedAt} · {entry.response.materials.map((material) => `${material.profileId} v${material.version}`).join(", ")}
                  </Typography>
                  {entry.sourceGenerationId ? (
                    <Typography color="text.secondary" variant="caption">
                      Iteración de {entry.sourceGenerationId}. {entry.globalFeedback ? `Feedback global: ${entry.globalFeedback}` : "Sin feedback global."} {Object.entries(entry.feedbackByProfile).filter(([, feedback]) => feedback).map(([profileId, feedback]) => `${profileId}: ${feedback}`).join(" · ")}
                    </Typography>
                  ) : null}
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      ) : (
        <Paper variant="outlined" sx={{ alignItems: "center", bgcolor: "action.hover", borderStyle: "dashed", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 200, px: 3, py: 4, textAlign: "center" }}>
          <AutoAwesomeOutlinedIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
          <Typography color="primary" variant="overline">Preparado para un paquete coherente</Typography>
          <Typography component="h3" sx={{ mt: 0.5 }} variant="subtitle1">La adaptación debe poder explicarse y revisarse.</Typography>
        </Paper>
      )}
    </Paper>
  );
}

function ArtifactView({ artifacts, materialId }: { artifacts: ProfileArtifacts; materialId: MaterialId }) {
  if (materialId === "explanation" && artifacts.explanation) {
    return <Box><ArtifactHeading title={artifacts.explanation.title} /><Typography color="text.secondary">{artifacts.explanation.introduction}</Typography>{artifacts.explanation.sections.map((section) => <Box key={section.heading} sx={{ mt: 1 }}><Typography component="h5" variant="subtitle2">{section.heading}</Typography><Typography color="text.secondary">{section.content}</Typography></Box>)}</Box>;
  }
  if (materialId === "summary" && artifacts.summary) {
    return <Box><ArtifactHeading title={artifacts.summary.title} /><Typography color="text.secondary">{artifacts.summary.content}</Typography></Box>;
  }
  if ((materialId === "activity" || materialId === "workshop") && artifacts[materialId]) {
    const artifact = artifacts[materialId];
    return <Paper sx={{ bgcolor: "action.hover", p: 2 }} variant="outlined"><ArtifactHeading title={artifact.title} /><ol className="artifact-list">{artifact.instructions.map((instruction) => <li key={instruction}><Typography color="text.secondary">{instruction}</Typography></li>)}</ol><Typography color="success.dark" sx={{ fontWeight: 700, mt: 1 }} variant="body2">Evidencia esperada: {artifact.expectedEvidence}</Typography><Typography color="text.secondary" sx={{ mt: 0.5 }} variant="caption">Tiempo orientativo: {artifact.estimatedMinutes} min</Typography></Paper>;
  }
  if ((materialId === "exercises" || materialId === "quiz" || materialId === "short_assessment") && artifacts[materialId]) {
    const artifact = artifacts[materialId];
    return <Box><ArtifactHeading title={artifact.title} /><Typography color="text.secondary">{artifact.instructions}</Typography><ol className="artifact-list">{artifact.items.map((item) => <li key={item.id}><Typography color="text.secondary"><strong>{item.id}.</strong> {item.prompt}</Typography></li>)}</ol></Box>;
  }
  if (materialId === "answer_key" && artifacts.answer_key) {
    return <Paper sx={{ bgcolor: "rgb(250 248 239)", p: 2 }} variant="outlined"><ArtifactHeading title={artifacts.answer_key.title} /><Stack spacing={1}>{artifacts.answer_key.items.map((item) => <Box key={item.itemId}><Typography component="h5" variant="subtitle2">{item.itemId}</Typography><Typography color="text.secondary">{item.answer}</Typography><Typography color="text.secondary" variant="caption">{item.rationale}</Typography></Box>)}</Stack></Paper>;
  }
  if (materialId === "evaluation_criteria" && artifacts.evaluation_criteria) {
    return <Paper sx={{ bgcolor: "rgb(250 248 239)", p: 2 }} variant="outlined"><ArtifactHeading title={artifacts.evaluation_criteria.title} /><Stack spacing={1}>{artifacts.evaluation_criteria.criteria.map((criterion) => <Box key={criterion.criterion}><Typography component="h5" variant="subtitle2">{criterion.criterion}</Typography><Typography color="text.secondary">{criterion.description}</Typography></Box>)}</Stack></Paper>;
  }
  if (materialId === "rubric" && artifacts.rubric) {
    return <Paper sx={{ bgcolor: "rgb(250 248 239)", p: 2 }} variant="outlined"><ArtifactHeading title={artifacts.rubric.title} /><Typography color="success.dark" sx={{ fontWeight: 700 }} variant="body2">Evidencia esperada: {artifacts.rubric.evidenceExpected}</Typography><Stack spacing={1.5} sx={{ mt: 1.5 }}>{artifacts.rubric.criteria.map((criterion) => <Box key={criterion.criterion}><Typography component="h5" variant="subtitle2">{criterion.criterion}</Typography><Typography color="text.secondary">{criterion.description}</Typography><Grid container spacing={1} sx={{ mt: 0.25 }}>{criterion.levels.map((level) => <Grid key={level.label} size={{ xs: 12, sm: 4 }}><Paper sx={{ height: "100%", p: 1 }} variant="outlined"><Typography component="h6" variant="caption">{level.label}</Typography><Typography color="text.secondary" variant="body2">{level.description}</Typography></Paper></Grid>)}</Grid></Box>)}</Stack></Paper>;
  }
  if (materialId === "teacher_guide" && artifacts.teacher_guide) {
    return <Paper sx={{ bgcolor: "rgb(250 248 239)", p: 2 }} variant="outlined"><ArtifactHeading title={artifacts.teacher_guide.title} /><Typography color="text.secondary">{artifacts.teacher_guide.overview}</Typography><ol className="artifact-list">{artifacts.teacher_guide.sequence.map((step) => <li key={step.step}><Typography component="span" sx={{ fontWeight: 700 }} variant="body2">{step.step}: </Typography><Typography color="text.secondary" component="span">{step.description}</Typography></li>)}</ol><Typography color="text.secondary" variant="caption">Revisión docente: {artifacts.teacher_guide.reviewNotes}</Typography></Paper>;
  }
  return null;
}

function ArtifactHeading({ title }: { title: string }) {
  return <Typography component="h4" sx={{ mb: 0.75 }} variant="subtitle1">{title}</Typography>;
}

function Metadata({ label, value }: { label: string; value: string }) {
  return <Paper sx={{ height: "100%", minWidth: 0, p: 1.25 }} variant="outlined"><Typography color="text.secondary" noWrap variant="caption">{label}</Typography><Typography sx={{ fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} variant="body2">{value}</Typography></Paper>;
}
