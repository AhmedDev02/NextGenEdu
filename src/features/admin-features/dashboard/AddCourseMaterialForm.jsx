import { useForm } from "react-hook-form";
import styled from "styled-components";
import FileUploader from "./FileUploader";
import { useCourseMaterialAdd } from "./useCourseMaterialAdd";
import { useParams } from "react-router-dom";
import Button from "../../../ui/Button";
import FileUploaderArray from "./FileUploaderArray";

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

function AddCourseMaterialForm() {
  const { curriculumId: id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { mutate } = useCourseMaterialAdd(); // Use the mutation hook

  // This function handles form submission
  const onSubmit = async (data) => {
    console.log(data);
    const formData = {
      title: data.title,
      week: data.week,
      type: data.type,
      "material[]": data.materialFile,
    };
    try {
      // Call the mutation function to update the course material
      await mutate({
        courseId: id, // Pass the course ID of the selected row
        data: formData, // Pass the updated data
      });
      // Optionally handle any additional actions on success (e.g., close modal)
    } catch (error) {
      console.error("Error updating course material:", error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>اضافة محتوى للمادة</FormTitle>
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
          <FileUploaderArray
            name="materialFile" // Field name
            label="إرفع الملف"
            required={false}
            setValue={setValue} // Pass setValue to update the form state
          />
        </FormField>
        <Button variation="primary" style={{ width: "100%" }} type="submit">
          إدراج
        </Button>
      </form>
    </FormContainer>
  );
}

export default AddCourseMaterialForm;
