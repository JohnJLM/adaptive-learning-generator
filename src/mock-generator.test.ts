import { describe, expect, it } from "vitest";

import { createInitialProfiles } from "./app-data";
import type { GenerationRequest } from "./domain";
import { generateMockMaterial } from "./mock-generator";

const request: GenerationRequest = {
  requestId: "REQ-TEST",
  subject: "Física y Química",
  topicKey: "motion",
  topic: "Movimiento rectilíneo",
  generalObjective: "Interpretar el movimiento con modelos progresivos.",
  durationMinutes: 30,
  preset: "class_session",
  requestedMaterials: ["explanation", "activity", "quiz", "answer_key", "rubric", "teacher_guide"],
  sourceContext: "Contexto de prueba.",
  generalInstructions: "",
  profiles: [
    {
      id: "P01",
      name: "Inicio",
      course: "1.º ESO",
      knowledgeLevel: "Inicial",
      priorKnowledge: "Distancia y tiempo",
      specificObjective: "Calcular rapidez media",
      expectedComplexity: "introductory",
      accessibilitySupportIds: ["plain_language"],
      considerations: "Guía paso a paso",
      additionalInstructions: "",
    },
    {
      id: "P03",
      name: "Profundización",
      course: "2.º Bachillerato",
      knowledgeLevel: "Avanzado",
      priorKnowledge: "Cinemática",
      specificObjective: "Modelizar aceleración constante",
      expectedComplexity: "advanced",
      accessibilitySupportIds: [],
      considerations: "Justificar supuestos",
      additionalInstructions: "",
    },
  ],
};

describe("generateMockMaterial", () => {
  it("conserva perfiles, diferencia complejidad y relaciona preguntas con solucionario", () => {
    const result = generateMockMaterial(request);
    const initial = result.materials[0];
    const advanced = result.materials[1];

    expect(result.mode).toBe("mock");
    expect(result.materials).toHaveLength(2);
    expect(initial?.artifacts.explanation?.sections[0]?.content).toContain("rapidez");
    expect(advanced?.artifacts.explanation?.sections[0]?.content).toContain("aceleración constante");
    expect(advanced?.adaptationSummary).toContain("modelización");
    expect(initial?.adaptationSummary).toContain("Lenguaje claro y fragmentado");
    expect(initial?.artifacts.answer_key?.items.map((item) => item.itemId)).toEqual(initial?.artifacts.quiz?.items.map((item) => item.id));
    expect(initial?.artifacts.rubric?.evidenceExpected).toContain("Sustituye correctamente");
  });

  it("incrementa únicamente la versión de los perfiles enviados en una iteración", () => {
    const previousArtifacts = generateMockMaterial(request).materials[0]?.artifacts;
    if (!previousArtifacts) throw new Error("Expected mock artifacts");

    const revision = generateMockMaterial({
      ...request,
      profiles: [request.profiles[0]!],
      revision: {
        previousGenerationId: "GEN-OLD",
        globalFeedback: "Aclarar la comprobación de unidades.",
        profiles: [{ profileId: "P01", previousVersion: 2, feedback: "Añade otro ejemplo.", previousArtifacts }],
      },
    });

    expect(revision.materials).toHaveLength(1);
    expect(revision.materials[0]?.profileId).toBe("P01");
    expect(revision.materials[0]?.version).toBe(3);
  });

  it("produce el caso de aceptación del taller de genética para tres perfiles", () => {
    const result = generateMockMaterial({
      ...request,
      requestId: "REQ-GENETICS-WORKSHOP",
      subject: "Biología",
      topicKey: "genetics",
      topic: "Genética mendeliana",
      generalObjective: "Comprender dominancia y recesividad.",
      preset: "workshop",
      requestedMaterials: ["explanation", "workshop", "evaluation_criteria", "rubric", "teacher_guide"],
      durationMinutes: 45,
      profiles: createInitialProfiles(),
    });

    expect(result.materials).toHaveLength(3);
    expect(result.materials.every((material) => material.artifacts.explanation && material.artifacts.workshop && material.artifacts.rubric && material.artifacts.teacher_guide)).toBe(true);
    expect(result.materials.map((material) => material.version)).toEqual([1, 1, 1]);
    expect(result.materials[0]?.artifacts.explanation?.sections[0]?.content).not.toEqual(result.materials[2]?.artifacts.explanation?.sections[0]?.content);
  });
});
