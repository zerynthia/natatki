<template>
  <div :class="`w-screen h-screen overflow-hidden bg-${globalBgColor}`">
    <div class="max-w-[1400px] w-full h-screen m-auto px-4 py-8 overflow-hidden">
      <TheMenu />
      <div
        :class="`h-full m-auto max-w-[1100px] overflow-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-${globalAccentColor} scrollbar-track-${globalBgColor}`"
      >
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMenu from "~/components/ui/TheMenu.vue";
import { useStyleStore } from "~/stores/style";
import { useNotesStore } from "~/stores/notes";
import { RawNote } from "types";

useHead({
  title: "Natatki",
});

const notesStore = useNotesStore();
const { globalBgColor, globalAccentColor } = useStyleStore();

onBeforeMount(async () => {
  await notesStore.updateNotes();
});

onBeforeUpdate(async () => {
  await notesStore.updateNotes();
});
</script>
