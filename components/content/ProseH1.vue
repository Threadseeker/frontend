<template>
  <h1
    :id="id"
    class="text-4xl font-bold leading-9 text-gray-800 my-2"
  >
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>
