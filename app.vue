<template>
  <div :class="`w-screen h-screen overflow-hidden bg-${globalBgColor}`">
    <div class="max-w-[1400px] h-screen m-auto px-4 py-8 overflow-hidden">
      <TheMenu />
      <div
        :class="`h-full w-fit m-auto overflow-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-${globalAccentColor} scrollbar-track-${globalBgColor}`"
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

const updateNotes = async () => {
  const { data: notes } = await useFetch("/api/notes");
  notesStore.notes = notes as unknown as RawNote[];
};

onBeforeMount(async () => {
  await updateNotes();
  console.debug('1')
});

onBeforeUpdate(async () => {
  await updateNotes();
  console.debug('1')
});
</script>
