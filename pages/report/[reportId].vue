<template>
  <ReportContainer>
    <ReportLoading v-if="isPending" />
    <div v-else-if="!isPending && validReport">
      <div class="space-y-9">
        <ReportUserProfile
          :user="validReport.user"
          :post-density="validReport.post_density"
          @copy="copyToClipboard"
        />
        <ReportActivitySection :report="validReport" />
        <ReportInteractionSection :report="validReport" />
        <ReportUserPosts
          v-if="hasPosts"
          :posts="validReport.posts"
          :user="validReport.user"
        />
        <div v-else>
          <div class="text-center font-medium text-xl">
            {{ $t('report.no_posts.title') }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ $t('report.no_data.title') }}
    </div>
  </ReportContainer>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { ReportResponse } from "~/types/threads";

const { t } = useI18n();
const route = useRoute();

const { reportId } = route.params as { reportId: string };
const username = ref("");
const { $api } = useNuxtApp();

const { data, error, status } = await useAsyncData<ReportResponse>(`threadsReport_${reportId}`,
  () => $api.threads.report.get(reportId),
  {
    lazy: true,
    getCachedData(key, nuxtapp) {
      return nuxtapp.payload.data[key] || nuxtapp.static.data[key];
    }
  }
);

const validReport = computed(() => {
  return data.value && data.value.report;
});

const isPending = computed(() => {
  return status.value === "pending";
});
const hasPosts = computed(() => {
  return validReport.value?.posts && validReport.value?.posts.length > 0;
});

useHead({
  title: () => status.value === "pending"
    ? t("report.meta.title.loading")
    : username.value
      ? t("report.meta.title.username", { username: username.value })
      : t("report.meta.title.no_result"),
  meta: [
    {
      name: "description",
      content: () => username.value
        ? t("report.meta.description.username", { username: username.value })
        : ""
    },
    {
      name: "robots",
      content: "noindex,nofollow"
    }
  ]
});

watchEffect(() => {
  if (data.value) {
    username.value = data.value.report.user.username;
  }
  else if (error.value) {
    console.error(error.value);
  }
});

function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href);
  toast(t("toast.copy_success"));
}
</script>
