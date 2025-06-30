import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.6rem;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const DropArea = styled.div`
  border: 2px dashed #bbbbbb;
  border-radius: 10px;
  padding: 3rem;
  background: #f7f7f7;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #30bd58;
  }

  p {
    font-size: 1.6rem;
    color: #404040;
    margin: 0.5rem 0;
  }

  span {
    color: #30bd58;
    cursor: pointer;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    p {
      font-size: 1.4rem;
    }
  }
`;

const HelperText = styled.p`
  font-size: 1.2rem !important;
  color: #777 !important;
`;

const FileList = styled.div`
  margin-top: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FileItem = styled.div`
  background: #f0fff0;
  border: 1px solid #30bd58;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  word-break: break-all;
`;

const DeleteButton = styled.button`
  background: none;
  border: 1px solid var(--color-red-500, red);
  cursor: pointer;
  color: var(--color-red-500, red);
  font-size: 1.8rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-red-100, #fee2e2);
  }
`;

const UploadButton = styled.button`
  background: #30bd58;
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: "Changa", sans-serif;
  transition: all 0.2s;

  &:hover {
    background: #29a34d;
  }

  &:active {
    transform: scale(0.97);
  }
`;

function AddFileModal({ onCloseModal, onSelectFile }) {
  const [files, setFiles] = useState([]);

  const setSelectedFile = () => {
    if (files.length > 0) {
      onSelectFile(files[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
    },
    multiple: false,
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error(
          "هناك ملفات غير مدعومه الرجاء ارسال الملفات المدعومه امامك"
        );
      }
      if (files.length > 0) {
        toast.error("يمكنك رفع ملف واحد فقط");
        return;
      }
      if (acceptedFiles.length > 0) {
        setFiles(acceptedFiles);
      }
    },
  });

  const removeFile = () => {
    setFiles([]);
  };

  return (
    <Container>
      {files.length > 0 ? (
        <FileList>
          <p>تم تحميل {files.length} ملف</p>
          {files.map((file, index) => (
            <FileItem key={index}>
              <span>{file.name}</span>
              <DeleteButton onClick={() => removeFile()}>
                <AiOutlineDelete />
              </DeleteButton>
            </FileItem>
          ))}
        </FileList>
      ) : (
        <>
          <ModalTitle>تحميل ملف</ModalTitle>
          <DropArea {...getRootProps()}>
            <input {...getInputProps()} />
            <FaCloudUploadAlt size={50} color="#30bd58" />
            <p>
              قم بسحب الملف الي هنا او <span>قم بالبحث علي جهازك</span>
            </p>
            <HelperText>الملفات المدعومة: PDF, Word, PPT</HelperText>
            <HelperText>يجب الا يتعدي حجم الملف عن 1 MB</HelperText>
          </DropArea>
        </>
      )}

      <UploadButton
        onClick={() => {
          setSelectedFile();
          onCloseModal();
        }}
      >
        رفع الملف
      </UploadButton>
    </Container>
  );
}

export default AddFileModal;
