"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="font-medium text-md text-white bg-[#3E54AC] px-4 py-2"
      >
        Sign In
      </button>
    </li>
  );
}
