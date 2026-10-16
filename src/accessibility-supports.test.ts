import { describe, expect, it } from "vitest";

import { accessibilitySupportLabels, accessibilitySupports } from "./accessibility-supports";

describe("accessibility support catalog", () => {
  it("uses unique support IDs and returns their human-readable labels", () => {
    const ids = accessibilitySupports.map((support) => support.id);

    expect(new Set(ids)).toHaveLength(accessibilitySupports.length);
    expect(accessibilitySupportLabels(["plain_language", "visual_access"])).toBe(
      "Lenguaje claro y fragmentado, Acceso visual no dependiente de imágenes",
    );
  });
});
