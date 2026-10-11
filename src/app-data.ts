import type { StudentProfile, TopicKey } from "./domain";

interface TopicDefaults {
  subject: string;
  objective: string;
  sourceContext: string;
}

export const topicDefaults: Record<TopicKey, TopicDefaults> = {
  genetics: {
    subject: "Biología y Geología",
    objective:
      "Explicar cómo cambia el material sobre herencia genética según los conocimientos previos, el objetivo y la complejidad esperada de cada perfil.",
    sourceContext:
      "Caso de demostración: modelo de herencia escolar. Debe declarar sus supuestos y no simplificar rasgos humanos complejos como si fueran mendelianos.",
  },
  motion: {
    subject: "Física y Química",
    objective:
      "Interpretar el movimiento rectilíneo con una progresión desde rapidez media hasta aceleración constante, adaptando apoyos y razonamiento por perfil.",
    sourceContext:
      "Caso de demostración: movimiento rectilíneo. Distinguir rapidez media y velocidad media, declarar sistema de referencia y comprobar unidades.",
  },
};

const initialProfiles: StudentProfile[] = [
  {
    id: "P01",
    name: "Acceso inicial",
    course: "1.º ESO · progresión experimental",
    knowledgeLevel: "Inicial",
    priorKnowledge: "Vocabulario científico o matemático elemental relacionado con el caso.",
    specificObjective: "Reconocer la idea central y aplicar un procedimiento con ayuda explícita.",
    expectedComplexity: "introductory",
    considerations: "Frases breves, pasos numerados, un ejemplo resuelto y comprobación de unidades o vocabulario.",
    additionalInstructions: "No asumir que el curso equivale por sí solo a un diagnóstico de conocimientos.",
  },
  {
    id: "P02",
    name: "Consolidación",
    course: "4.º ESO · progresión experimental",
    knowledgeLevel: "Intermedio",
    priorKnowledge: "Conceptos base del tema y capacidad de interpretar una representación sencilla.",
    specificObjective: "Relacionar conceptos y resolver una situación guiada justificando el procedimiento.",
    expectedComplexity: "intermediate",
    considerations: "Reducir el andamiaje progresivamente e incluir interpretación de datos, tabla o gráfica cuando proceda.",
    additionalInstructions: "Hacer explícitos los supuestos del modelo utilizado.",
  },
  {
    id: "P03",
    name: "Profundización",
    course: "2.º Bachillerato · progresión experimental",
    knowledgeLevel: "Avanzado",
    priorKnowledge: "Prerrequisitos disciplinares y autonomía para contrastar modelos y justificar resultados.",
    specificObjective: "Modelizar, argumentar los supuestos y analizar límites de una explicación o solución.",
    expectedComplexity: "advanced",
    considerations: "Incluir razonamiento, interpretación crítica y una tarea que no se resuelva solo sustituyendo valores.",
    additionalInstructions: "Distinguir resultados del modelo de conclusiones generales sobre el fenómeno.",
  },
];

export function createInitialProfiles(): StudentProfile[] {
  return initialProfiles.map((profile) => ({ ...profile }));
}

export function createNewProfile(profiles: StudentProfile[]): StudentProfile {
  const highestProfileNumber = profiles.reduce((highest, profile) => {
    const numericId = Number(profile.id.replace(/^P/, ""));
    return Number.isFinite(numericId) ? Math.max(highest, numericId) : highest;
  }, 0);
  const nextNumber = highestProfileNumber + 1;

  return {
    id: `P${String(nextNumber).padStart(2, "0")}`,
    name: `Perfil ${nextNumber}`,
    course: "Curso por definir",
    knowledgeLevel: "Por definir",
    priorKnowledge: "Describir los conocimientos previos relevantes.",
    specificObjective: "Definir un objetivo específico observable.",
    expectedComplexity: "intermediate",
    considerations: "Indicar apoyos o condiciones de presentación.",
    additionalInstructions: "",
  };
}
