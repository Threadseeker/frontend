<template>
  <div class="w-full max-w-sm">
    <div
      v-if="user"
      class="w-full space-y-4 max-w-sm"
    >
      <Input
        v-model="userName"
        class="h-14 border-0 :border focus-visible:border-gray-200 bg-slate-100 rounded-xl text-base focus-visible:ring-0"
        :placeholder="$t('home.placeholder')"
      />
      <Button
        class="w-full h-14 text-base rounded-xl"
        size="sm"
        :disabled="loading"
        @click="handleSearch"
      >
        <Loader2
          v-show="loading"
          class="w-4 h-4 mr-2 animate-spin"
        />
        {{ buttonText }}
      </Button>
    </div>
    <div
      v-else
      class="w-full space-y-4 max-w-sm"
    >
      <Button
        class="w-full h-12 text-base rounded-lg"
        size="sm"
        @click="handleSignIn"
      >
        {{ $t('home.login_with_google') }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import type { User } from "@supabase/supabase-js";

const props = defineProps<{
  user: User | null;
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "search", username: string): void;
  (e: "sign-in"): void;
}>();

const { t } = useI18n();

const userName = ref("");

const buttonText = computed(() => {
  return props.loading ? t("toast.loading") : t("home.actions.analyze");
});

const handleSearch = async () => {
  if (!userName.value) return;
  emit("search", userName.value);
};

const handleSignIn = async () => {
  emit("sign-in");
};
</script>
