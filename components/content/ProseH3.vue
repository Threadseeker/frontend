<template>
  <h2
    :id="id"
    class="text-xl lg:text-2xl font-bold leading-9 text-gray-800"
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>
