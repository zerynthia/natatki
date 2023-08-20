<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mr-8">
    <TheNote v-for="note in notesStore.notes" :key="note._id" :id="note._id" />
  </div>
</template>

<script lang="ts" setup>
import TheNote from "~/components/ui/TheNote.vue";
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();
</script>
