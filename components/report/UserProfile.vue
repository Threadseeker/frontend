<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center pt-6 py-3">
      <div class="space-y-1">
        <h2 class="text-xl md:text-2xl font-bold my-1 flex items-center">
          {{
            showDisplayName(
              user.username,
              user.full_name
            )
          }}
        </h2>
        <div class="py-1">
          <Badge
            :variant="postDensity < 1.2 ? 'secondary' : 'default'"
          >
            {{ showBadgeText(postDensity) }}
          </Badge>
        </div>
      </div>
      <div
        class="rounded-full size-[4.3rem] flex justify-center items-center"
      >
        <Avatar class="size-16 col-span-1">
          <AvatarImage
            :src="user.profile_pic_url"
            :alt="user.username"
          />
        </Avatar>
      </div>
    </div>
    <div class="flex w-full gap-2 pb-3">
      <Button
        class="w-full h-8"
        size="default"
        @click="emit('copy')"
      >
        <Link class="size-4 mr-1" />
        {{ $t('report.actions.share') }}
      </Button>
      <Button
        class="w-full h-8"
        size="default"
        variant="outline"
        as-child
      >
        <a
          :href="`https://threads.net/@${user.username}`"
          target="_blank"
        >
          {{ $t('report.actions.view') }}
        </a>
      </Button>
    </div>
    <Separator />
  </div>
</template>

<script setup lang="ts">
import type { ReportUser } from "~/types/threads";

const { t } = useI18n();

defineProps<{
  user: ReportUser;
  postDensity: number;
}>();

function showDisplayName(username: string, fullName: string) {
  return fullName ? `${fullName} (@${username})` : username;
}

function showBadgeText(level: number) {
  switch (true) {
    case level < 0.2:
      return t("report.badge_text.level_0_2");
    case level < 1:
      return t("report.badge_text.level_1_0");
    case level < 1.2:
      return t("report.badge_text.level_1_2");
    default:
      return t("report.badge_text.level_default");
  }
}

const emit = defineEmits<{
  (e: "copy"): void;
}>();
</script>
