import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { id, title, content } = await readBody(event);
  
  return await Note.findByIdAndUpdate(id, { title, content });
});
