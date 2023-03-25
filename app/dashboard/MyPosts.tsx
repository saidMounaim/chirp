"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EditPost from "../components/EditPost";

export async function fetchMyPosts() {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
}

const myPosts = () => {
  const { isLoading, data, error } = useQuery({
    queryFn: fetchMyPosts,
    queryKey: ["myPosts"],
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      {data.posts?.map((post: any) => (
        <EditPost key={post.id} post={post} />
      ))}
    </main>
  );
};

export default myPosts;
