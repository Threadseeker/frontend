/**
 * function determineActiveLevel(postDensity: number): string {
  if (isNaN(postDensity)) return 'C';
  if (postDensity < 0.5) return 'C'; // PR 20 ~ 35
  if (postDensity < 1) return 'B'; // PR 35 ~ 45
  if (postDensity < 1.2) return 'B+'; // PR 45 ~ 50
  if (postDensity < 1.9) return 'A'; // PR 50 ~ 75
  if (postDensity < 4.9) return 'A+'; // PR 75 ~ 85
  if (postDensity < 8) return 'A++'; // PR 85 ~ 90
  if (postDensity < 11) return 'S'; // PR 91 ~ 95
  if (postDensity < 16.5) return 'SSS'; // PR 95 以上
  return 'SSS';
}
 */

export default {
  title: "Threadseeker",
  activityLevels: {
    lv1: {
      label: "C",
      threshold: 0.5
    },
    lv2: {
      label: "B",
      threshold: 1
    },
    lv3: {
      label: "B+",
      threshold: 1.2
    },
    lv4: {
      label: "A",
      threshold: 1.9
    },
    lv5: {
      label: "A+",
      threshold: 4.9
    },
    lv6: {
      label: "A++",
      threshold: 8
    },
    lv7: {
      label: "S",
      threshold: 11
    },
    lv8: {
      label: "SSS",
      threshold: 16.5
    }
  },
  nav: {
    footer: [
      { path: "/docs/privacy", text: "隱私權政策" },
      { path: "/docs/terms-of-service", text: "服務條款" },
      { path: "/docs/faq", text: "常見問題" }
    ]
  }
};
