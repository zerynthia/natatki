<template>
  <div
    :class="`max-h-full w-fit m-auto overflow-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-${globalAccentColor} scrollbar-track-${globalBgColor}`"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mr-8 max-w-[1100px]">
      <TheNote
        v-for="note in notes"
        :key="note.id"
        :title="note?.title"
        :content="note.content"
        :date="getDateFromTimestamp(note?.meta?.timestamp)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStyleStore } from "~/stores/style";
import TheNote from "~/components/ui/TheNote.vue";
import { RawNotesCollection } from "~/types/index";
import { getDateFromTimestamp } from "~/utils/date";

const { globalBgColor, globalAccentColor } = useStyleStore();

const { data: notes } = await useFetch("/api/notes");

</script>

<style scoped></style>
