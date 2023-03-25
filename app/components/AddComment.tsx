"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

type AddCommentProps = {
  postId: string;
};

type Comment = {
  postId?: string;
  comment: string;
};

const AddComment = ({ postId }: AddCommentProps) => {
  const [comment, setComment] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async (data: Comment) =>
      await axios.post("/api/posts/addComment", { data }),
    {
      onError: (error: any) => {
        toast.error(error?.response?.data.message);
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        setIsDisabled(false);
        setComment("");
        toast.success("Your comment has been sent successfully.");
        queryClient.invalidateQueries(["post-details"]);
      },
    }
  );

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate({ postId, comment });
  };

  return (
    <form onSubmit={submitComment} className="bg-white rounded-md">
      <div className="flex flex-col my-3">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="p-4 text-md rounded-md my-2 bg-gray-200 outline-none"
          value={comment}
          placeholder="Comment"
        ></textarea>
      </div>
      <div>
        <button
          disabled={isDisabled}
          type="submit"
          className="font-medium text-md text-white bg-green-600 px-4 py-2 rounded-md disabled:opacity-25"
        >
          Add comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
