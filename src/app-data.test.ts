import { describe, expect, it } from "vitest";

import { createBlankProfile } from "./app-data";

describe("createBlankProfile", () => {
  it("does not retain demonstration profile content", () => {
    expect(createBlankProfile()).toEqual({
      id: "P01",
      name: "",
      course: "",
      knowledgeLevel: "",
      priorKnowledge: "",
      specificObjective: "",
      expectedComplexity: "introductory",
      accessibilitySupportIds: [],
      considerations: "",
      additionalInstructions: "",
    });
  });
});
