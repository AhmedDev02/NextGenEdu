import { useParams } from "react-router-dom";
import {
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
  Title,
  TitleInput,
} from "./Styles";
import { useForm } from "react-hook-form";
import useEditMaterial from "./useEditMaterial";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Group = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InsideGroup = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DropAreaContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropArea = styled.div`
  border: 2px dashed #bbbbbb;
  border-radius: 10px;
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const FileList = styled.div`
  width: 100%;
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

const HelperText = styled.p`
  font-size: 1.2rem !important;
  color: #777 !important;
`;

const EditMaterial = ({ data, onCloseModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    id: materialId,
    title: materialTitle,
    type: materialType,
    week: materialWeek,
  } = data;

  const { id: courseId } = useParams();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useEditMaterial();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: materialTitle || "",
      week: materialWeek || "1",
      type: materialType || "lecture",
    },
  });

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
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
      }
    },
  });

  useEffect(() => {
    reset({
      title: materialTitle || "",
      week: materialWeek || "1",
      type: materialType || "lecture",
    });
  }, [materialTitle, materialWeek, materialType, reset]);

  const onSubmit = (formData) => {
    const dataToSend = new FormData();
    dataToSend.append("title", formData.title);
    dataToSend.append("week", formData.week);
    dataToSend.append("type", formData.type);
    if (selectedFile) {
      dataToSend.append("material", selectedFile);
    }

    mutate(
      { materialId, updatedData: dataToSend },
      {
        onSuccess: () => {
          toast.success("تم تحديث المادة بنجاح");
          queryClient.invalidateQueries({ queryKey: ["materials", courseId] });
          onCloseModal?.();
        },
        onError: (err) => {
          toast.error(
            err.message || "حدث خطأ أثناء تحديث المادة، يرجى المحاولة مرة أخرى"
          );
        },
      }
    );
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>نافذة تعديل الملف</h1>
      <Content>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Title>
            <P>العنوان</P>
            <TitleInput
              placeholder="ادخل عنوانا واضحا يعكس موضوع المحاضره بدقه"
              type="text"
              {...register("title", { required: "العنوان مطلوب" })}
            />
          </Title>
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}

          <Description>
            <P>الوصف</P>
            <DescriptionInput
              placeholder="قدم شرحا مختصرا حول محتوي المحاضرة وأهدافها التعليمية"
              type="text"
              {...register("description")}
            />
          </Description>

          <Group>
            <InsideGroup>
              <Selections>
                <SelectGroup>
                  <Label>اختر الأسبوع</Label>
                  <Select {...register("week")}>
                    {Array.from({ length: 14 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        الأسبوع {i + 1}
                      </option>
                    ))}
                  </Select>
                </SelectGroup>

                <SelectGroup>
                  <Label>اختر نوع المحتوي</Label>
                  <Select
                    {...register("type", { required: "يجب اختيار النوع اولا" })}
                  >
                    <option value="section">سكشن</option>
                    <option value="lecture">محاضرة</option>
                    <option value="other">اخر</option>
                  </Select>
                </SelectGroup>
                {errors.type && (
                  <p style={{ color: "red" }}>{errors.type.message}</p>
                )}
              </Selections>
            </InsideGroup>

            <DropAreaContainer>
              {selectedFile ? (
                <FileList>
                  <Label>قائمة الملفات</Label>
                  <FileItem>
                    <span>{selectedFile.name}</span>
                    <DeleteButton onClick={() => setSelectedFile(null)}>
                      <AiOutlineDelete />
                    </DeleteButton>
                  </FileItem>
                </FileList>
              ) : (
                <DropArea {...getRootProps()}>
                  <input {...getInputProps()} />
                  <FaCloudUploadAlt size={40} color="#30bd58" />
                  <p>
                    <span>اضغط هنا</span> لرفع ملف جديد
                  </p>
                  <HelperText>أو قم بسحب الملف وإفلاته هنا</HelperText>
                </DropArea>
              )}
            </DropAreaContainer>
          </Group>

          <Publish>
            <button disabled={isPending} type="submit">
              {isPending ? "جاري التعديل..." : "تعديل !"}
            </button>
          </Publish>
        </form>
      </Content>
    </Container>
  );
};

export default EditMaterial;
