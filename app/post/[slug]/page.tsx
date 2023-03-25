"use client";

import AddComment from "@/app/components/AddComment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

type PostDetailsUrl = {
  params: {
    slug: string;
  };
};

export async function fetchPostDetails(slug: string) {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
}

export default function PostDetails(url: PostDetailsUrl) {
  const { isLoading, data, error } = useQuery({
    queryFn: () => fetchPostDetails(url.params.slug),
    queryKey: ["post-details"],
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <main>
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            src={data.user.image}
            width={42}
            height={42}
            alt="Avatar"
            className="rounded-full"
          />
          <h3 className="font-medium text-gray-700">{data.user.name}</h3>
        </div>
        <div className="my-4">
          <p className="break-all">{data.title}</p>
        </div>
        <div className="mt-3">
          <p>{data?.comments?.length} Comments</p>
        </div>
        <div className="flex flex-col mt-3">
          <AddComment postId={data.id} />
        </div>
      </div>
    </main>
  );
}
