import { describe, expect, it } from "vitest";

import type { GenerationRequest } from "./domain";
import { generateMockMaterial } from "./mock-generator";

const request: GenerationRequest = {
  requestId: "REQ-TEST",
  subject: "Física y Química",
  topicKey: "motion",
  topic: "Movimiento rectilíneo",
  generalObjective: "Interpretar el movimiento con modelos progresivos.",
  materialType: "Explicación + actividad",
  durationMinutes: 30,
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
      considerations: "Justificar supuestos",
      additionalInstructions: "",
    },
  ],
};

describe("generateMockMaterial", () => {
  it("conserva los perfiles y refleja diferencias de complejidad", () => {
    const result = generateMockMaterial(request);

    expect(result.mode).toBe("mock");
    expect(result.materials).toHaveLength(2);
    expect(result.materials[0]?.content.explanation).toContain("rapidez");
    expect(result.materials[1]?.content.explanation).toContain("aceleración constante");
    expect(result.materials[1]?.adaptationSummary).toContain("modelización");
  });
});
