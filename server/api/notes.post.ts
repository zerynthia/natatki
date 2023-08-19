import mongoose from "mongoose";
import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const DB_NAME = "notes";
  const BD_URL = `mongodb://localhost:32768/${DB_NAME}`;
  mongoose.connect(BD_URL);

  const { title, content } = await readBody(event);

  return await Note.create({
    title,
    content,
    meta: { timestamps: Date.now(), author: "John Doe" },
  });
});
