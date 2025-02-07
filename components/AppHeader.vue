<template>
  <header class="w-full h-14 bg-white/95 fixed top-0 z-50 backdrop-blur-sm flex-shrink-0 ">
    <div class="grid grid-cols-header h-full items-center px-4 md:px-8 mx-auto">
      <div class="grid grid-cols-subgrid col-span-2">
        <div class="col-start-2 mx-auto">
          <NuxtLink :to="localePath('/')">
            <div class="flex gap-1">
              <img
                src="/images/logo.png"
                alt="logo"
                class="h-6"
              >
              <span class="text-xl font-bold">{{ $t('name') }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center gap-2 ml-auto">
        <LanguageSelect />
        <Popover v-model:open="popoverOpen">
          <PopoverTrigger as-child>
            <div>
              <Menu class="size-6" />
            </div>
          </PopoverTrigger>
          <ClientOnly>
            <PopoverContent
              class="w-56 mr-3 p-1 rounded-xl"
              tabindex="0"
            >
              <div class="rounded-lg border-none max-w-56 flex flex-col gap-4 p-1">
                <div>
                  <div
                    v-show="user"
                    value="Settings"
                  >
                    <Button
                      class="w-full text-left px-0 justify-start p-2"
                      variant="ghost"
                      size="sm"
                      @click="handleSignOut"
                    >
                      <LogOut class="w-5 h-5 mr-2" />
                      {{ $t('logout_action') }}
                    </Button>
                  </div>
                  <div
                    v-show="!user"
                    value="Settings"
                  >
                    <Button
                      class="w-full text-left px-0 justify-start p-2"
                      variant="ghost"
                      size="sm"
                      @click="signIn"
                    >
                      <LogIn class="w-5 h-5 mr-2" />
                      {{ $t('login_action') }}
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </ClientOnly>
        </Popover>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, LogOut, LogIn } from "lucide-vue-next";

const user = useSupabaseUser();
const popoverOpen = ref(false);
const switchLanguageOpen = ref(false);

const localePath = useLocalePath();

async function handleSignOut() {
  popoverOpen.value = false;
  switchLanguageOpen.value = false;
  await signOut();
}
</script>
