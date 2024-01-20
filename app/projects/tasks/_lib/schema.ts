import { z } from "zod";

// basic task schema
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

// extract the inferred type
export type Task = z.infer<typeof taskSchema>;
