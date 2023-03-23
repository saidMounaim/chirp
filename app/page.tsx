"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./components/PostCard";

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";
  return (
    <main>
      <AddPost />
      {data?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
