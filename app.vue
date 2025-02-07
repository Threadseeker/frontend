<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Toaster />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";

const { t } = useI18n();

useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk) {
      return `${titleChunk} - ${t("name")}`;
    }
    return t("name");
  }
});

useSeoMeta({
  ogImage: "/images/ogimage.jpg"
});
</script>
