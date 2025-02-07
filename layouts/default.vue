<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead();
const title = computed(() => (route.meta.title ?? "TBD", t("layouts.title")));
</script>

<template>
  <div>
    <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Title>{{ title }}</Title>
        <template
          v-for="link in head.link"
          :key="link.id"
        >
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.id"
        >
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <div class="relative h-screen min-h-full">
          <AppHeader />
          <div class="flex flex-col h-full pt-16">
            <main class="flex-1">
              <slot />
            </main>
            <AppFooter />
          </div>
        </div>
      </Body>
    </Html>
  </div>
</template>
