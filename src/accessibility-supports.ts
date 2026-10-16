import type { AccessibilitySupportId } from "./domain";

export interface AccessibilitySupport {
  id: AccessibilitySupportId;
  label: string;
  description: string;
}

export const accessibilitySupports: readonly AccessibilitySupport[] = [
  {
    id: "plain_language",
    label: "Lenguaje claro y fragmentado",
    description: "Reduce ambigüedad, presenta una idea por bloque y explica el vocabulario necesario.",
  },
  {
    id: "reading_support",
    label: "Apoyo a lectura y decodificación",
    description: "Prioriza frases legibles, estructura predecible y términos definidos antes de usarlos.",
  },
  {
    id: "visual_access",
    label: "Acceso visual no dependiente de imágenes",
    description: "Describe en texto cualquier dato, diagrama, color, posición o relación espacial esencial.",
  },
  {
    id: "hearing_access",
    label: "Acceso sin depender de audio",
    description: "Presenta por escrito la información relevante y no presupone instrucciones o pistas sonoras.",
  },
  {
    id: "motor_keyboard_access",
    label: "Acceso motor y por teclado",
    description: "Evita exigir escritura extensa, arrastre, precisión manual o velocidad cuando no son el objetivo.",
  },
  {
    id: "executive_function_support",
    label: "Apoyo a planificación y atención",
    description: "Divide la tarea en pasos, explicita el criterio de finalización y reduce la carga de organización.",
  },
  {
    id: "multiple_expression_options",
    label: "Opciones de expresión de la respuesta",
    description: "Permite demostrar el objetivo mediante formatos alternativos equivalentes cuando proceda.",
  },
];

const labelsById = new Map(accessibilitySupports.map((support) => [support.id, support.label]));

export function accessibilitySupportLabels(ids: AccessibilitySupportId[]): string {
  return ids.map((id) => labelsById.get(id) ?? id).join(", ");
}
