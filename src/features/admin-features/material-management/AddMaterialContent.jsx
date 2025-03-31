import styled from "styled-components";
import Accordion from "../../../ui/amr/Accordion";
import Button from "../../../ui/Button";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import Modal from "../../../ui/amr/Modal";
import AddTaskModal from "../../student-features/tasks/AddTaskModal";
import { useRef, useState } from "react";
import AddFileModal from "./addFileModal";

const Container = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 5rem;
`;
const Title = styled.div``;
const Description = styled.div``;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
const P = styled.p`
  font-size: 3rem !important;
  margin-bottom: 2rem;
  font-weight: bold;
`;
const TitleInput = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 2rem !important;
  padding: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.7rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const DescriptionInput = styled.input`
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 2rem !important;
  padding: 1rem;
  font-family: "Changa", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 2rem;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;
const Amr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 4rem !important;
`;

const FormWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    &::placeholder {
      font-family: "Changa", sans-serif;
      font-size: 2rem;
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  button {
    white-space: nowrap;
  }
`;
const UploadsContainer = styled.div`
  width: 100%;
  background: #f9f9f9;
  border-radius: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const UploadItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background: #f9f9f9;
  width: 100%;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
`;

const MediaPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
  }

  video {
    width: 150px;
    height: auto;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
  }

  a {
    text-decoration: none;
    color: #30bd58;
    font-weight: bold;
  }
`;
const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 1.6rem;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: darkred;
  }
`;
const Publish = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: 13rem;
    height: 6rem;
    background: var(--color-danger-red);
    border: none;
    outline: none;
    color: white;
    font-family: "Changa", sans-serif;
    font-weight: bold;
    font-size: 2rem !important;
    border-radius: 2rem;
    &:active {
      background: transparent;
      color: var(--color-danger-red);
      border: 2px solid black;
    }
  }
`;

const AddMaterialContent = () => {
  const [showForm, setShowForm] = useState(false);
  const fileInputRef = useRef(null);
  const [uploads, setUploads] = useState([]);
  const [link, setLink] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  function handleFileUpload() {
    fileInputRef.current.click();
  }

  function handleAdd() {
    if (link) {
      setUploads((prev) => [...prev, { type: "link", content: link }]);
      setLink("");
    }
    setShowForm(false);
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    let fileType = "file";
    let fileURL = URL.createObjectURL(file);

    console.log("Selected File:", file.name, "Type:", file.type);

    if (file.type.startsWith("image")) {
      fileType = "image";
    } else if (file.type.startsWith("video")) {
      fileType = "video";
    } else if (file.type === "application/pdf") {
      fileType = "pdf";
    } else if (
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      fileType = "word";
    }

    setUploads((prev) => [
      ...prev,
      { type: fileType, content: fileURL, name: file.name },
    ]);
  }

  function handleRemove(index) {
    setUploads((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <Container>
      <Accordion title="الاسبوع الاول">
        <Content>
          <Title>
            <P>عنوان المحاضره</P>
            <TitleInput
              placeholder="ادخل عنوانا واضحا يعكس موضوع المحاضره بدقه"
              type="text"
            />
          </Title>
          <Description>
            <P>وصف المحاضره</P>
            <DescriptionInput
              placeholder="قدم شرحا مختصرا حول محتوي المحاضرة وأهدافها التعليمية"
              type="text"
            />
          </Description>

          {uploads.length > 0 && (
            <UploadsContainer>
              {uploads.map((item, index) => (
                <UploadItem key={index}>
                  <RemoveButton onClick={() => handleRemove(index)}>
                    ❌
                  </RemoveButton>

                  {item.type === "link" ? (
                    <a
                      href={item.content}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 {item.content}
                    </a>
                  ) : item.type === "image" ? (
                    <MediaPreview>
                      <img src={item.content} alt={item.name} />
                    </MediaPreview>
                  ) : item.type === "video" ? (
                    <MediaPreview>
                      <video src={item.content} controls />
                    </MediaPreview>
                  ) : item.type === "pdf" ? (
                    <MediaPreview>
                      <a
                        href={item.content}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf size={50} color="#ff0000" />
                        <span>{item.name}</span>
                      </a>
                    </MediaPreview>
                  ) : item.type === "word" ? (
                    <MediaPreview>
                      <a
                        href={item.content}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFileWord size={50} color="#2b579a" />{" "}
                        <span>{item.name}</span>
                      </a>
                    </MediaPreview>
                  ) : (
                    <span>📁 {item.name}</span>
                  )}
                </UploadItem>
              ))}
            </UploadsContainer>
          )}

          <ButtonsContainer>
            <Modal>
              <Modal.Open opens="add-task">
                <Button size="large" variation="danger">
                  <Amr>
                    <p>
                      <FaFilePdf />
                    </p>
                    <p>
                      {uploadedFiles.length > 0
                        ? uploadedFiles.map((file) => file.name).join(", ")
                        : "رفع ملف"}
                    </p>
                  </Amr>
                </Button>
              </Modal.Open>
              <Modal.Window name="add-task">
                <AddFileModal onFileUpload={setUploadedFiles} />
              </Modal.Window>
            </Modal>

            <Button
              size="large"
              variation="transparent"
              onClick={() => setShowForm((prev) => !prev)}
            >
              <Amr>
                <p>
                  <IoIosLink />
                </p>
                <p>اضافة رابط</p>
              </Amr>
            </Button>

            <Button
              size="large"
              variation="transparent"
              onClick={handleFileUpload}
            >
              <Amr>
                <p>
                  <LuUpload />
                </p>
                <p>رفع فيديو او صوره</p>
              </Amr>
            </Button>
            <input
              type="file"
              accept="image/*, video/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
          </ButtonsContainer>
          {showForm && (
            <FormWrapper>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="ادخل الرابط هنا..."
              />
              <Button onClick={handleAdd} size="small" variation="primary">
                حفظ
              </Button>
            </FormWrapper>
          )}
          <Publish>
            <button>انشر</button>
          </Publish>
        </Content>
      </Accordion>
    </Container>
  );
};

export default AddMaterialContent;
