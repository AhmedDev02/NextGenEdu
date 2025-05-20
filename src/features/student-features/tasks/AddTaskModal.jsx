import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import useUploadTask from "./useUploadTask";

const Container = styled.div`
  height: auto;
  width: clamp(25rem, 50vw, 50rem);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DropArea = styled.div`
  border: 2px dashed #bbbbbb;
  border-radius: 10px;
  padding: 50px;
  background: #f7f7f7;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  &:hover {
    border-color: #30bd58;
  }
`;

const UploadingContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const ProgressBar = styled.div`
  height: 5px;
  background: #30bd58;
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease-in-out;
`;

const FileList = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const FileItem = styled.div`
  background: #f0fff0;
  border: 1px solid #30bd58;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 14px;
`;

const DeleteButton = styled.button`
  background: none;
  border: 1px solid red;
  cursor: pointer;
  color: red;
  font-size: 16px;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const UploadButton = styled.button`
  background: #30bd58;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 1rem;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  &:active {
    scale: 0.95;
  }
  &:focus {
    outline: none;
  }
`;

function AddTaskModal({ onCloseModal, AssId }) {
  const [files, setFiles] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState([]);
  //the response that comes from backend after uploading
  // const handleSuccess = (response) => {

  // };

  const { mutate, isLoading } = useUploadTask(onCloseModal);

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
      const newFiles = acceptedFiles.map((file) => ({
        file,
        progress: 0,
      }));
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

  //uploading to server
  const handleUploadFile = () => {
    if (!files || files.length === 0) {
      toast.error("يجب تحميل الملف اولا");
      return;
    }
    const formData = new FormData();
    formData.append("file", files[0]);
    if (files.length > 1) {
      toast.error("الرجاء تحميل ملف واحد فقط ");
      return;
    }
    mutate({ AssId, uploadedSolution: formData });
  };

  return (
    <Container>
      <h2>تحميل الملفات</h2>
      <DropArea {...getRootProps()}>
        <input {...getInputProps()} />
        <FaCloudUploadAlt size={50} color="#30bd58" />
        <p>
          قم بسحب الملف الي هنا او{" "}
          <span style={{ color: "#30bd58", cursor: "pointer" }}>
            قم بالبحث علي جهازك
          </span>
        </p>
        <p style={{ fontSize: "12px", color: "#777" }}>
          الملفات المدعومة: PDF, Word, PPT
        </p>
        <p style={{ fontSize: "12px", color: "#404040" }}>
          يجب الا يتعدي حجم الملف عن 1 MB
        </p>
      </DropArea>

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
            تم التحميل {files.length} {files.length === 1 ? "file" : "files"}
          </p>
          {files.map((file, index) => (
            <FileItem key={index}>
              <DeleteButton onClick={() => removeFile(file.name)}>
                <AiOutlineDelete />
              </DeleteButton>
              {file.name}
            </FileItem>
          ))}
        </FileList>
      )}

      <UploadButton onClick={handleUploadFile} disabled={isLoading}>
        <p style={{ fontFamily: "Changa", fontSize: "2rem" }}>رفع الملفات</p>
      </UploadButton>
    </Container>
  );
}

export default AddTaskModal;
