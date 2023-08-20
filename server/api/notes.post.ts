import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { title, author, content } = await readBody(event);

  return await Note.create({
    title,
    content,
    meta: { timestamp: Math.round(Date.now() / 1000), author },
  });
});
