import { useForm } from "react-hook-form";
import styled from "styled-components";
import FileUploader from "./FileUploader";
import { useEffect } from "react";
import { useUpdatedCourseMaterial } from "./useUpdateCourseMaterials";

const FormContainer = styled.div`
  max-width: 500px;
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

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;

  &:focus {
    border-color: #30bd58;
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

function CourseMaterialForm({ selectedRow }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();
  const { mutate } = useUpdatedCourseMaterial(); // Use the mutation hook

  useEffect(() => {
    if (selectedRow) {
      setValue("title", selectedRow.title);
      setValue("week", selectedRow.week);
      setValue("type", selectedRow.type);
      setValue("file", selectedRow.file); // Use the file URL or file object
    }
  }, [selectedRow, setValue]);
  // This function handles form submission
  const onSubmit = async (data) => {
    console.log(selectedRow.id);
    const updatedData = {
      title: data.title,
      week: data.week,
      type: data.type,
      file: data.materialFile,
    };

    try {
      // Call the mutation function to update the course material
      await mutate({
        courseId: selectedRow.id, // Pass the course ID of the selected row
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
          <Label htmlFor="week">الأسبوع:</Label>
          <Input id="week" type="number" {...register("week")} />
          {errors.week && <ErrorMessage>{errors.week.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="type">النوع:</Label>
          <Select id="type" {...register("type")}>
            <option value="">إختر نوع البيانات: </option>
            <option value="section">Section</option>
            <option value="lecture">Lecture</option>
            <option value="other">Video</option>
          </Select>
          {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <FileUploader
            name="materialFile" // Field name
            label="إرفع الملف المراد تعديله"
            required={false}
            setValue={setValue} // Pass setValue to update the form state
          />
        </FormField>
        <SubmitButton type="submit">تعديل</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default CourseMaterialForm;
