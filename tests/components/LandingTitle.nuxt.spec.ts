import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, it, expect, beforeEach } from "vitest";
import { getGlobalMocks } from "../test-utils";
import LandingTitle from "@/components/landing/LandingTitle.vue";

beforeEach(() => {
  // Mock `useI18n`
  mockNuxtImport("useI18n", () => {
    return () => ({
      t: (msg: string) => msg
    });
  });
});

describe("LandingTitle", () => {
  it("can mount correctly", async () => {
    const component = await mountSuspended(LandingTitle, {
      global: getGlobalMocks()
    });

    // Check if the component is mounted
    expect(component.exists()).toBe(true);

    // Optionally, check if the translated text is rendered
    expect(component.text()).toContain("home.title");
    expect(component.text()).toContain("home.description");
  });
});
