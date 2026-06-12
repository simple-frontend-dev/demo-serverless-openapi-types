import type { VercelRequest, VercelResponse } from "@vercel/node";
import { helloWorldQuerySchema } from "../src/schema.ts";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const parsed = helloWorldQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid or missing name" });
  }

  const { name } = parsed.data;
  return res.status(200).json({ message: `Hello, ${name}!` });
}
