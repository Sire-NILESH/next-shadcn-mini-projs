"use server";

import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "./schema";

// Simulate a database read for tasks.
export async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(mini-projects)/tasks/_lib/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}
