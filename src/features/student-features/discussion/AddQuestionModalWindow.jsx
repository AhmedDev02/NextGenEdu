import styled from "styled-components";
import Button from "../../../ui/Button";
import CustomFaSpinner from "../../../ui/tharwat/CustomFaSpinner";
import { useAddQuestion } from "./useAddQuestion";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const StyledExamModal = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const H5 = styled.h5`
  text-align: center;
`;
const H4 = styled.h4`
  text-align: center;
`;
const Divider = styled.div`
  display: flex;
  justify-content: space-between;
`;
const text = `تابع الإجابة الاكثر اعجابا لتختصر الوقت! `;
const StyledTextarea = styled.textarea`
  padding: 10px 16px;
  font-size: 1rem;
  width: 100%;
  max-width: 500px;
  min-height: 60px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: none; /* Prevent manual resizing */
  overflow: hidden; /* ✅ Hide scrollbars */

  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

function AddQuestionModalWindow({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm(); // Add reset
  const { mutate: addQuestion, isPending } = useAddQuestion();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    const body = data.question?.trim();
    if (!body) return;

    addQuestion(
      { body },
      {
        onSuccess: () => {
          toast.success("تم إرسال السؤال بنجاح");
          queryClient.invalidateQueries({ queryKey: ["questions"] });
          onCloseModal();
          reset();
        },
        onError: (err) => {
          toast.error(err.message || "حدث خطأ أثناء إرسال السؤال");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledExamModal>
        <H4> اكتب سؤالك</H4>
        <H5> {text}</H5>
        <StyledTextarea
          placeholder="اسأل سؤالاً..."
          {...register("question", { required: true })}
          rows={3}
          disabled={isPending}
        />
        {!isPending ? (
          <Divider>
            <Button variation="primary" size="small" type="submit">
              إرسال
            </Button>
            <Button
              type="button"
              variation="transparent"
              size="small"
              onClick={onCloseModal}
            >
              إلغاء
            </Button>
          </Divider>
        ) : (
          <CustomFaSpinner />
        )}
      </StyledExamModal>
    </form>
  );
}

export default AddQuestionModalWindow;
