import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, it, expect, beforeEach } from "vitest";
import { getGlobalMocks } from "../test-utils";
import ReportActivitySection from "@/components/report/ActivitySection.vue";

beforeEach(() => {
  // Mock `useI18n`
  mockNuxtImport("useI18n", () => {
    return () => ({
      t: (msg: string) => msg
    });
  });
});

describe("ReportActivitySection", () => {
  const mockReport = {

    active_level: "Active",
    post_density: 1.5,
    reply_density: 2.5,
    be_liked_count: 150,
    be_replied_count: 75,
    crawled_num: 100,
    updated_at: "2024-01-01T00:00:00Z",
    user: {
      follower_count: 100,
      username: "testuser",
      full_name: "Test User",
      profile_pic_url: "https://example.com/pic.jpg"
    },
    posts: [
      {
        id: "123",
        caption: "Test post",
        permalink: "https://threads.net/p/123",
        reply_count: 10,
        like_count: 20
      }
    ]
  };

  it("can mount correctly with report data", async () => {
    const component = await mountSuspended(ReportActivitySection, {
      props: {
        report: mockReport
      },
      global: getGlobalMocks()
    });

    // Check if component is mounted
    expect(component.exists()).toBe(true);

    // Check if title is rendered
    expect(component.text()).toContain("report.activity_score.title");

    // Check if all categories are rendered
    expect(component.text()).toContain("report.activity_score.categories.index");
    expect(component.text()).toContain("report.activity_score.categories.followers");
    expect(component.text()).toContain("report.activity_score.categories.average_daily_comments");
    expect(component.text()).toContain("report.activity_score.categories.average_daily_posts");

    // Check if values are rendered correctly
    expect(component.text()).toContain("Active");
    expect(component.text()).toContain("100 位");
    expect(component.text()).toContain("2.5 則");
    expect(component.text()).toContain("1.5 篇");
  });

  it("formats density correctly when over 30", async () => {
    const highDensityReport = {
      ...mockReport,
      post_density: 35,
      reply_density: 40
    };

    const component = await mountSuspended(ReportActivitySection, {
      props: {
        report: highDensityReport
      },
      global: getGlobalMocks()
    });

    expect(component.text()).toContain("> 30 篇");
    expect(component.text()).toContain("> 30 則");
  });

  it("applies correct color class based on activity level", async () => {
    const lowActivityReport = {
      ...mockReport,
      post_density: 0.1
    };

    const component = await mountSuspended(ReportActivitySection, {
      props: {
        report: lowActivityReport
      },
      global: getGlobalMocks()
    });

    const activityBlock = component.find(".text-gray-500");
    expect(activityBlock.exists()).toBe(true);
  });
});
