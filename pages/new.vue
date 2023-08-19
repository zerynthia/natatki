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

    <TheEditButton label="Save" @click="addNotes" />
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

const title = ref("");
const content = ref("");

const updateStoreNotes = async () => {
  const { data: notes } = await useFetch("/api/notes");
  notesStore.notes = notes as unknown as RawNote[];
};

const addNotes = async () => {
  await useFetch("/api/notes", {
    method: "POST",
    body: {
      title: title.value,
      content: content.value,
    },
  }).then(async () => {
    await updateStoreNotes();
    await navigateTo("/");
  });
};
</script>
