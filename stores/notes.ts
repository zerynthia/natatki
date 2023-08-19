import { defineStore } from "pinia";
import { RawNote } from "types";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [] as RawNote[],
  }),
  actions: {
    getNoteById(id: string) {
      return this.notes.find((note) => note._id === id);
    },
  },
});
