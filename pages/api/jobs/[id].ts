import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "./data.json";
import type { Job } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job>
) {
  const { id } = req.query;
  const post = jobs.find((n) => n.id === Number(id));
  if (post) {
    res.status(200).json(post);
  } else {
    res.end(500);
  }
}
