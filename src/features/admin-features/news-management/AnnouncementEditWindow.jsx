import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useUpdateAnnouncement } from "./useUpdateAnnouncement";

const FormContainer = styled.div`
  min-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: var(---shadow-primary);
  background-color: #fff;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--green-primary);
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #30bd58;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4b9f4f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 18px;

  ${({ required }) =>
    required &&
    `
    border: 2px solid red;
  `}
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
`;
function AnnouncementEditWindow({ selectedAnnouncement, onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const { mutate, isPending } = useUpdateAnnouncement();
  useEffect(() => {
    if (selectedAnnouncement) {
      setValue("title", selectedAnnouncement.title);
      setValue("body", selectedAnnouncement.body);
    }
  }, [selectedAnnouncement, setValue]);
  const onSubmit = (data) => {
    const updatedData = {
      course_id: selectedAnnouncement.course.id,
      title: data.title,
      body: data.body,
    };

    try {
      mutate({
        announcementId: selectedAnnouncement.id,
        updatedData,
      });
    } catch (error) {
      console.error("Error updating course material:", error);
    }
    onCloseModal();
  };

  return (
    <FormContainer>
      <FormTitle>تعديل البيانات</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor="title">العنوان:</Label>
          <Input id="title" type="text" {...register("title")} />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="body">الخبر:</Label>
          <Textarea id="body" type="number" {...register("body")} />
          {errors.week && <ErrorMessage>{errors.week.message}</ErrorMessage>}
        </FormField>

        <SubmitButton type="submit" disabled={isPending}>
          تعديل
        </SubmitButton>
      </form>
    </FormContainer>
  );
}

export default AnnouncementEditWindow;
