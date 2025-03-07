import ProfileAvatar from "./ProfileAvatar";
import imgUrl from "../assets/jane-cooper-avatar.svg";
import ProfileInfo from "./ProfileInfo";
import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";
import { ThumbsUp, Trash2 } from "lucide-react";

interface NewCommentBoxProps {
  likes: number;
  publicationDate: Date;
}

const CommentBox = ({ publicationDate, likes = 0 }: NewCommentBoxProps) => {
  const pusblishedAt =
    publicationDate &&
    formatDistanceToNow(publicationDate, { locale: ptBR, addSuffix: true });
  const tiltlePublishedAt =
    publicationDate &&
    format(publicationDate, "d 'de' MMMM 'de' yyyy 'às' p", { locale: ptBR });

  return (
    <article className="flex gap-2">
      <div>
        <ProfileAvatar avatarUrl={imgUrl} />
      </div>

      <div className="w-full space-y-2">
        <section className="rounded-xl bg-[#29292E] p-2 space-y-2">
          <header className="flex justify-between items-center">
            <div>
              <ProfileInfo name="Jane Cooper" />
              <time
                className="capitalize text-sm text-gray-300"
                title={tiltlePublishedAt}
              >
                {pusblishedAt}
              </time>
            </div>
            <button className="text-gray-300 hover:text-danger cursor-pointer">
              <Trash2 />
            </button>
          </header>
          <main className="text-md text-gray-100">
            <p>Parabéns pelo projeto, ficou incrível! 🚀</p>
          </main>
        </section>
        <footer className="flex items-center text-gray-300 font-bold text-md ">
          <button className="flex gap-1 cursor-pointer hover:text-green-light">
            <ThumbsUp size={20} />
            Aplaudir • {likes}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default CommentBox;
