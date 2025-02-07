<template>
  <footer class="w-full h-20 text-gray-400 flex-shrink-0 mt-8">
    <div class="container max-w-3xl px-5 mx-auto flex items-center flex-col gap-1 text-sm">
      <div class="flex items-center w-full justify-center h-full">
        <div
          v-for="(navLink, index) in navLinks"
          :key="index"
        >
          <NuxtLink :to="navLink.path">
            {{ t(navLink.localeCode) }}
          </NuxtLink>
          <span
            v-if="index < navLinks.length - 1"
            class="mx-2"
          >
            |
          </span>
        </div>
      </div>
      <div class="text-center">
        Developed by
        <a
          href="https://threads.net/@cjs.shawn"
          target="_blank"
        >cjs.shawn</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();

const navLinks = ref([
  { path: "/docs/privacy", localeCode: "privacy_page_label" },
  { path: "/docs/terms-of-service", localeCode: "terms_page_label" },
  { path: "/docs/faq", localeCode: "faq_page_label" }
]);
</script>
