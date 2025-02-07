<template>
  <div
    v-if="props.posts.length > 0"
    class="space-y-6"
  >
    <h3 class="text-xl font-bold">
      {{ $t('report.popular_posts.title') }}
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="post in props.posts"
        :key="post.id"
      >
        <ReportPopularPost
          :profile-url="props.user.profile_pic_url"
          :username="props.user.username"
          :caption="post.caption"
          :like-count="post.like_count"
          :reply-count="post.reply_count"
          :permalink="post.permalink"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ReportResponse } from "~/types/threads";

const props = defineProps<{
  posts: ReportResponse["report"]["posts"];
  user: ReportResponse["report"]["user"];
}>();
</script>
