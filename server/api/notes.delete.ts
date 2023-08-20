import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);
  
  return await Note.findByIdAndDelete(id);
});
