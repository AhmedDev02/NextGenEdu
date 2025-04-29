import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FileUploader from "./FileUploader";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
    border-color: #30bd58;
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

function CourseMaterialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // This function handles form submission
  const onSubmit = (data) => {
    const updatedData = {
      title: data.title,
      week: data.week,
      type: data.type,
      file: data.file,
    };

    console.log(updatedData);
    // Handle the submitted data
  };

  return (
    <FormContainer>
      <FormTitle>Update Course Material</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor="title">Title:</Label>
          <Input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="week">Week:</Label>
          <Input
            id="week"
            type="number"
            {...register("week", { required: "Week is required" })}
          />
          {errors.week && <ErrorMessage>{errors.week.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="type">Type:</Label>
          <Select
            id="type"
            {...register("type", { required: "Type is required" })}
          >
            <option value="">Select type</option>
            <option value="section">Section</option>
            <option value="lecture">Lecture</option>
            <option value="other">Other</option>
          </Select>
          {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
        </FormField>
        <FormField>
          <FileUploader
            control={control}
            name="materialFile"
            label="Upload Course Material"
            required={true}
          />
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default CourseMaterialForm;
