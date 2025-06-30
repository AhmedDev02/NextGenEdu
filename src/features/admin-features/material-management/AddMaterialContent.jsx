import { FaFilePdf } from "react-icons/fa";
import Modal from "../../../ui/amr/Modal";
import { useState } from "react";
import useAddMaterial from "./useAddMaterial";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import AddFileModal from "./AddFileModal";
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
  Select,
  SelectGroup,
  Selections,
  SendButton,
  Title,
  TitleInput,
  UploadsContainer,
} from "./Styles";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

import { useForm } from "react-hook-form";

export const FileItem = styled.div`
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

export const DeleteButton = styled.button`
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

const Warning = styled.p`
  color: red;
  font-size: 1.4rem;
  margin-top: 0.5rem;
`;

const AddMaterialContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();
  const { mutate, isPending } = useAddMaterial();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!selectedFile) {
      toast.error("يجب اختيار الملف اولا");
      return;
    }

    const formData = new FormData();
    formData.append("material[]", selectedFile);
    formData.append("title", data.title);
    formData.append("week", data.week);
    formData.append("type", data.type);

    if (data.description) {
      formData.append("description", data.description);
    }

    mutate(
      { courseId: id, data: formData },
      {
        onSuccess: () => {
          toast.success("تم إضافة الملف بنجاح");
          setSelectedFile(null);
          reset();
        },
        onError: () => {
          toast.error("حدث خطأ أثناء إضافة الملف، يرجى المحاولة مرة أخرى");
        },
      }
    );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <Title>
            <P>العنوان</P>
            <TitleInput
              placeholder="ادخل عنوانا واضحا يعكس موضوع المحاضره بدقه"
              type="text"
              {...register("title", { required: "يجب اختيار العنوان اولا" })}
            />
            {errors.title && <Warning>{errors.title.message}</Warning>}
          </Title>
          <Description>
            <P>الوصف</P>
            <DescriptionInput
              placeholder="قدم شرحا مختصرا حول محتوي المحاضرة وأهدافها التعليمية"
              type="text"
              {...register("description")}
            />
          </Description>
          <Selections>
            <SelectGroup>
              <Label>اختر الأسبوع</Label>
              <Select
                {...register("week", { required: "يجب اختيار الاسبوع اولا" })}
                defaultValue=""
              >
                <option value="" disabled>
                  -- اختر الأسبوع --
                </option>
                {Array.from({ length: 15 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    الأسبوع {i + 1}
                  </option>
                ))}
              </Select>
              {errors.week && <Warning>{errors.week.message}</Warning>}
            </SelectGroup>
            <SelectGroup>
              <Label>اختر نوع المحتوي</Label>
              <Select
                {...register("type", { required: "يجب اختيار نوع المادة" })}
                defaultValue=""
              >
                <option value="" disabled>
                  -- اختر النوع --
                </option>
                <option value="section">سكشن</option>
                <option value="lecture">محاضرة</option>
                <option value="other">اخر</option>
              </Select>
              {errors.type && <Warning>{errors.type.message}</Warning>}
            </SelectGroup>
          </Selections>

          <ButtonsContainer>
            <Modal>
              {!selectedFile && (
                <Modal.Open opens="add-file">
                  <SendButton type="button" size="large" variation="primary">
                    <Amr>
                      <FaFilePdf />
                      <span>رفع ملف</span>
                    </Amr>
                  </SendButton>
                </Modal.Open>
              )}
              <Modal.Window name="add-file">
                <AddFileModal
                  onSelectFile={setSelectedFile}
                  onCloseModal={() => {}}
                />
              </Modal.Window>
            </Modal>
          </ButtonsContainer>

          {selectedFile && (
            <UploadsContainer>
              <FileItem>
                <span>{selectedFile.name}</span>
                <DeleteButton
                  type="button"
                  onClick={() => setSelectedFile(null)}
                >
                  <AiOutlineDelete />
                </DeleteButton>
              </FileItem>
            </UploadsContainer>
          )}

          <Publish>
            <button type="submit" disabled={isPending}>
              {isPending ? "جاري النشر..." : "نشر !"}
            </button>
          </Publish>
        </Content>
      </form>
    </Container>
  );
};

export default AddMaterialContent;
