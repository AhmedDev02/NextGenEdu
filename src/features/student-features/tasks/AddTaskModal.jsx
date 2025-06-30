import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import useUploadTask from "./useUploadTask";

const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 60rem;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
    gap: 2rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.2rem;
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;

const DropArea = styled.div`
  border: 2px dashed #bbbbbb;
  border-radius: 10px;
  padding: 2rem;
  background: #f7f7f7;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #30bd58;
  }

  p {
    font-size: 1.4rem;
    color: #404040;
    margin: 0.5rem 0;
  }

  span {
    color: #30bd58;
    cursor: pointer;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    padding: 3rem;
    p {
      font-size: 1.6rem;
    }
  }
`;

const HelperText = styled.p`
  font-size: 1.2rem !important;
  color: #777 !important;
`;

const UploadingContainer = styled.div`
  margin-top: 1rem;
  text-align: left;
`;

const ProgressBar = styled.div`
  height: 5px;
  background: #30bd58;
  border-radius: 5px;
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease-in-out;
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
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  cursor: pointer;
  width: 100%;
  font-family: "Changa", sans-serif;
  transition: all 0.2s;

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

function AddTaskModal({ onCloseModal, AssId }) {
  const [files, setFiles] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const { mutate, isPending } = useUploadTask(onCloseModal);

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
    multiple: true,
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error(
          "هناك ملفات غير مدعومه الرجاء ارسال الملفات المدعومه امامك"
        );
      }
      const newFiles = acceptedFiles.map((file) => ({ file, progress: 0 }));
      setUploadingFiles(newFiles);
      simulateUpload(newFiles);
    },
  });

  const simulateUpload = (filesToUpload) => {
    filesToUpload.forEach((fileObj, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setUploadingFiles((prevUploading) =>
          prevUploading.map((f, i) => (i === index ? { ...f, progress } : f))
        );

        if (progress >= 100) {
          clearInterval(interval);
          setFiles((prevFiles) => [...prevFiles, fileObj.file]);
          setUploadingFiles((prevUploading) =>
            prevUploading.filter((_, i) => i !== index)
          );
        }
      }, 500);
    });
  };

  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  const handleUploadFile = () => {
    if (!files || files.length === 0) {
      toast.error("يجب تحميل الملف اولا");
      return;
    }
    if (files.length > 1) {
      toast.error("الرجاء تحميل ملف واحد فقط ");
      return;
    }
    const formData = new FormData();
    formData.append("file", files[0]);
    mutate({ AssId, uploadedSolution: formData });
  };

  return (
    <Container>
      <ModalTitle>تحميل الملفات</ModalTitle>
      {files.length === 0 && (
        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <FaCloudUploadAlt size={50} color="#30bd58" />
          <p>
            قم بسحب الملف الي هنا او <span>قم بالبحث علي جهازك</span>
          </p>
          <HelperText>الملفات المدعومة: PDF, Word, PPT</HelperText>
          <HelperText>يجب الا يتعدي حجم الملف عن 1 MB</HelperText>
        </DropArea>
      )}

      {uploadingFiles.length > 0 && (
        <UploadingContainer>
          <p>جاري التحميل.... - {uploadingFiles.length} file(s)</p>
          {uploadingFiles.map((fileObj, index) => (
            <div key={index}>
              <p>{fileObj.file.name}</p>
              <ProgressBar progress={fileObj.progress} />
            </div>
          ))}
        </UploadingContainer>
      )}

      {files.length > 0 && (
        <FileList>
          <p>
            تم تحميل {files.length} {files.length === 1 ? "ملف" : "ملفات"}
          </p>
          {files.map((file, index) => (
            <FileItem key={index}>
              <span>{file.name}</span>
              <DeleteButton onClick={() => removeFile(file.name)}>
                <AiOutlineDelete />
              </DeleteButton>
            </FileItem>
          ))}
        </FileList>
      )}

      <UploadButton onClick={handleUploadFile} disabled={isPending}>
        {isPending ? "جاري الرفع..." : "رفع الملفات"}
      </UploadButton>
    </Container>
  );
}

export default AddTaskModal;
