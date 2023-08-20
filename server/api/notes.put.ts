import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { id, title, author, content } = await readBody(event);

  return await Note.findByIdAndUpdate(
    id,
    { title, "meta.author": author, content },
    { new: true }
  );
});
