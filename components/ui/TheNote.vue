<template>
  <div class="min-h-[70px] rounded-md p-5 grid gap-4">
    <div v-if="note?.title || note?.meta?.timestamp || note?.meta?.author">
      <h3 v-if="note?.title" class="text-2xl font-semibold">
        {{ note?.title }}
      </h3>
      <p v-if="note?.meta?.timestamp" class="text-sm text-gray-400">
        {{ getDateFromTimestamp(note?.meta?.timestamp) }}
      </p>
      <p v-if="note?.meta?.author" class="text-sm text-gray-400">{{ note?.meta?.author }}</p>
    </div>

    <p class="text-gray-600">{{ note?.content }}</p>

    <div class="self-end flex gap-1">
      <TheSmallButton @click="$router.push(`/edit/${id}`)">🖊️</TheSmallButton>
      <!-- <TheSmallButton class="grayscale">⭐️</TheSmallButton>
      <TheSmallButton>💬</TheSmallButton> -->
      <TheSmallButton @click="async () => await notesStore.deleteNoteById(id)"
        >🗑️</TheSmallButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheSmallButton from "~/components/ui/buttons/TheSmallButton.vue";
import { getDateFromTimestamp } from "~/utils/date";
import { useNotesStore } from "~/stores/notes";

const props = defineProps<{
  id: string;
}>();

const notesStore = useNotesStore();
const note = notesStore.getNoteById(props.id);
</script>
