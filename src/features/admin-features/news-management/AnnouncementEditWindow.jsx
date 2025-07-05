import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect } from "react";
import { useUpdateAnnouncement } from "./useUpdateAnnouncement";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const FormContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FormField = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  font-weight: bold;
  color: #444;
  font-size: 1.6rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.6rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-primary-green);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.6rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
  height: 150px;
  resize: vertical;

  &:focus {
    border-color: var(--color-primary-green);
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-red-700);
  font-size: 1.4rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background-color: #30bd58;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #29a34d;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
    outline: none;
  }
`;

function AnnouncementEditWindow({ selectedAnnouncement, onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const queryClient = useQueryClient();

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

    mutate(
      {
        announcementId: selectedAnnouncement.id,
        updatedData,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["announcements"]);
          toast.success("تم تعديل الخبر بنجاح");
          onCloseModal();
        },
        onError: (err) => {
          toast.error(err.message || "حدث خطأ اثناء تحديث الخبر:");
        },
      }
    );
  };

  return (
    <FormContainer>
      <FormTitle>تعديل البيانات</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor="title">العنوان:</Label>
          <Input
            id="title"
            type="text"
            {...register("title", { required: "هذا الحقل مطلوب" })}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </FormField>

        <FormField>
          <Label htmlFor="body">الخبر:</Label>
          <Textarea
            id="body"
            {...register("body", { required: "هذا الحقل مطلوب" })}
          />
          {errors.body && <ErrorMessage>{errors.body.message}</ErrorMessage>}
        </FormField>

        <SubmitButton type="submit" disabled={isPending}>
          {isPending ? "جاري التعديل..." : "تعديل"}
        </SubmitButton>
      </form>
    </FormContainer>
  );
}

export default AnnouncementEditWindow;
