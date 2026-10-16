import { describe, expect, it } from "vitest";

import { presetCatalog, presetMaterials } from "./package-catalog";

describe("package catalog", () => {
  it("expands every non-custom preset to an explicit and unique module list", () => {
    presetCatalog.filter((preset) => preset.id !== "custom").forEach((preset) => {
      const materials = presetMaterials(preset.id);
      expect(materials.length).toBeGreaterThan(0);
      expect(new Set(materials).size).toBe(materials.length);
    });
  });
});
