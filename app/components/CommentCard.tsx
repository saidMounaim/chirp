import Image from "next/image";
import moment from "moment";

export interface CommentProps {
  comment: {
    id: string;
    message: string;
    createdAt: string;
    user: {
      name: string;
      image: string;
    };
  };
}

const CommentCard = ({ comment }: CommentProps) => {
  return (
    <div className="bg-white my-3 p-8 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src={comment.user.image}
            width={42}
            height={42}
            alt="Avatar"
            className="rounded-full"
          />
          <h3 className="font-medium text-gray-700">{comment.user.name}</h3>
        </div>
        <p className="text-md font-normal">
          {moment(new Date(comment.createdAt)).fromNow()}
        </p>
      </div>
      <div className="my-4">
        <p className="break-all">{comment.message}</p>
      </div>
    </div>
  );
};

export default CommentCard;
