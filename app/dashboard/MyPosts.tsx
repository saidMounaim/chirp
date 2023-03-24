"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  console.log(data);

  return <div>myPosts</div>;
};

export default myPosts;
