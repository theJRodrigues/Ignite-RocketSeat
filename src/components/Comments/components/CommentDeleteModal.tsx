interface ICommentDeleteModalProps{
  isOpenModal: boolean,
  handleCloseModal: () => void,
  handleCommentDelete: () => void
}
const CommentDeleteModal = ({
  isOpenModal,
  handleCloseModal,
  handleCommentDelete,
}: ICommentDeleteModalProps) => {


  return (
    <section 
    className="fixed left-0 top-0 w-full h-screen z-10 flex items-center bg-[rgba(0,_0,_0,_0.75)]"
    >
      <dialog
        open={isOpenModal}
        className="m-auto w-43 bg-gray-600 py-[2.4rem] px-[3.2rem] rounded-2xl text-center flex flex-col gap-[2.4rem]"
      >
        <h3 className="font-bold text-[2.4rem] text-gray-100">
          Excluir comentário
        </h3>
        <p className="text-gray-200 text-lg">
          Você tem certeza que gostaria de excluir este comentário?
        </p>
        
        <menu className="flex gap-1 justify-center">
          <li>
            <button
              onClick={handleCloseModal}
              className="py-[1.2rem] px-[3.2rem] rounded-2xl text-gray-100 font-bold text-md cursor-pointer"
            >
              Cancelar
            </button>
          </li>
          <li>
            <button
              onClick={handleCommentDelete}
              className="py-[1.2rem] px-[3.2rem] rounded-2xl text-danger font-bold text-md cursor-pointer bg-[#29292E]"
            >
              Sim, excluir
            </button>
          </li>
        </menu>
      </dialog>
    </section>
  );
};

export default CommentDeleteModal;
