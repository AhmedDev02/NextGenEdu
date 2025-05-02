import { useForm } from "react-hook-form";
import styled from "styled-components";
// import FileUploader from "./FileUploader";
import { useEffect } from "react";
import { useUpdateAnnouncement } from "./useUpdateAnnouncement";
import { format } from "date-fns";

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
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Div = styled.div``;

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

  /* box-shadow: var(--shadow-primary); */
  /* Apply red border for required fields */
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
function AnnouncementEditWindow({ selectedAnnouncement }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const { mutate } = useUpdateAnnouncement(); // Use the mutation hook

  useEffect(() => {
    if (selectedAnnouncement) {
      setValue("title", selectedAnnouncement.title);
      setValue("body", selectedAnnouncement.body);
    }
  }, [selectedAnnouncement, setValue]);
  // This function handles form submission
  const onSubmit = async (data) => {
    // const formattedDate = format(new Date(), "yyyy-MM-dd");
    const formattedTime = format(new Date(), "HH:mm");
    const updatedData = {
      course_id: selectedAnnouncement.course.id,
      title: data.title,
      body: data.body,
      date: "2025-5-4",
      time: formattedTime,
    };

    try {
      // Call the mutation function to update the course material
      await mutate({
        announcementId: selectedAnnouncement.id, // Pass the course ID of the selected row
        updatedData, // Pass the updated data
      });
      // Optionally handle any additional actions on success (e.g., close modal)
    } catch (error) {
      console.error("Error updating course material:", error);
    }
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

        <SubmitButton type="submit">تعديل</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default AnnouncementEditWindow;
