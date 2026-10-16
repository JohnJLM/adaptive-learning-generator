import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import type { Complexity, StudentProfile } from "../domain";
import { accessibilitySupports } from "../accessibility-supports";

interface ProfileEditorProps {
  index: number;
  profile: StudentProfile;
  totalProfiles: number;
  onChange: (profile: StudentProfile) => void;
  onRemove: (profileId: string) => void;
}

const complexityLabels: Record<Complexity, string> = {
  introductory: "Inicial",
  intermediate: "Intermedia",
  advanced: "Avanzada",
};

export function ProfileEditor({
  index,
  profile,
  totalProfiles,
  onChange,
  onRemove,
}: ProfileEditorProps) {
  return (
    <Accordion
      defaultExpanded={index === 0}
      disableGutters
      slotProps={{ transition: { unmountOnExit: true } }}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: "10px !important",
        boxShadow: "none",
        overflow: "hidden",
        "&::before": { display: "none" },
        "&.Mui-expanded": { m: 0 },
      }}
    >
      <AccordionSummary
        aria-controls={`${profile.id}-content`}
        expandIcon={<ExpandMoreRoundedIcon />}
        id={`${profile.id}-header`}
        sx={{
          minHeight: 64,
          px: { xs: 2, sm: 2.5 },
          "&.Mui-expanded": { minHeight: 64 },
          "& .MuiAccordionSummary-content": { my: 1.25 },
          "& .MuiAccordionSummary-content.Mui-expanded": { my: 1.25 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ alignItems: { xs: "flex-start", sm: "center" }, flexGrow: 1, justifyContent: "space-between", mr: 1 }}
        >
          <Box>
            <Typography color="text.secondary" variant="caption">
              Perfil {index + 1} · {profile.id}
            </Typography>
            <Typography variant="subtitle1">{profile.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {profile.course}
            </Typography>
          </Box>
          <Stack direction="row" spacing={0.75} useFlexGap>
            <Chip label={complexityLabels[profile.expectedComplexity]} size="small" variant="outlined" />
            {profile.accessibilitySupportIds.length ? (
              <Chip color="secondary" label={`${profile.accessibilitySupportIds.length} apoyos`} size="small" variant="outlined" />
            ) : null}
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails id={`${profile.id}-content`} sx={{ borderTop: 1, borderColor: "divider", px: { xs: 2, sm: 2.5 }, py: 2.5 }}>
        <Grid container spacing={{ xs: 1.5, md: 2 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id={`${profile.id}-name`}
              label="Nombre"
              onChange={(event) => onChange({ ...profile, name: event.target.value })}
              required
              value={profile.name}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <TextField
              fullWidth
              id={`${profile.id}-course`}
              label="Curso o referencia"
              onChange={(event) => onChange({ ...profile, course: event.target.value })}
              required
              value={profile.course}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 2 }}>
            <TextField
              fullWidth
              id={`${profile.id}-knowledge-level`}
              label="Nivel de conocimientos"
              onChange={(event) => onChange({ ...profile, knowledgeLevel: event.target.value })}
              required
              value={profile.knowledgeLevel}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <TextField
              fullWidth
              id={`${profile.id}-complexity`}
              label="Complejidad esperada"
              onChange={(event) =>
                onChange({ ...profile, expectedComplexity: event.target.value as Complexity })
              }
              select
              value={profile.expectedComplexity}
            >
              {Object.entries(complexityLabels).map(([value, label]) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id={`${profile.id}-prior-knowledge`}
              label="Conocimientos previos"
              minRows={2}
              multiline
              onChange={(event) => onChange({ ...profile, priorKnowledge: event.target.value })}
              required
              value={profile.priorKnowledge}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id={`${profile.id}-specific-objective`}
              label="Objetivo específico"
              minRows={2}
              multiline
              onChange={(event) => onChange({ ...profile, specificObjective: event.target.value })}
              required
              value={profile.specificObjective}
            />
          </Grid>
          <Grid size={12}>
            <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1, px: 1.5, py: 1.25 }}>
              <Typography component="h3" variant="subtitle2">
                Apoyos de accesibilidad
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.35 }} variant="body2">
                Selecciona apoyos para este material. No registra diagnósticos ni información personal del estudiante.
              </Typography>
              <FormGroup row sx={{ columnGap: 1, mt: 1.1 }}>
                {accessibilitySupports.map((support) => {
                  const isSelected = profile.accessibilitySupportIds.includes(support.id);
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isSelected}
                          onChange={(event) =>
                            onChange({
                              ...profile,
                              accessibilitySupportIds: event.target.checked
                                ? [...profile.accessibilitySupportIds, support.id]
                                : profile.accessibilitySupportIds.filter((id) => id !== support.id),
                            })
                          }
                          size="small"
                        />
                      }
                      key={support.id}
                      label={support.label}
                      slotProps={{ typography: { variant: "body2" } }}
                      sx={{ alignItems: "flex-start", maxWidth: { xs: "100%", md: "calc(50% - 0.5rem)" }, m: 0 }}
                      title={support.description}
                    />
                  );
                })}
              </FormGroup>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id={`${profile.id}-considerations`}
              label="Apoyos o consideraciones"
              minRows={2}
              multiline
              onChange={(event) => onChange({ ...profile, considerations: event.target.value })}
              value={profile.considerations}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              id={`${profile.id}-instructions`}
              label="Instrucciones adicionales"
              minRows={2}
              multiline
              onChange={(event) => onChange({ ...profile, additionalInstructions: event.target.value })}
              value={profile.additionalInstructions}
            />
          </Grid>
        </Grid>
        <Stack direction="row" sx={{ justifyContent: "flex-end", mt: 2 }}>
          <Button
            color="error"
            disabled={totalProfiles === 1}
            onClick={() => onRemove(profile.id)}
            size="small"
            startIcon={<DeleteOutlineRoundedIcon />}
          >
            Quitar perfil
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
