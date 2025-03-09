import { ThumbsUp } from "lucide-react";
import { useState } from "react";

interface LikeButtonProps {
  likes: number;
}

const LikeButton = ({ likes }: LikeButtonProps) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [isClickedLike, setIsClickedLike] = useState(false);

  const isLiked = isClickedLike ? "text-green-light" : "text-gray-300";

  function handleAddLike() {
    if (isClickedLike)
      return setIsClickedLike(!isClickedLike), setLikesCount((prevState) => prevState - 1);
    
    setIsClickedLike(!isClickedLike);
    setLikesCount((prevState) => prevState + 1);
  }
  return (
    <button
      onClick={handleAddLike}
      className={`flex items-center ${isLiked} font-bold text-md gap-1 cursor-pointer hover:text-green-light`}
    >
      <ThumbsUp size={20} />
      Aplaudir • {likesCount}
    </button>
  );
};

export default LikeButton;
