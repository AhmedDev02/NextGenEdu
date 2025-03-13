import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";

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

function AnswerForm({ onSendMessage }) {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
    e.target.style.height = "40px";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = (data) => {
    if (!data.message.trim() && !selectedFile) return; // Prevent empty messages
    onSendMessage({ text: data.message, file: selectedFile }); // Pass both
    setSelectedFile(null); // Reset file
    reset(); // Reset form fields
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit">
        <FaTelegramPlane />
      </Button>
      <TextArea
        placeholder="إبدأ في كتابة إجابة مناسبة.."
        {...register("message")}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Form>
  );
}

export default AnswerForm;
