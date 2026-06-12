import type { VercelRequest, VercelResponse } from "@vercel/node";
import { document } from "../src/schema.ts";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  return res.status(200).json(document);
}
