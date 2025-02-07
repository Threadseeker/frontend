import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";
import { describe, it, expect, beforeEach } from "vitest";
import { getGlobalMocks } from "../test-utils";
import ReportInteractionSection from "@/components/report/InteractionSection.vue";
import ReportInfoBlock from "@/components/report/info/block.vue";
import ReportInfoGrid from "@/components/report/info/grid.vue";

beforeEach(() => {
  // Mock `useI18n`
  mockNuxtImport("useI18n", () => {
    return () => ({
      t: (msg: string) => msg
    });
  });
});

describe("ReportInteractionSection", () => {
  const mockReport = {

    active_level: "Active",
    post_density: 1.5,
    reply_density: 2.5,
    be_liked_count: 150,
    be_replied_count: 75,
    crawled_num: 25,
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
    const component = await mountSuspended(ReportInteractionSection, {
      props: {
        report: mockReport
      },
      global: getGlobalMocks()
    });

    // Check if component is mounted
    expect(component.exists()).toBe(true);

    // Check if title is rendered with correct count
    expect(component.text()).toContain("report.recent_posts.title");

    // Check if interaction stats are rendered
    expect(component.text()).toContain("report.recent_posts.total_likes");
    expect(component.text()).toContain("150");
    expect(component.text()).toContain("report.recent_posts.total_comments");
    expect(component.text()).toContain("75");

    // Check if update time is rendered
    expect(component.text()).toContain("report.update_time");
    expect(component.text()).toContain("2024-01-01");
  });

  it("renders ReportInfoGrid with correct blocks", async () => {
    const component = await mountSuspended(ReportInteractionSection, {
      props: {
        report: mockReport
      },
      global: getGlobalMocks()
    });

    expect(component.exists()).toBe(true);

    const infoGrid = component.findComponent(ReportInfoGrid);
    expect(infoGrid.exists()).toBe(true);

    // Check if there are exactly 2 ReportInfoBlock components
    const infoBlocks = component.findAllComponents(ReportInfoBlock);
    expect(infoBlocks.length).toBe(2);
  });
});
