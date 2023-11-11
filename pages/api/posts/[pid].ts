import type { NextApiRequest, NextApiResponse } from "next";
import posts from "./data.json";
import type { Post } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const { pid } = req.query;
  const post = posts.find((n) => n.id === Number(pid));
  if (post) {
    res.status(200).json(post);
  } else {
    res.end(500);
  }
}
