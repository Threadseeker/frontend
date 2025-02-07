<template>
  <div class="space-y-4">
    <h3 class="text-xl font-bold">
      {{ $t('report.activity_score.title') }}
    </h3>
    <ReportInfoGrid>
      <ReportInfoBlock
        :icon="Gauge"
        :title="$t('report.activity_score.categories.index')"
        :text="report.active_level"
        :class="setActivityLevelColor(report.post_density)"
      />
      <ReportInfoBlock
        :icon="UserPlus"
        :title="$t('report.activity_score.categories.followers')"
        :text="report.user.follower_count + ' 位'"
      />
      <ReportInfoBlock
        :icon="MessageCircleReply"
        :title="$t('report.activity_score.categories.average_daily_comments')"
        :text="formatDensity(report.reply_density) + ' 則'"
      />
      <ReportInfoBlock
        :icon="GanttChart"
        :title="$t('report.activity_score.categories.average_daily_posts')"
        :text="formatDensity(report.post_density) + ' 篇'"
      />
    </ReportInfoGrid>
  </div>
</template>

<script setup lang="ts">
import {
  UserPlus,
  Gauge,
  MessageCircleReply,
  GanttChart
} from "lucide-vue-next";
import type { ReportResponse } from "~/types/threads";

defineProps<{
  report: ReportResponse["report"];
}>();

function setActivityLevelColor(level: number) {
  switch (true) {
    case level < 0.2:
      return "text-gray-500";
    case level < 1.2:
      return "text-black";
    default:
      return "text-green-500";
  }
}

function formatDensity(density: number): string {
  if (density >= 30) {
    return "> 30";
  }
  return String(density);
}
</script>
