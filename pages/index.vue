<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mr-8 max-w-[1100px]">
    <TheNote
      v-for="note in notesStore.notes"
      :key="note._id"
      :id="note._id"
      :title="note?.title"
      :content="note.content"
      :date="getDateFromTimestamp(note?.meta?.timestamp)"
    />
  </div>
</template>

<script lang="ts" setup>
import TheNote from "~/components/ui/TheNote.vue";
import { getDateFromTimestamp } from "~/utils/date";
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();
</script>
