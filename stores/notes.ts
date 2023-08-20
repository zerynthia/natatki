import { defineStore } from "pinia";
import { RawNote } from "types";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [] as RawNote[],
  }),

  actions: {
    async updateNotes() {
      const notes = await $fetch("/api/notes");
      this.notes = notes as unknown as RawNote[];
    },
    
    getNoteById(id: string) {
      return this.notes.find((note) => note._id === id);
    },

    async deleteNoteById(id: string) {
      await $fetch("/api/notes", {
        method: "DELETE",
        body: {
          id: id,
        },
      }).then(async () => {
        await this.updateNotes();
      });
    },

    async editNoteById(
      id: string,
      { title, content }: { title: string; content: string }
    ) {
      await $fetch("/api/notes", {
        method: "PUT",
        body: {
          id,
          title,
          content,
        },
      }).then(async () => {
        await this.updateNotes();
        await navigateTo("/");
      });
    },

    async addNote({ title, content }: { title: string; content: string }) {
      await $fetch("/api/notes", {
        method: "POST",
        body: {
          title,
          content,
        },
      }).then(async () => {
        await this.updateNotes();
        await navigateTo("/");
      });
    },
  },
});
