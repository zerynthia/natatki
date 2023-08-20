import { Note } from "../models/note";

export default defineEventHandler(async (event) => {
  const { title, author, content, freeze } = await readBody(event);

  console.debug("freeze: ", freeze)

  return await Note.create({
    title,
    content,
    meta: { timestamp: Math.round(Date.now() / 1000), author },
    modifications: { freezeMode: freeze },
  });
});
