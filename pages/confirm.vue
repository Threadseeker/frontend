<script setup lang="ts">
const user = useSupabaseUser();
const localePath = useLocalePath();
const { t } = useI18n();

useHead({
  title: t("logging_in"),
  meta: [
    {
      name: "robots",
      content: "noindex,nofollow"
    }
  ]
});

watch(user, () => {
  if (user.value) {
    // Redirect to protected page
    return navigateTo(localePath("/"));
  }
}, { immediate: true });
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center">
    <div class="container flex size-full max-w-2xl flex-col justify-center items-center space-y-8">
      {{ $t('logging_in') }}
    </div>
  </div>
</template>
