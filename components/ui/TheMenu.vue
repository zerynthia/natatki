<template>
  <div class="absolute t-4 r-4 opacity-75">
    <button
      class="border-teal-500 border-2 text-teal-500 bg-white transform active:scale-95 w-10 h-10 rounded-full text-xl mb-4 font-semibold"
      :class="{ '!border-transparent': isClose }"
      @click="menuToggle"
    >
      ☰
    </button>

    <nav class="flex flex-col gap-2 bg-white rounded-full py-2" :class="{ hidden: isClose }">
      <button class="w-10 h-10 text-2xl transform active:scale-95">🗒️</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">⭐️</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">👤</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">➕</button>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const isClose = ref(false);

const menuToggle = () => (isClose.value = !isClose.value);
</script>
