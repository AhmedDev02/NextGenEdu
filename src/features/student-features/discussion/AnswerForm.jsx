import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import { FaSpinner, FaTelegramPlane } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useAddAnswer } from "./useAddAnswer";

const TextArea = styled.textarea`
  z-index: 1; /* Optional: Ensure it stays above other content */
  flex-grow: 1;
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.4rem;
  border-radius: 15px;
  padding: 5px 20px;
  margin: 0;
  font-family: "Changa", sans-serif;
  word-break: break-word;
  resize: none;
  overflow-wrap: anywhere;
  direction: rtl;
  text-align: right;
  max-height: 60px !important;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;

  &:focus {
    border: none;
    outline: none;
    box-shadow: var(--shadow-primary);
    border-bottom: 1px solid var(--color-secondary-darkblue);
  }
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerIcon = styled(FaSpinner)`
  font-size: 3rem;
  animation: ${spin} 1s linear infinite;
  vertical-align: middle;
`;

const Form = styled.form`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-direction: row-reverse;
  height: 40px;
  /* position: fixed; */
  bottom: 10px;
  position: sticky;
  bottom: 0px;
  z-index: 10;
`;

function AnswerForm({ onSendMessage, questionID }) {
  const { register, handleSubmit, reset, setValue, watch } = useForm();

  const { mutate, isPending: isLoading } = useAddAnswer();
  console.log(isLoading);

  const handleChange = (e) => {
    const textarea = e.target;
    setValue("message", textarea.value);
    textarea.style.height = "40px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = (data) => {
    if (!data.message.trim()) return;
    mutate({ questionID, text: data.message }); // ✅ send data via mutation
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <SpinnerIcon />
      ) : (
        <Button type="submit">
          <FaTelegramPlane />
        </Button>
      )}

      <TextArea
        placeholder="إبدأ في كتابة إجابة مناسبة.."
        {...register("message")}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Form>
  );
}
export default AnswerForm;
