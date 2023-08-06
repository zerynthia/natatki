<template>
  <div :class="`w-screen h-screen overflow-hidden bg-${globalBgColor}`">
    <div class="max-w-[1400px] h-screen m-auto px-4 py-8 overflow-hidden">
      <TheMenu />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMenu from "~/components/ui/TheMenu.vue";
import { useStyleStore } from "~/stores/style";

useHead({
  title: "Natatki",
});

const { globalBgColor } = useStyleStore();
</script>
