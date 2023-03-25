import Image from "next/image";
import React, { useState } from "react";
import Toggle from "./Toggle";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

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

const EditPost = ({ post }: IPost) => {
  const [toggle, setToggle] = useState(false);

  const { mutate } = useMutation(
    async (id: string) =>
      await axios.delete("/api/posts/deletePost", { data: id }),
    {
      onError: (error: any) => {
        toast.error(error?.response?.data.message);
      },
      onSuccess: (data) => {
        toast.success("Post has been deleted");
      },
    }
  );

  const deletePost = () => {
    mutate(post?.id);
  };

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
          <button
            onClick={() => setToggle(true)}
            className="p-3 flex items-center justify-center font-medium text-md text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
      {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} />}
    </>
  );
};

export default EditPost;
