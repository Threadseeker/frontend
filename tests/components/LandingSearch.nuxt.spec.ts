import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, it, expect, beforeEach } from "vitest";
import { getGlobalMocks } from "../test-utils";
import LandingSearch from "@/components/landing/LandingSearch.vue";

beforeEach(() => {
  // Mock `useI18n`
  mockNuxtImport("useI18n", () => {
    return () => ({
      t: (msg: string) => msg
    });
  });
});

describe("LandingSearch", () => {
  it("can mount correctly when user is not logged in", async () => {
    const component = await mountSuspended(LandingSearch, {
      props: {
        user: null,
        loading: false
      },
      global: getGlobalMocks()
    });

    // Check if component is mounted
    expect(component.exists()).toBe(true);

    // Check if sign in button is visible when user is null
    expect(component.text()).toContain("home.login_with_google");
  });

  it("can mount correctly when user is logged in", async () => {
    const mockUser = {
      id: "123",
      app_metadata: {},
      user_metadata: {},
      aud: "authenticated",
      created_at: "2024-01-01"
    };

    const component = await mountSuspended(LandingSearch, {
      props: {
        user: mockUser,
        loading: false
      },
      global: getGlobalMocks()
    });

    // Check if component is mounted
    expect(component.exists()).toBe(true);

    // Check if analyze button is visible when user is logged in
    expect(component.text()).toContain("home.actions.analyze");
  });

  it("emits search event with username when search button is clicked", async () => {
    const mockUser = {
      id: "123",
      app_metadata: {},
      user_metadata: {},
      aud: "authenticated",
      created_at: "2024-01-01"
    };

    const component = await mountSuspended(LandingSearch, {
      props: {
        user: mockUser,
        loading: false
      },
      global: getGlobalMocks()
    });

    // Set input value
    await component.find("input").setValue("testuser");

    // Click search button
    await component.find("button").trigger("click");

    // Verify search event was emitted with correct username
    expect(component.emitted("search")).toBeTruthy();
    expect(component.emitted("search")![0]).toEqual(["testuser"]);
  });

  it("emits sign-in event when login button is clicked", async () => {
    const component = await mountSuspended(LandingSearch, {
      props: {
        user: null,
        loading: false
      },
      global: getGlobalMocks()
    });

    // Click login button
    await component.find("button").trigger("click");

    // Verify sign-in event was emitted
    expect(component.emitted("sign-in")).toBeTruthy();
  });
});
