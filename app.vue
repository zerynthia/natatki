<template>
  <div class="w-screen h-screen">
    <div class="w-[1300px] m-auto p-4 h-full border-2">
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
