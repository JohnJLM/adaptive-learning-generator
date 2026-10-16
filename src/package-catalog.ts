import type { MaterialId, PackagePreset } from "./domain";

export interface MaterialDefinition {
  id: MaterialId;
  label: string;
  audience: "students" | "teacher";
  description: string;
}

export interface PresetDefinition {
  id: PackagePreset;
  label: string;
  description: string;
  materialIds: MaterialId[];
}

export const materialCatalog: MaterialDefinition[] = [
  { id: "explanation", label: "Explicación", audience: "students", description: "Presenta los conceptos y ejemplos ajustados al perfil." },
  { id: "summary", label: "Resumen", audience: "students", description: "Sintetiza las ideas y relaciones esenciales." },
  { id: "activity", label: "Actividad", audience: "students", description: "Propone una tarea guiada con evidencia esperada." },
  { id: "workshop", label: "Taller", audience: "students", description: "Organiza una práctica más extensa y sus evidencias." },
  { id: "exercises", label: "Ejercicios", audience: "students", description: "Incluye práctica progresiva con ítems identificables." },
  { id: "quiz", label: "Cuestionario", audience: "students", description: "Comprueba comprensión con preguntas alineadas." },
  { id: "short_assessment", label: "Evaluación breve", audience: "students", description: "Recoge evidencias evaluables en una prueba acotada." },
  { id: "answer_key", label: "Solucionario", audience: "teacher", description: "Vincula cada respuesta con el identificador del ítem." },
  { id: "evaluation_criteria", label: "Criterios de evaluación", audience: "teacher", description: "Describe qué evidencias se observarán." },
  { id: "rubric", label: "Rúbrica", audience: "teacher", description: "Evalúa las evidencias generadas con niveles explícitos." },
  { id: "teacher_guide", label: "Guía docente", audience: "teacher", description: "Resume la secuencia y la aplicación del paquete." },
];

export const presetCatalog: PresetDefinition[] = [
  {
    id: "class_session",
    label: "Sesión de clase",
    description: "Explicación, actividad, comprobación y guía para una sesión estructurada.",
    materialIds: ["explanation", "activity", "quiz", "answer_key", "teacher_guide"],
  },
  {
    id: "workshop",
    label: "Taller",
    description: "Instrucciones prácticas, evidencias esperadas y rúbrica de desempeño.",
    materialIds: ["explanation", "workshop", "evaluation_criteria", "rubric", "teacher_guide"],
  },
  {
    id: "assessment",
    label: "Evaluación",
    description: "Prueba breve, solucionario, criterios y rúbrica alineados.",
    materialIds: ["short_assessment", "answer_key", "evaluation_criteria", "rubric"],
  },
  {
    id: "review",
    label: "Repaso",
    description: "Síntesis, ejercicios y cuestionario para consolidar el contenido.",
    materialIds: ["summary", "exercises", "quiz", "answer_key"],
  },
  {
    id: "custom",
    label: "Personalizado",
    description: "El docente selecciona explícitamente los módulos del paquete.",
    materialIds: [],
  },
];

export function presetMaterials(preset: PackagePreset): MaterialId[] {
  return [...(presetCatalog.find((item) => item.id === preset)?.materialIds ?? [])];
}

export function materialLabel(materialId: MaterialId): string {
  return materialCatalog.find((item) => item.id === materialId)?.label ?? materialId;
}

export function hasAssessmentMaterial(materials: MaterialId[]): boolean {
  return materials.some((material) => ["exercises", "quiz", "short_assessment"].includes(material));
}

export function hasObservableEvidence(materials: MaterialId[]): boolean {
  return materials.some((material) => ["activity", "workshop", "exercises", "quiz", "short_assessment"].includes(material));
}
