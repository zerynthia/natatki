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

    <TheButton
      @click="async () => await notesStore.addNote({ title, author, content })"
    >
      💾
    </TheButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheInput from "~/components/ui/forms/TheInput.vue";
import TheTextarea from "~/components/ui/forms/TheTextarea.vue";
import TheButton from "~/components/ui/buttons/TheButton.vue";
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();

const title = ref("");
const author = ref("");
const content = ref("");
</script>
