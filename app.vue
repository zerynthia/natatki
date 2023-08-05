<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="max-w-[1400px] h-screen m-auto p-4 border-2 overflow-hidden">
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
