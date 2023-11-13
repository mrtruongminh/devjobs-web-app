import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "./data.json";
import type { Job } from "@/types";

function paginate(array: any[], pageSize: number, pageNum: number) {
  return array.slice((pageNum - 1) * pageSize, pageNum * pageSize);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  const { pageNum, pageSize } = req.query;
  res.status(200).json(paginate(jobs, Number(pageSize), Number(pageNum)));
}
