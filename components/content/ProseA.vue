<template>
  <NuxtLink
    :href="href"
    :target="target"
    :rel="isExternal(href) ? 'nofollow' : null"
    class="underline"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});

const isExternal = (href: string) => {
  return href.startsWith("http");
};
</script>
