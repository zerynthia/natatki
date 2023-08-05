<template>
  <div class="absolute t-4 r-4 opacity-75">
    <button
      class="transition-all border-slate-400 border-2 text-slate-400 bg-slate-50 transform active:scale-95 w-10 h-10 rounded-full text-xl mb-4 font-semibold"
      :class="{ '!border-transparent': isClose }"
      @click="menuToggle"
    >
      ☰
    </button>

    <nav class="flex flex-col gap-2 bg-slate-50 rounded-full py-2" :class="{ hidden: isClose }">
      <TheButton>🗒️</TheButton>
      <TheButton>⭐️</TheButton>
      <TheButton>👤</TheButton>
      <TheButton>➕</TheButton>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import TheButton from "~/components/ui/buttons/TheButton.vue"

const isClose = ref(false);

const menuToggle = () => (isClose.value = !isClose.value);
</script>
