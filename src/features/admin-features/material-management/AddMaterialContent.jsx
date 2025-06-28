import { FaFilePdf } from "react-icons/fa";
import Modal from "../../../ui/amr/Modal";
import { useState } from "react";
import useAddMaterial from "./useAddMaterial";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Amr,
  ButtonsContainer,
  Container,
  Content,
  Description,
  DescriptionInput,
  Label,
  P,
  Publish,
  RemoveButton,
  Select,
  SelectGroup,
  Selections,
  SendButton,
  Title,
  TitleInput,
  UploadItem,
  UploadsContainer,
} from "./Styles";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import AddFileModal from "./addFileModal";

export const FileItem = styled.div`
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
export const DeleteButton = styled.button`
  background: none;
  border: 1px solid red;
  cursor: pointer;
  color: red;
  font-size: 16px;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const AddMaterialContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState("1");
  const [type, setType] = useState("lecture");
  const { id } = useParams();
  const { mutate, isPending } = useAddMaterial();

  const handleSubmit = () => {
    if (!selectedFile) {
      toast.error("يجب اختيار الملف اولا");
      return;
    }
    if (!title || !week || !type) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const formData = new FormData();
    formData.append("material[]", selectedFile);

    formData.append("title", title);
    formData.append("week", week);
    formData.append("type", type);
    if (description) {
      formData.append("description", description);
    }
    mutate(
      { courseId: id, data: formData },
      {
        onSuccess: () => {
          toast.success("تم إضافة الملف بنجاح");
          setSelectedFile(null);
          setTitle("");
          setDescription("");
          setWeek("1");
          setType("lecture");
        },
        onError: () => {
          toast.error("حدث خطأ أثناء إضافة الملف، يرجى المحاولة مرة أخرى");
        },
      }
    );
  };

  return (
    <Container>
      <Content>
        <Title>
          <P>العنوان</P>
          <TitleInput
            placeholder="ادخل عنوانا واضحا يعكس موضوع المحاضره بدقه"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Title>
        <Description>
          <P>الوصف</P>
          <DescriptionInput
            placeholder="قدم شرحا مختصرا حول محتوي المحاضرة وأهدافها التعليمية"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Description>
        <Selections>
          <SelectGroup>
            <Label>اختر الأسبوع</Label>
            <Select value={week} onChange={(e) => setWeek(e.target.value)}>
              {Array.from({ length: 15 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  الأسبوع {i + 1}
                </option>
              ))}
            </Select>
          </SelectGroup>
          <SelectGroup>
            <Label>اختر نوع المحتوي</Label>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="section">سكشن</option>
              <option value="lecture">محاضرة</option>
              <option value="other">اخر</option>
            </Select>
          </SelectGroup>
        </Selections>

        <ButtonsContainer>
          <Modal>
            <Modal.Open opens="add-task">
              {selectedFile === null ? (
                <SendButton
                  // disabled={selectedFile}
                  size="large"
                  variation="primary"
                >
                  <Amr>
                    <p>
                      <FaFilePdf />
                    </p>
                    <p>رفع ملف</p>
                  </Amr>
                </SendButton>
              ) : (
                <p></p>
              )}
            </Modal.Open>
            <Modal.Window name="add-task">
              <AddFileModal onSelectFile={setSelectedFile} />
            </Modal.Window>
          </Modal>
        </ButtonsContainer>

        {/* {selectedFile && (
          <UploadsContainer>
            <UploadItem>
              <RemoveButton onClick={() => setSelectedFile(null)}>
                ❌
              </RemoveButton>
              <span>📁 {selectedFile.name}</span>
            </UploadItem>
          </UploadsContainer>
        )} */}
        {selectedFile && (
          <UploadsContainer>
            <FileItem>
              <DeleteButton onClick={() => setSelectedFile(null)}>
                <AiOutlineDelete />
              </DeleteButton>
              {selectedFile.name}
            </FileItem>
          </UploadsContainer>
        )}

        <Publish>
          <button onClick={handleSubmit} disabled={isPending}>
            نشر !
          </button>
        </Publish>
      </Content>
    </Container>
  );
};

export default AddMaterialContent;
