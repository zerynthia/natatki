<template>
  <div class="absolute z-50 t-4 r-4 opacity-75">
    <button
      :class="`transition-all transform active:scale-95 w-10 h-10 rounded-full text-xl mb-4 font-semibold ${dynamicStyleMenu}`"
      @click="menuToggle"
    >
      ☰
    </button>

    <nav
      class="flex flex-col gap-2 bg-slate-50 rounded-full py-2"
      :class="{ hidden: !isOpenMenu }"
    >
      <!-- <TheButton>🗒️</TheButton>
      <TheButton>⭐️</TheButton>
      <TheButton>👤</TheButton> -->
      <TheButton @click="$router.push(`/new`)">➕</TheButton>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import TheButton from "~/components/ui/buttons/TheButton.vue";
import { useStyleStore } from "~/stores/style";

// Init
const { globalBgColor, globalAccentColor } = useStyleStore();

// State variables
const isOpenMenu = ref(false);

// Dynamic Styles
const dynamicStyleMenu = computed(() => {
  if (isOpenMenu.value) {
    return `border-2 border-${globalAccentColor} text-${globalAccentColor}`
  }

  return `bg-${globalAccentColor} text-${globalBgColor}`
})

// Actions
const menuToggle = () => (isOpenMenu.value = !isOpenMenu.value);
</script>
