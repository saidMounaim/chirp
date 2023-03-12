"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

type userImage = {
  image: string;
};

const Logged = ({ image }: userImage) => {
  return (
    <ul className="flex items-center gap-6">
      <li>
        <Image
          width={54}
          height={54}
          className="w-[54px] rounded-full"
          src={image || ""}
          alt="Profile Pic"
        />
      </li>
      <li>
        <button
          onClick={() => signOut()}
          className="font-medium text-md text-white bg-[#3E54AC] px-4 py-2"
        >
          Sign out
        </button>
      </li>
    </ul>
  );
};

export default Logged;
