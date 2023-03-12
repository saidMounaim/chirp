import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center pt-4">
      <Link href="/">
        <h1 className="text-2xl font-medium">Chirp</h1>
      </Link>
      {!session?.user && <Login />}
      {session?.user && <Logged image={session?.user.image || ""} />}
    </nav>
  );
}
