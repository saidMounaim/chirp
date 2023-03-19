import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "please sign in to add a post" });
    }

    const prismaUser = await prisma.user.findUnique({
      email: session?.user?.email,
    });

    const { title } = req.body;

    if (title.length > 300) {
      res.status(401).json({ message: "Please write a short content" });
    }

    if (title.length) {
      res.status(401).json({ message: "Please do not leave this empty" });
    }

    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id,
        },
      });
      res.status(201).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
