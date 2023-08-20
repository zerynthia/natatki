import { RawNotesCollection } from "types";
import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const notes = await Note.find();

  return notes as RawNotesCollection[];
});
