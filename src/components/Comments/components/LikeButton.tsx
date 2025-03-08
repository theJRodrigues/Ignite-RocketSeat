import { ThumbsUp } from "lucide-react";
import { useState } from "react";

interface LikeButton{
    likes: number
}

const LikeButton = ({likes}: LikeButton) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [isClickedLike, setIsClickedLike] = useState(false);

  const isLiked = isClickedLike ? "text-green-light" : "text-gray-300";

  function handleAddLike() {
    setLikesCount((state) => state + 1);
    setIsClickedLike(true);
  }
  return (
    <button
      className={`flex items-center ${isLiked} font-bold text-md gap-1 cursor-pointer hover:text-green-light`}
      onClick={handleAddLike}
    >
      <ThumbsUp size={20} />
      Aplaudir • {likesCount}
    </button>
  );
};

export default LikeButton;
