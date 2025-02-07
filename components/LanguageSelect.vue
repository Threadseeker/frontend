<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <Button
        variant="ghost"
        class="aspect-square p-0 bg-inherit"
      >
        <Languages class="size-5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      class="w-32 p-0"
      align="end"
    >
      <div class="flex flex-col p-1">
        <button
          v-for="language in languages"
          :key="language.value"
          class="text-left text-sm hover:bg-gray-100 p-1.5 rounded-md flex items-center"
          @click="handleSetLocale(language.value)"
        >
          {{ language.label }}
          <Check
            :class="cn(
              'ml-auto size-4',
              { 'opacity-100': isLocaleActive(language.value), 'opacity-0': !isLocaleActive(language.value) }
            )"
          />
        </button>
      </div>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { Languages, Check } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const isOpen = ref(false);
const { locale, setLocale } = useI18n();

const languages: {
  label: string;
  value: string;
}[] = [
  { label: "English", value: "en" },
  { label: "中文", value: "zh" },
  { label: "日本語", value: "ja" }
];

function setOpen(value: boolean) {
  isOpen.value = value;
}

function handleSetLocale(value: string) {
  setLocale(value as "en" | "ja" | "zh");
  setOpen(false);
}

function isLocaleActive(value: string) {
  if (locale.value.startsWith("en")) {
    return value === "en";
  }
  return locale.value === value;
}
</script>
