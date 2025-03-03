import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { FaTelegramPlane, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { FaX } from "react-icons/fa6";

const TextArea = styled.textarea`
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
const FileInput = styled.input`
  /* position: relative; */
  display: none;
`;

const Form = styled.form`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-direction: row-reverse;
  height: 40px;
  position: relative;
`;

const FilePreview = styled.div`
  position: absolute;
  top: -10px;
  left: 800px;
  display: block;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 2px 7px;
  border-radius: 10px;
  font-size: 1.4rem;
  width: 100px;
  overflow: hidden;
  border: 2px solid var(--color-secondary-darkblue);
`;
const Span = styled.span`
  display: block;
`;

function ChatForm({ onSendMessage }) {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const removeFile = () => {
    setSelectedFile(null);
    document.getElementById("fileInput").value = ""; // Reset input field
  };

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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const openFilePicker = () => {
    document.getElementById("fileInput").click();
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
        placeholder="ابدأ في الكتابة الآن..."
        {...register("message")}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <FileInput
        type="file"
        {...register("file")}
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />

      <Button
        type="button"
        variation="secondary"
        size="custom"
        paddingLeftRight="13px"
        paddingTopBottom="13px"
        onClick={openFilePicker}
      >
        <FaPlus />
      </Button>
      {selectedFile && (
        <FilePreview>
          <Button
            variation="danger"
            styles={{ color: "white" }}
            onClick={removeFile}
            size="custom"
            paddingLeftRight="10px"
            paddingTopBottom="10px"
            margin="0 10px 0 0"
          >
            <FaX />
          </Button>
          <Span>{selectedFile.name}</Span>
        </FilePreview>
      )}
    </Form>
  );
}

export default ChatForm;
