import fs from "fs";

const DB_PATH = "./src/db.json";

export const readTodos = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
export const writeTodos = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
