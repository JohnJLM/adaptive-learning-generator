import type { MaterialId } from "./domain";
import { hasAssessmentMaterial, hasObservableEvidence } from "./package-catalog";

export const MAX_REQUESTED_MATERIALS = 6;

export function materialSelectionError(materials: MaterialId[]): string | null {
  if (!materials.length) {
    return "Selecciona al menos un módulo para el paquete.";
  }
  if (materials.length > MAX_REQUESTED_MATERIALS) {
    return `Un paquete admite como máximo ${MAX_REQUESTED_MATERIALS} módulos.`;
  }
  if (materials.includes("answer_key") && !hasAssessmentMaterial(materials)) {
    return "El solucionario requiere ejercicios, cuestionario o evaluación breve para poder corresponderse con sus ítems.";
  }
  if (materials.includes("rubric") && !hasObservableEvidence(materials)) {
    return "La rúbrica requiere una actividad, taller o instrumento de evaluación con evidencia observable.";
  }
  return null;
}
