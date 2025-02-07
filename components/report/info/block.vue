<template>
  <div class="col-span-3 py-3 space-y-1">
    <div class="flex gap-2 text-gray-400">
      <component
        :is="props.icon"
        class="size-5"
      />
      {{ props.title }}
    </div>
    <div
      :class="[
        props.class,
        'text-xl font-bold'
      ]"
    >
      {{ props.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FunctionalComponent, SVGAttributes } from "vue";

const props = defineProps<{
  icon: FunctionalComponent<SVGAttributes>;
  title: string;
  text: string | number;
  class?: string;
}>();
</script>
