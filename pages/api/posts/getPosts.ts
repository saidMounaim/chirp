import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.post.findMany();
      res.status(201).json(data);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
