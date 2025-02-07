<template>
  <div class="max-w-lg font-light text-sm text-muted-foreground">
    <p v-show="user">
      {{ $t('home.public_only_message') }}
    </p>
    <div
      v-show="!user"
      class="flex flex-col gap-1 max-w-md text-center"
    >
      <p>{{ $t('home.login_explanation.first') }}</p>
      <p>{{ $t('home.login_explanation.second') }}</p>
      <NuxtLink to="/docs/faq">
        <p class="font-semibold text-gray-500">
          {{ $t('home.login_explanation.faq') }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>
