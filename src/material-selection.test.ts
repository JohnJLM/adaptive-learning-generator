import { describe, expect, it } from "vitest";

import { MAX_REQUESTED_MATERIALS, materialSelectionError } from "./material-selection";

describe("materialSelectionError", () => {
  it("rejects a package with more modules than the generation contract permits", () => {
    expect(
      materialSelectionError([
        "explanation",
        "summary",
        "activity",
        "workshop",
        "exercises",
        "quiz",
        "short_assessment",
      ]),
    ).toBe(`Un paquete admite como máximo ${MAX_REQUESTED_MATERIALS} módulos.`);
  });

  it("accepts a valid six-module selection", () => {
    expect(
      materialSelectionError([
        "explanation",
        "workshop",
        "evaluation_criteria",
        "rubric",
        "teacher_guide",
        "summary",
      ]),
    ).toBeNull();
  });
});
