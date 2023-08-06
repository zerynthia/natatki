<template>
  <div class="w-screen h-screen overflow-hidden bg-slate-50">
    <div class="max-w-[1400px] h-screen m-auto px-4 py-8 overflow-hidden">
      <TheMenu />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMenu from "~/components/ui/TheMenu.vue";

useHead({
  title: "Natatki",
});
</script>
