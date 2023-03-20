import Image from "next/image";
import React from "react";

interface IPost {
  post: {
    avatar: string;
    title: string;
    user: {
      image: string;
      name: string;
    };
  };
}

const PostCard = ({ post }: IPost) => {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          src={post.user.image}
          width={42}
          height={42}
          alt="Avatar"
          className="rounded-full"
        />
        <h3 className="font-medium text-gray-700">{post.user.name}</h3>
      </div>
      <div className="my-4">
        <p className="break-all">{post.title}</p>
      </div>
    </div>
  );
};

export default PostCard;
