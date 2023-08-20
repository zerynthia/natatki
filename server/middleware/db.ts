import mongoose from "mongoose";

const DB_NAME = "notes"
const BD_URL = `mongodb://localhost:32768/${DB_NAME}`;
mongoose.connect(BD_URL);

export default defineEventHandler((event) => {
  event.context.db = mongoose.connection;
});
