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
import { useEffect } from "react";
import styled from "styled-components";

const Group = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
`;
const InsideGroup = styled.div`
  width: 50%;
`;

const EditMaterial = ({ data, onCloseModal }) => {
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

  // Reset form when component loads or when data changes
  useEffect(() => {
    reset({
      title: materialTitle || "",
      week: materialWeek || "1",
      type: materialType || "lecture",
    });
  }, [materialTitle, materialWeek, materialType, reset]);

  const onSubmit = (formData) => {
    // const dataToSend = new FormData();
    // dataToSend.append("title", formData.title);
    // dataToSend.append("week", formData.week);
    // dataToSend.append("type", formData.type);
    // if (selectedFile) {
    //   dataToSend.append("file", selectedFile);
    // }
    const dataToSend = {
      title: formData.title,
      week: formData.week,
      type: formData.type,
    };

    // console.log("Data to send:");
    // for (let pair of dataToSend.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }

    mutate(
      { materialId, updatedData: dataToSend },
      {
        onSuccess: () => {
          toast.success("تم تحديث المادة بنجاح");
          queryClient.invalidateQueries({ queryKey: ["materials", courseId] });
          onCloseModal();
        },
        onError: (error) => {
          console.error("Error updating material:", error);
          toast.error("حدث خطأ أثناء تحديث المادة، يرجى المحاولة مرة أخرى");
          onCloseModal();
        },
      }
    );
  };

  return (
    <Container style={{ width: "100rem" }}>
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
                    {Array.from({ length: 15 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        الأسبوع {i + 1}
                      </option>
                    ))}
                  </Select>
                </SelectGroup>

                <SelectGroup>
                  <Label>اختر نوع المحتوي</Label>
                  <Select {...register("type")}>
                    <option value="section">سكشن</option>
                    <option value="lecture">محاضرة</option>
                    <option value="other">اخر</option>
                  </Select>
                </SelectGroup>
              </Selections>
            </InsideGroup>

            {/* <EditFileModal onSelectFile={setSelectedFile} /> */}
          </Group>

          <Publish>
            <button disabled={isPending} type="submit">
              تعديل !
            </button>
          </Publish>
        </form>
      </Content>
    </Container>
  );
};

export default EditMaterial;
