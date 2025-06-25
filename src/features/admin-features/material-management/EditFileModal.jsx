import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const Container = styled.div`
  height: auto;
  width: clamp(25rem, 50%, 50rem);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
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
  &:hover {
    background: #4b9f4f;
  }
`;

function EditFileModal({ onCloseModal, onSelectFile }) {
  const [files, setFiles] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState([]);

  // const setSelectedFile = () => {
  //   if (files.length > 0) {
  //     onSelectFile(files[0]);
  //   }
  // };

  useEffect(() => {
    files.length > 0 && onSelectFile(files[0]);
  }, [files, onSelectFile]);

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
        const file = acceptedFiles[0];
        const newFiles = [{ file, progress: 0 }];
        setUploadingFiles(newFiles);
        simulateUpload(newFiles);
      }
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
          setFiles([fileObj.file]); // single file array
          setUploadingFiles([]);
        }
      }, 1000);
    });
  };

  const removeFile = () => {
    setFiles([]);
  };

  return (
    <Container>
      {uploadingFiles.length > 0 && (
        <UploadingContainer>
          <p>Uploading - {uploadingFiles.length} file(s)</p>
          {uploadingFiles.map((fileObj, index) => (
            <div key={index}>
              <p>{fileObj.file.name}</p>
              <ProgressBar progress={fileObj.progress} />
            </div>
          ))}
        </UploadingContainer>
      )}

      {files.length > 0 ? (
        <FileList>
          <p>تم رفع {files.length} ملف</p>
          {files.map((file, index) => (
            <FileItem key={index}>
              <DeleteButton onClick={() => removeFile()}>
                <AiOutlineDelete />
              </DeleteButton>
              {file.name}
            </FileItem>
          ))}
        </FileList>
      ) : (
        <>
          <h2>رفع ملف جديد</h2>
          <DropArea {...getRootProps()}>
            <input {...getInputProps()} />
            <FaCloudUploadAlt size={50} color="#30bd58" />
            <p>
              Drag & drop files or{" "}
              <span style={{ color: "#30bd58", cursor: "pointer" }}>
                Browse
              </span>
            </p>
            <p style={{ fontSize: "12px", color: "#777" }}>
              Supported formats: PDF, Word, PPT
            </p>
          </DropArea>
        </>
      )}
      {/* 
      <UploadButton
        onClick={() => {
          setSelectedFile();
        }}
        disabled={!files.length}
      >
        <p style={{ fontFamily: "Changa", fontSize: "2rem" }}>رفع الملفات</p>
      </UploadButton> */}
    </Container>
  );
}

export default EditFileModal;
