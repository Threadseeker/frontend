<template>
  <div class="text-lg font-light text-gray-500">
    <ContentSlot
      :use="$slots.default"
      unwrap="p"
    />
  </div>
</template>
