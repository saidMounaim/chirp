import Image from "next/image";
import React from "react";
import Toggle from "./Toggle";

interface IPost {
  post: {
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

const EditPost = ({ post }: IPost) => {
  return (
    <>
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
        <div className="mt-3 flex items-center justify-between">
          <p>{post?.comments?.length} Comments</p>
          <button className="p-3 flex items-center justify-center font-medium text-md text-red-500">
            Delete
          </button>
        </div>
      </div>
      <Toggle />
    </>
  );
};

export default EditPost;
