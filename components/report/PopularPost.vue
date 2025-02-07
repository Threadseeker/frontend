<template>
  <Card class="w-full">
    <CardHeader>
      <div class="flex items-center">
        <Avatar class="size-8">
          <AvatarImage
            :src="profileUrl"
            alt="@radix-vue"
          />
        </Avatar>
        <div class="ml-3">
          <span class="text-base font-medium">{{ username }}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p class="text-sm leading-6">
        {{ caption }}
      </p>
      <div class="flex items-center justify-start w-full pt-5">
        <div class="flex items-center gap-4">
          <span class="text-gray-400 flex items-center">
            <Heart
              class="mr-1 size-4"
              :stroke-width="3"
            />{{ likeCount }}
          </span>
          <span class="text-gray-400 flex items-center">
            <MessageSquare
              class="mr-1 size-4"
              :stroke-width="3"
            />{{ replyCount }}
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button
        class="w-full"
        variant="secondary"
      >
        <a
          :href="`${permalink}`"
          target="_blank"
        >
          {{ $t('report.actions.view') }}
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { MessageSquare, Heart } from "lucide-vue-next";

defineProps({
  profileUrl: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    required: true
  },
  replyCount: {
    type: Number,
    required: true
  },
  permalink: {
    type: String,
    required: true
  }
});
</script>
