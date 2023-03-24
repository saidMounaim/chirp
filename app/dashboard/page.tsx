import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import MyPosts from "./MyPosts";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <h3 className="text-lg font-medium">
        Welcome Back {session?.user?.name}
      </h3>
      <MyPosts />
    </main>
  );
}
