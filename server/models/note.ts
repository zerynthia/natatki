import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  title: {
    type: String,
  },
  meta: {
    timestamp: Number,
    author: String,
  },
  content: {
    type: String,
    required: true,
  },
  modifications: {
    freezeMode: {
      type: Boolean,
      required: true,
    },
  },
});

export const Note = model("Note", NoteSchema);
