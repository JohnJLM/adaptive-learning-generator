import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { createInitialProfiles, createNewProfile, topicDefaults } from "./app-data";
import { MaterialResults } from "./components/material-results";
import { ProfileEditor } from "./components/profile-editor";
import type { GenerationRequest, GenerationResponse, StudentProfile, TopicKey } from "./domain";
import { generateMockMaterial } from "./mock-generator";

interface RequestForm {
  subject: string;
  topicKey: TopicKey;
  materialType: string;
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
const initialForm: RequestForm = {
  subject: topicDefaults[initialTopic].subject,
  topicKey: initialTopic,
  materialType: "Explicación breve + actividad guiada",
  durationMinutes: "30",
  generalObjective: topicDefaults[initialTopic].objective,
  sourceContext: topicDefaults[initialTopic].sourceContext,
  generalInstructions: "",
};

export function App() {
  const [form, setForm] = useState<RequestForm>(initialForm);
  const [profiles, setProfiles] = useState<StudentProfile[]>(createInitialProfiles);
  const [generation, setGeneration] = useState<GenerationResponse | null>(null);
  const [generatedRequest, setGeneratedRequest] = useState<GenerationRequest | null>(null);
  const [formMessage, setFormMessage] = useState<FormMessage | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const handleTopicChange = (topicKey: TopicKey) => {
    const defaults = topicDefaults[topicKey];
    setForm((current) => ({
      ...current,
      topicKey,
      subject: defaults.subject,
      generalObjective: defaults.objective,
      sourceContext: defaults.sourceContext,
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      setFormMessage({ severity: "error", text: "Revisa los campos obligatorios antes de generar el ejemplo." });
      return;
    }

    const request = buildGenerationRequest(form, profiles);
    const response = generateMockMaterial(request);
    setGeneratedRequest(request);
    setGeneration(response);
    setFormMessage({
      severity: "success",
      text: "Ejemplo generado localmente. El siguiente hito sustituirá este modo por el workflow real de n8n.",
    });

    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      resultsRef.current?.focus({ preventScroll: true });
    });
  };

  return (
    <>
      <Box className="skip-link" component="a" href="#request-form">
        Saltar a la solicitud
      </Box>

      <AppBar
        className="no-print"
        color="transparent"
        elevation={0}
        position="sticky"
        sx={{ bgcolor: "rgb(255 255 255 / 92%)", borderBottom: 1, borderColor: "divider", backdropFilter: "blur(10px)" }}
      >
        <Toolbar disableGutters variant="dense" sx={{ minHeight: { xs: 56, sm: 60 } }}>
          <Container maxWidth="lg">
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
              <Stack component="a" direction="row" href="#workspace" spacing={1} sx={{ alignItems: "center", color: "inherit", textDecoration: "none" }}>
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
                <Chip label="Prototipo" size="small" sx={{ display: { xs: "none", sm: "flex" } }} variant="outlined" />
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Box aria-hidden="true" sx={{ bgcolor: "success.main", borderRadius: "50%", height: 7, width: 7 }} />
                <Typography color="text.secondary" variant="body2">
                  Modo local
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" id="workspace">
        <Container maxWidth="lg">
          <Box className="no-print" component="section" sx={{ borderBottom: 1, borderColor: "divider", py: { xs: 3.5, md: 4.5 } }}>
            <Stack spacing={1.75}>
              <Typography color="primary" variant="overline">
                Laboratorio de adaptación didáctica
              </Typography>
              <Typography component="h1" sx={{ fontSize: { xs: "2rem", sm: "2.6rem", lg: "3.1rem" }, maxWidth: 760 }} variant="h1">
                Material adaptado por perfil.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.6, maxWidth: 720 }}>
                Define un contexto común y ajusta los perfiles para revisar las diferencias antes de generar.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }} useFlexGap>
                <Chip label="2 casos · 3 perfiles · salida JSON" size="small" variant="outlined" />
              </Stack>
            </Stack>
          </Box>

          <Paper
            className="no-print"
            component="form"
            elevation={0}
            id="request-form"
            onSubmit={handleSubmit}
            sx={{ border: 1, borderColor: "divider", mt: 2.5, p: { xs: 2, sm: 3 } }}
            variant="outlined"
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", mb: 2.5 }}
            >
              <Box>
                <Typography component="h2" variant="h5">
                  Contexto compartido
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }} variant="body2">
                  Define los criterios que se mantendrán constantes en todos los perfiles.
                </Typography>
              </Box>
              <Chip label="Paso 1 de 3" size="small" variant="outlined" />
            </Stack>

            <Alert icon={false} severity="info" sx={{ mb: 2.5, py: 0, "& .MuiAlert-message": { py: 0.5 } }} variant="standard">
              <Typography variant="body2">Modo local: este ejemplo no envía datos a n8n ni a un modelo.</Typography>
            </Alert>

            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <TextField
                  fullWidth
                  label="Área"
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  select
                  value={form.subject}
                >
                  <MenuItem value="Biología y Geología">Biología y Geología</MenuItem>
                  <MenuItem value="Física y Química">Física y Química</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <TextField
                  fullWidth
                  label="Caso de prueba"
                  onChange={(event) => handleTopicChange(event.target.value as TopicKey)}
                  select
                  value={form.topicKey}
                >
                  <MenuItem value="genetics">BIO-01 · Herencia genética</MenuItem>
                  <MenuItem value="motion">FIS-01 · Movimiento rectilíneo</MenuItem>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                <TextField
                  fullWidth
                  label="Tipo de material"
                  onChange={(event) => setForm((current) => ({ ...current, materialType: event.target.value }))}
                  required
                  value={form.materialType}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, lg: 2 }}>
                <TextField
                  fullWidth
                  label="Duración estimada"
                  onChange={(event) => setForm((current) => ({ ...current, durationMinutes: event.target.value }))}
                  required
                  slotProps={{ htmlInput: { max: 120, min: 5 } }}
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
                  onChange={(event) => setForm((current) => ({ ...current, generalObjective: event.target.value }))}
                  required
                  value={form.generalObjective}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  helperText="En el MVP se usa un contexto de demostración. Antes de una evaluación se incorporará una fuente didáctica trazable."
                  label="Contexto o fuente de partida"
                  minRows={2}
                  multiline
                  onChange={(event) => setForm((current) => ({ ...current, sourceContext: event.target.value }))}
                  value={form.sourceContext}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Indicaciones comunes (opcional)"
                  minRows={2}
                  multiline
                  onChange={(event) => setForm((current) => ({ ...current, generalInstructions: event.target.value }))}
                  placeholder="Por ejemplo: usar lenguaje inclusivo, evitar un tipo de ejemplo o priorizar una representación."
                  value={form.generalInstructions}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", mb: 2.5 }}
            >
              <Box>
                <Typography component="h2" variant="h5">
                  Perfiles a adaptar
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 0.5 }} variant="body2">
                  Abre un perfil para ajustar sus conocimientos previos, objetivo y apoyos.
                </Typography>
              </Box>
              <Chip label={`${profiles.length} perfiles · Paso 2 de 3`} size="small" variant="outlined" />
            </Stack>

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
              onClick={() => setProfiles((currentProfiles) => [...currentProfiles, createNewProfile(currentProfiles)])}
              startIcon={<AddRoundedIcon />}
              sx={{ mt: 2 }}
              variant="outlined"
            >
              Añadir otro perfil
            </Button>

            <Divider sx={{ my: 3 }} />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ alignItems: { xs: "stretch", sm: "center" }, justifyContent: "space-between" }}
            >
              <Box aria-live="polite">
                {formMessage ? <Alert severity={formMessage.severity}>{formMessage.text}</Alert> : null}
              </Box>
              <Button endIcon={<ArrowForwardRoundedIcon />} type="submit" variant="contained">
                Generar material de prueba
              </Button>
            </Stack>
          </Paper>

          <Box sx={{ mt: 2, pb: 3 }}>
            <MaterialResults
              onPrint={() => window.print()}
              panelRef={resultsRef}
              request={generatedRequest}
              response={generation}
            />
          </Box>
        </Container>
      </Box>

      <Box className="no-print" component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 3 }}>
          <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} sx={{ justifyContent: "space-between" }}>
            <Typography color="text.secondary" variant="body2">
              Adaptive Lab · Prototipo de investigación. No emplear para evaluar estudiantes ni para publicar materiales sin revisión docente.
            </Typography>
            <Typography color="text.secondary" variant="body2">
              La opción PDF abre la impresión del navegador para guardar únicamente el material generado.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function buildGenerationRequest(form: RequestForm, profiles: StudentProfile[]): GenerationRequest {
  const requestId =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `REQ-${Date.now().toString(36).toUpperCase()}`;

  return {
    requestId,
    subject: form.subject,
    topicKey: form.topicKey,
    topic: form.topicKey === "genetics" ? "BIO-01 · Herencia genética" : "FIS-01 · Movimiento rectilíneo",
    generalObjective: form.generalObjective,
    materialType: form.materialType,
    durationMinutes: Number(form.durationMinutes),
    sourceContext: form.sourceContext,
    generalInstructions: form.generalInstructions,
    profiles,
  };
}
