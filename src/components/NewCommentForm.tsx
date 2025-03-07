import React, { useState, FormEvent, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewCommentFormSchemma = z.object({
  newComment: z.string().nonempty("O comentário não pode ser vazio"),
});

type NewCommentForm = z.infer<typeof NewCommentFormSchemma>;

const NewCommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    watch,
  } = useForm<NewCommentForm>({
    resolver: zodResolver(NewCommentFormSchemma),
  });

  function onSubmit(data: NewCommentForm) {
    console.log(data.newComment.trim());
    resetField("newComment");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <fieldset>
        <textarea
          className="resize-none w-full outline-none bg-gray-700 p-2 rounded-xl border border-gray-700 focus:border-green-light duration-50 "
          placeholder="Escreva um comentário..."
          {...register("newComment")}
        />
        {errors.newComment && <span>{errors.newComment.message}</span>}
      </fieldset>
      <button
        className="font-bold py-1 px-2.5 rounded-xl bg-green hover:bg-green-light shadow-btn cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={!watch("newComment")}
      >
        Publicar
      </button>
    </form>
  );
};

export default NewCommentForm;
