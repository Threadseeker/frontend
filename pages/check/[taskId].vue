<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";

const MAX_TRY_LIMIT = 40;

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const user = useSupabaseUser();
const localePath = useLocalePath();

const { taskId } = route.params as { taskId: string };
const { $api } = useNuxtApp();
const hasError = ref(false);
const triedCount = ref(0);

if (!user || !taskId) {
  await router.push(localePath("/"));
}

useHead({
  title: () => hasError.value === false ? t("check.title") : t("check.error_message"),
  meta: [
    {
      name: "robots",
      content: "noindex,nofollow"
    }
  ]
});

const fetchTaskStatus = async () => {
  try {
    triedCount.value += 1;

    const response = await $api.threads.task.status(taskId);

    if (response.has_error) {
      hasError.value = true;
    }

    if (response.url) {
      await navigateTo(localePath(response.url), {
        replace: true
      });
    }
  }
  catch (err) {
    console.error("Error fetching task status:", err);
  }
};

let intervalId: NodeJS.Timeout;

onMounted(() => {
  intervalId = setInterval(fetchTaskStatus, 1000);
});

watch(hasError, () => {
  if (intervalId && hasError.value) {
    clearInterval(intervalId);
  }
});

watch(triedCount, () => {
  if (triedCount.value >= MAX_TRY_LIMIT) {
    clearInterval(intervalId);
    hasError.value = true;
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center">
    <div class="container flex size-full max-w-2xl flex-col justify-center items-center space-y-8">
      <div
        v-if="!hasError"
        class="flex flex-col space-y-4 items-center"
      >
        <Loader2 class="size-7 animate-spin" />
        <p class="text-sm text-gray-800">
          {{ $t('check.await_message') }}
        </p>
      </div>
      <div
        v-else
        class="flex flex-col space-y-4 items-center"
      >
        <h6 class="font-medium text-base">
          {{ $t('check.error_message') }}
        </h6>
        <Button
          size="sm"
          @click="navigateTo(localePath('/'))"
        >
          {{ $t('check.back_to_home') }}
        </Button>
      </div>
    </div>
  </div>
</template>
