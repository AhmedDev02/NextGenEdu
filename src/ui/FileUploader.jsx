import { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import styled from "styled-components";

const UploadContainer = styled.div`
  width: 400px;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: white;
  font-family: "Changa", sans-serif;
  text-align: center;
`;

const DropArea = styled.div`
  border: 2px dashed #c2e7c9;
  border-radius: 10px;
  padding: 40px 10px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #6b8a64;
  font-weight: 500;
  user-select: none;
  &:hover {
    background-color: #f2f9f3;
  }
`;

const CloudIcon = styled(FiUploadCloud)`
  font-size: 45px;
  margin-bottom: 10px;
  display: block;
  margin: 0 auto;
  color: #8fcc8a;
`;

const BrowseLink = styled.span`
  color: #75b667;
  text-decoration: underline;
  cursor: pointer;
`;

const SupportedText = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #a0b595;
`;

export default function FileUploader({ onFileSelect }) {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFiles = (newFiles) => {
    setFiles([...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  // const handleInputChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     handleFiles(e.target.files);
  //   }
  // };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file); // send it to parent
    }
  };
  const handleUploadClick = () => {
    if (files.length === 0) return;
    // Do upload logic here
    console.log("Uploading files:", files);
  };

  return (
    <UploadContainer>
      <DropArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBrowseClick}
      >
        <CloudIcon />
        اسحب الملف وادرجه هنا او قم بالضغط على <BrowseLink>Browse</BrowseLink>
        <SupportedText>يدعم صيغ: PDF, PSD, AI, Word, PPT</SupportedText>
        <input
          ref={inputRef}
          type="file"
          onChange={handleInputChange}
          style={{ display: "none" }}
          accept=".pdf,.psd,.ai,.doc,.docx,.ppt,.pptx"
        />
      </DropArea>
    </UploadContainer>
  );
}
