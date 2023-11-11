import type { NextApiRequest, NextApiResponse } from "next";
import posts from "./data.json";
import type { Post } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(posts);
}
