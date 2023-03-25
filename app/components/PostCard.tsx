import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPost {
  post: {
    id: string;
    avatar: string;
    title: string;
    user: {
      image: string;
      name: string;
    };
    comments?: {
      createdAt: string;
      id: string;
      userId: string;
      postId: string;
      message: string;
    }[];
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
      <div className="mt-3">
        <Link href={`/post/${post.id}`}>
          <p>{post?.comments?.length} Comments</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
