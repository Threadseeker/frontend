<template>
  <div class="flex size-full flex-col items-center justify-center">
    <div class="container flex size-full max-w-2xl flex-col justify-center items-center space-y-8">
      <LandingTitle />
      <ClientOnly fallback-tag="span">
        <template #fallback>
          <!-- Auth check is on client side, showing animation during loading -->
          <LandingSkeleton />
        </template>
        <LandingSearch
          :user="user"
          :loading="pending"
          @search="handleSearch"
          @sign-in="handleSignIn"
        />
      </ClientOnly>
      <LandingDescription />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { UserResponse } from "~/types/threads";
import signIn from "@/utils/sign-in";

const { t } = useI18n();

const pending = ref(false);
const user = useSupabaseUser();
const localePath = useLocalePath();

const { $api } = useNuxtApp();

useHead({
  title: t("home.title"),
  meta: [
    {
      name: "description",
      content: t("home.description")
    }
  ]
});

function handleNotOk(data: UserResponse) {
  const errorMessages: Record<string, string> = {
    "user not found": "user_not_found",
    "too many requests": "too_many_requests",
    "error": "error"
  };

  if (data.is_private) {
    toast(t("toast.private_account.title"), {
      description: t("toast.private_account.description")
    });
    return;
  }

  else if (data.message) {
    const msgKey = errorMessages[data.message as string] || "error";
    toast(t(`toast.${msgKey}.title`), {
      description: t(`toast.${msgKey}.description`)
    });
    return;
  }

  toast(t("toast.error.title"), {
    description: t("toast.error.description")
  });
}

async function handleSearch(userName: string) {
  if (!user || !userName) {
    return;
  }

  if (userName.charAt(0) === "@") {
    userName = userName.slice(1);
  }

  pending.value = true;
  try {
    // send api request
    const data = await $api.threads.user.search(userName);

    if (!data) {
      toast(t("toast.try_again.title"), {
        description: t("toast.try_again.description")
      });
      return;
    }

    // Handle success cases
    else if (data.is_finished && data.report_id) {
      toast(t("toast.analysis_complete.title"));
      navigateTo(localePath(`/report/${data.report_id}`));
    }

    else if (!data.is_finished && data.task_id) {
      toast(t("toast.analyzing.title"));
      navigateTo(localePath(`/check/${data.task_id}`));
    }

    // Handle error cases first
    else if (data.status !== "ok") {
      pending.value = false;
      handleNotOk(data);
      return;
    }
    else {
      // Fallback error
      toast(t("toast.try_again.title"), {
        description: t("toast.try_again.description")
      });
    }
  }
  catch {
    toast(t("toast.error.title"), {
      description: t("toast.error.description")
    });
  }
  finally {
    pending.value = false;
  }
}

async function handleSignIn() {
  await signIn();
}
</script>
