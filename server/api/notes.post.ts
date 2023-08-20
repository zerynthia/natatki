import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { title, content } = await readBody(event);

  return await Note.create({
    title,
    content,
    meta: { timestamp: Date.now() / 1000, author: "John Doe" },
  });
});
