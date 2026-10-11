import { describe, expect, it } from "vitest";

import { createInitialProfiles, createNewProfile } from "./app-data";

describe("createNewProfile", () => {
  it("asigna un ID nuevo aunque se haya eliminado un perfil intermedio", () => {
    const profiles = createInitialProfiles().filter((profile) => profile.id !== "P02");

    expect(createNewProfile(profiles).id).toBe("P04");
  });
});
