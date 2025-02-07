<template>
  <div class="flex size-full flex-col items-center justify-center">
    <div class="container flex size-full max-w-md flex-col space-y-8">
      <div class="flex flex-col h-full">
        <div
          v-if="pending"
          class="flex justify-center items-center h-full"
        >
          <Loader2 class="w-8 h-8 animate-spin" />
        </div>
        <div
          v-else-if="data && data.tasks && data.tasks.length === 0"
          class="flex flex-col gap-3 h-full items-center justify-center"
        >
          <p>沒有排定的任務</p>
          <NuxtLink to="/">
            <Button>回首頁</Button>
          </NuxtLink>
        </div>
        <div
          v-else-if="error"
          class="text-red-500"
        >
          {{ error.message }}
        </div>
        <div
          v-else-if="data && data.tasks"
          class="flex flex-col gap-4"
        >
          <div
            v-for="item in data.tasks"
            :key="item.report_id"
          >
            <ReportCard
              :username="item.username"
              :is-finished="item.is_finished"
              :report-id="item.report_id"
              :task-id="item.task_id"
              :expect-at="formatTimeStamps(item.expect_at)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import dayjs from "dayjs";

definePageMeta({
  middleware: "auth"
});

useHead({
  title: "追蹤的分析任務"
});

const { data, error, pending } = await useFetch("/api/user/tasks/follow",
  {
    lazy: true
  });

function formatTimeStamps(time: string) {
  return dayjs(time).format("YYYY-MM-DD HH:mm");
}
</script>
