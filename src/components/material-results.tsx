import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { RefObject } from "react";

import type { GenerationRequest, GenerationResponse } from "../domain";

interface MaterialResultsProps {
  panelRef: RefObject<HTMLDivElement | null>;
  request: GenerationRequest | null;
  response: GenerationResponse | null;
  onPrint: () => void;
}

export function MaterialResults({ panelRef, request, response, onPrint }: MaterialResultsProps) {
  const hasResults = response !== null && request !== null;

  return (
    <Paper
      component="section"
      elevation={0}
      id="results"
      ref={panelRef}
      sx={{ border: 1, borderColor: "divider", p: { xs: 2, sm: 3 }, scrollMarginTop: 76 }}
      tabIndex={-1}
      variant="outlined"
    >
      <Stack
        className="no-print"
        direction={{ xs: "column", md: "row" }}
        spacing={1.5}
        sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", mb: 2.5 }}
      >
        <Box>
          <Typography component="h2" variant="h5">
            Material por perfil
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680, mt: 0.5 }} variant="body2">
            Contrasta qué cambia y por qué antes de considerar una salida como apta para revisión docente.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }} useFlexGap>
          <Chip
            color={hasResults ? "success" : "default"}
            label={hasResults ? "Ejemplo local generado" : "Aún sin generar"}
            size="small"
          />
          <Button
            disabled={!hasResults}
            onClick={onPrint}
            startIcon={<PrintOutlinedIcon />}
            variant="outlined"
          >
            Guardar como PDF
          </Button>
        </Stack>
      </Stack>

      {hasResults ? (
        <Box aria-live="polite">
          <Box className="print-only">
            <Typography variant="overline">Adaptive Lab · Material educativo adaptativo</Typography>
            <Typography component="h2" variant="h4">
              {response.title}
            </Typography>
          </Box>

          <Paper sx={{ bgcolor: "rgb(244 246 255)", border: 1, borderColor: "primary.light", mb: 2.5, p: 2.5 }} variant="outlined">
            <Stack direction={{ xs: "column", lg: "row" }} spacing={2} sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typography color="primary" variant="overline">
                  {response.generationId} · modo local
                </Typography>
                <Typography component="h3" variant="h5">
                  {response.title}
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 760, mt: 0.75 }}>
                  {response.generalObjective}
                </Typography>
              </Box>
              <Grid container spacing={1} sx={{ alignContent: "flex-start", flexShrink: 0, minWidth: { lg: 290 } }}>
                <Grid size={4}>
                  <Metadata label="Perfiles" value={String(response.materials.length)} />
                </Grid>
                <Grid size={4}>
                  <Metadata label="Duración" value={`${request.durationMinutes} min`} />
                </Grid>
                <Grid size={4}>
                  <Metadata label="Formato" value={request.materialType} />
                </Grid>
              </Grid>
            </Stack>
          </Paper>

          <Stack spacing={2}>
            {response.materials.map((material, index) => (
              <Card
                className="print-material"
                component="article"
                key={material.profileId}
                sx={(theme) => ({
                  borderLeft: 4,
                  borderLeftColor: [theme.palette.primary.main, theme.palette.secondary.main, "#b57824"][index % 3],
                })}
                variant="outlined"
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.5 }, "&:last-child": { pb: { xs: 2, sm: 2.5 } } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    sx={{ alignItems: { xs: "flex-start", sm: "flex-start" }, justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography color="primary" variant="overline">
                        {material.profileId}
                      </Typography>
                      <Typography component="h3" variant="h5">
                        {material.profileName}
                      </Typography>
                    </Box>
                    <Chip color="warning" label="Borrador local" size="small" variant="outlined" />
                  </Stack>
                  <Typography color="secondary.dark" sx={{ fontWeight: 700, mt: 1.5 }} variant="body2">
                    {material.adaptationSummary}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Stack spacing={2}>
                    <Box>
                      <Typography component="h4" variant="subtitle2">
                        Explicación
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                        {material.content.introduction}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {material.content.explanation}
                      </Typography>
                    </Box>
                    <Paper sx={{ bgcolor: "action.hover", p: 2 }} variant="outlined">
                      <Typography color="secondary" variant="overline">
                        Actividad guiada
                      </Typography>
                      <Typography component="h4" variant="subtitle1">
                        {material.content.activity.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                        {material.content.activity.instructions}
                      </Typography>
                      <Typography color="success.dark" sx={{ fontWeight: 700, mt: 1 }} variant="body2">
                        Evidencia esperada: {material.content.activity.expectedEvidence}
                      </Typography>
                    </Paper>
                    <Box>
                      <Typography component="h4" variant="subtitle2">
                        Pregunta de comprobación
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                        {material.content.checkQuestion}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      ) : (
        <Paper
          variant="outlined"
          sx={{
            alignItems: "center",
            bgcolor: "action.hover",
            borderStyle: "dashed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: 200,
            px: 3,
            py: 4,
            textAlign: "center",
          }}
        >
          <AutoAwesomeOutlinedIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
          <Typography color="primary" variant="overline">
            Preparado para comparar
          </Typography>
          <Typography component="h3" sx={{ mt: 0.5 }} variant="subtitle1">
            La adaptación debe poder explicarse.
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 500, mt: 1 }}>
            Completa la solicitud y genera un ejemplo para ver cómo cambian vocabulario, apoyo, razonamiento y actividad.
          </Typography>
        </Paper>
      )}
    </Paper>
  );
}

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <Paper sx={{ height: "100%", minWidth: 0, p: 1.25 }} variant="outlined">
      <Typography color="text.secondary" noWrap variant="caption">
        {label}
      </Typography>
      <Typography sx={{ fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} variant="body2">
        {value}
      </Typography>
    </Paper>
  );
}
