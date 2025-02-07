<template>
  <div class="space-y-4">
    <h3 class="text-xl font-bold">
      {{ $t('report.recent_posts.title', { count: report.crawled_num }) }}
    </h3>
    <ReportInfoGrid>
      <ReportInfoBlock
        :icon="Heart"
        :title="$t('report.recent_posts.total_likes')"
        :text="report.be_liked_count"
      />
      <ReportInfoBlock
        :icon="MessageCircle"
        :title="$t('report.recent_posts.total_comments')"
        :text="report.be_replied_count"
      />
    </ReportInfoGrid>
    <div class="text-gray-500 text-sm py-2">
      {{ $t('report.update_time') }}：{{ formatDate(report.updated_at) }}
    </div>
    <Separator />
  </div>
</template>

<script setup lang="ts">
import { Heart, MessageCircle } from "lucide-vue-next";
import type { ReportResponse } from "~/types/threads";

defineProps<{
  report: ReportResponse["report"];
}>();
</script>
