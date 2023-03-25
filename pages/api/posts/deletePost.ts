import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "Please sign in" });
    }

    try {
      const postId = req.body;
      await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      res.status(201).json({ message: "Post has been deleted" });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
