import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: "Please sign in" });
    }

    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session?.user?.email,
        },
        include: {
          Post: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              commnets: true,
            },
          },
        },
      });
      res.status(201).json(data);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
