import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();

export default defineNuxtRouteMiddleware((to) => {
  const note = notesStore.getNoteById(to.params.id);

  if (note.modifications.freezeMode) {
    return navigateTo("/");
  }
});
