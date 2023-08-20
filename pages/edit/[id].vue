<template>
  <div class="flex flex-col items-start gap-4 min-w-[1100px] h-[100%] pt-6">
    <TheInput
      v-model="title"
      label="Title:"
      placeholder="The title of your note"
    />
    <TheInput
      v-model="author"
      label="Author:"
      placeholder="The author of your note"
    />
    <TheTextarea
      v-model="content"
      label="Content:"
      placeholder="Content of your note"
    />

    <div class="flex gap-2 items-center">
      <TheButton
        @click="
          async () =>
            await notesStore.editNoteById($route.params.id, {
              title,
              author,
              content,
            })
        "
        >💾</TheButton
      >
      <TheButton
        @click="
          async () => {
            await notesStore.deleteNoteById($route.params.id);
            await $router.push(`/`);
          }
        "
        >🗑️</TheButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheInput from "~/components/ui/forms/TheInput.vue";
import TheTextarea from "~/components/ui/forms/TheTextarea.vue";
import TheButton from "~/components/ui/buttons/TheButton.vue";
import { useNotesStore } from "~/stores/notes";

definePageMeta({
    middleware: 'note'
})

const route = useRoute();
const notesStore = useNotesStore();

const note = notesStore.getNoteById(route.params.id);
const title = ref(note?.title ?? "");
const author = ref(note?.meta?.author ?? "");
const content = ref(note?.content ?? "");
</script>
