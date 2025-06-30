import { useForm } from "react-hook-form";
import styled from "styled-components";
// import FileUploader from "./FileUploader";
import { useEffect, useRef } from "react";
// import { useUpdateAnnouncement } from "./useUpdateAnnouncement";
import { useUpdateAssignment } from "./useUpdateAssignment";
import FileUploader from "../../../ui/FileUploader";

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
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
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
const Form = styled.form`
  display: flex;
`;
const AssignmentData = styled.div`
  height: auto;
`;

function AssignmentEditWindow({ selectedAssignment }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const { mutate } = useUpdateAssignment(); // Use the mutation hook
  const submitBtnRef = useRef(null);

  useEffect(() => {
    const date = selectedAssignment.date; // "2025-04-15"
    const time = selectedAssignment.time.slice(0, 5); // "10:00" (cut seconds)

    const datetimeValue = `${date}T${time}`;
    if (selectedAssignment) {
      setValue("title", selectedAssignment.title);
      setValue("description", selectedAssignment.description);
      setValue("degree", selectedAssignment.total_degree);
      setValue("time", datetimeValue);
    }
  }, [selectedAssignment, setValue]);

  useEffect(() => {
    register("file"); // register it manually since it's set externally
  }, [register]);
  // This function handles form submission
  const onSubmit = async (data) => {
    const [date, time] = data.time.split("T");
    const formData = new FormData();
    formData.append("course_id", selectedAssignment.course.id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("total_degree", data.degree);
    formData.append("date", date);
    formData.append("time", time + ":00");
    //formData.append("file", data.file); // until gasser fix it.
    try {
      // Call the mutation function to update the course material
      await mutate({
        assignmentId: selectedAssignment?.id, // Pass the course ID of the selected row
        updatedData: formData, // Pass the updated data
      });
      // Optionally handle any additional actions on success (e.g., close modal)
    } catch (error) {
      console.error("Error updating course material:", error);
    }
  };

  const triggerSubmit = () => {
    if (submitBtnRef.current) {
      submitBtnRef.current.click();
    }
  };

  return (
    <FormContainer>
      <FormTitle>تعديل البيانات</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <FormField style={{ padding: "0 20px" }}>
            <Label htmlFor="description">الوصف:</Label>
            <Input id="description" type="text" {...register("description")} />
            {errors.week && <ErrorMessage>{errors.week.message}</ErrorMessage>}
          </FormField>
          <FileUploader onFileSelect={(file) => setValue("file", file)} />
        </Div>
        <Div>
          <AssignmentData>
            <FormField>
              <Label htmlFor="title">العنوان:</Label>
              <Input id="title" type="text" {...register("title")} />
              {errors.week && (
                <ErrorMessage>{errors.week.message}</ErrorMessage>
              )}
            </FormField>
            <FormField>
              <Label htmlFor="degree">درجة التكليف:</Label>
              <Input id="degree" type="number" {...register("degree")} />
              {errors.week && (
                <ErrorMessage>{errors.week.message}</ErrorMessage>
              )}
            </FormField>
          </AssignmentData>
          <AssignmentData>
            <FormField>
              <Label htmlFor="time">التوقيت:</Label>
              <Input id="time" type="datetime-local" {...register("time")} />
              {errors.week && (
                <ErrorMessage>{errors.week.message}</ErrorMessage>
              )}
            </FormField>
          </AssignmentData>
        </Div>
        <button ref={submitBtnRef} type="submit" style={{ display: "none" }} />
      </Form>
      <SubmitButton onClick={triggerSubmit}>تعديل</SubmitButton>
    </FormContainer>
  );
}

export default AssignmentEditWindow;
