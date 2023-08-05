<template>
  <div class="absolute t-4 r-4 opacity-75">
    <button
      class="bg-emerald-300 hover:bg-emerald-200 transform active:scale-95 text-white w-10 h-10 rounded-full text-xl mb-4 font-semibold"
      :class="{ '!text-emerald-300 !bg-white': isOpen }"
      @click="menuToggle"
    >
      ☰
    </button>

    <nav class="flex flex-col gap-2" :class="{ hidden: isOpen }">
      <button class="w-10 h-10 text-2xl transform active:scale-95">🗒️</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">⭐️</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">👤</button>
      <button class="w-10 h-10 text-2xl transform active:scale-95">➕</button>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

const menuToggle = () => (isOpen.value = !isOpen.value);
</script>
