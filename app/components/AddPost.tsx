import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form className="bg-white my-8 p-4 rounded-md">
      <div className="flex flex-col my-3">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-md rounded-md my-2 bg-gray-200 outline-none"
          value={title}
          placeholder="What's on ur mind?"
        ></textarea>
      </div>
      <div>
        <button
          disabled={isDisabled}
          type="submit"
          className="font-medium text-md text-white bg-[#3E54AC] px-4 py-2 rounded-md disabled:opacity-25"
        >
          Create a post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
