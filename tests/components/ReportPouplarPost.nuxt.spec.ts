import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, it, expect, beforeEach } from "vitest";
import { getGlobalMocks } from "../test-utils";
import ReportPopularPost from "@/components/report/PopularPost.vue";

beforeEach(() => {
  mockNuxtImport("useI18n", () => {
    return {
      t: (key: string) => key
    };
  });
});

describe("ReportPopularPost", () => {
  const mockPost = {
    profileUrl: "https://example.com/profile.jpg",
    username: "testuser",
    caption: "Test post caption",
    likeCount: 100,
    replyCount: 50,
    permalink: "https://threads.net/p/123"
  };
  it("can mount correctly", async () => {
    const component = await mountSuspended(ReportPopularPost, {
      props: {
        ...mockPost
      },
      global: getGlobalMocks()
    });

    expect(component.exists()).toBe(true);

    // Check if profile image is rendered correctly
    const avatar = component.find("img");
    expect(avatar.attributes("src")).toBe(mockPost.profileUrl);

    // Check if username is displayed
    expect(component.text()).toContain(mockPost.username);

    // Check if caption is rendered
    expect(component.text()).toContain(mockPost.caption);

    // Check if like count is displayed correctly
    expect(component.text()).toContain(mockPost.likeCount.toString());

    // Check if reply count is displayed correctly
    expect(component.text()).toContain(mockPost.replyCount.toString());

    // Check if permalink is set correctly in the button
    const link = component.find("a");
    expect(link.attributes("href")).toBe(mockPost.permalink);
    expect(link.attributes("target")).toBe("_blank");
  });
});
