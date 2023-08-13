import { RawNotesCollection } from "types";
import mongoose from "mongoose";
import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const BD_URL = "mongodb://localhost:32768/notes";
  mongoose.connect(BD_URL);
  const notes = await Note.find();

  return notes as RawNotesCollection[];
});
