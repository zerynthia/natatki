<template>
  <div class="flex flex-col items-start gap-4 min-w-[1100px] h-[100%] pt-6">
    <TheInput
      v-model="title"
      label="Title:"
      placeholder="The title of your note"
    />
    <TheTextarea
      v-model="content"
      label="Content:"
      placeholder="Content of your note"
    />

    <TheEditButton
      label="Save"
      @click="
        async () =>
          await notesStore.editNoteById($route.params.id, {
            title,
            content,
          })
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheInput from "~/components/ui/forms/TheInput.vue";
import TheTextarea from "~/components/ui/forms/TheTextarea.vue";
import TheEditButton from "~/components/ui/buttons/TheEditButton.vue";
import { useNotesStore } from "~/stores/notes";

const route = useRoute();
const notesStore = useNotesStore();

const note = notesStore.getNoteById(route.params.id);
const title = ref(note.title);
const content = ref(note.content);
</script>
