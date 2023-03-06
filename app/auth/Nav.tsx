import Link from "next/link";
import Login from "./Login";

export default async function Nav() {
  return (
    <nav className="flex justify-between items-center pt-4">
      <Link href="/">
        <h1 className="text-2xl font-medium">Chirp</h1>
      </Link>
      <Login />
    </nav>
  );
}
