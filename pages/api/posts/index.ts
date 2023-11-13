import type { NextApiRequest, NextApiResponse } from "next";
import posts from "./data.json";
import type { Post } from "@/types";

function paginate(array: any[], pageSize: number, pageNum: number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((pageNum - 1) * pageSize, pageNum * pageSize);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const { pageNum, pageSize } = req.query;
  res.status(200).json(paginate(posts, Number(pageSize), Number(pageNum)));
}
