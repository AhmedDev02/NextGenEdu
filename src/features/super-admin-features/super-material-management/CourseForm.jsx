// src/components/AddCourseForm/CourseForm.jsx

import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";
import useGetDepartments from "../super-department-management/useGetDepartments";
import { FaBook, FaBarcode, FaAlignLeft, FaLayerGroup } from "react-icons/fa";
import DetailGroupItem from "./DetailGroupItem";
import Spinner from "../../../ui/amr/Spinner";
import {
  FormWrapper,
  FormContainer,
  Title,
  Grid,
  FormGroup,
  Label,
  StyledInput,
  StyledTextArea,
  ErrorMessage,
  Button,
  ButtonContainer,
} from "./AddCourse.styles";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const CourseForm = ({ onSubmit, isLoading, courseToEdit = null, onCancel }) => {
  const {
    data: departmentsResponse,
    isPending: isPendingDepartments,
    error,
    refetch,
  } = useGetDepartments();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", code: "", description: "", details: [] },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "details",
  });

  useEffect(() => {
    if (courseToEdit) {
      reset({
        name: courseToEdit.name,
        code: courseToEdit.code,
        description: courseToEdit.description,
        details: courseToEdit.details.map((detail) => ({
          department: detail.department_id,
          semester: detail.semester,
          teachers: detail.teachers || [],
        })),
      });

      const detailsForForm = courseToEdit.details.map((detail) => ({
        department: detail.department_id,
        semester: detail.semester,
        teachers: detail.teachers || [],
      }));

      replace(detailsForForm);
    }
  }, [courseToEdit, replace, reset]);

  if (isPendingDepartments) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message={error.message || "خطأ في عرض المعلومات"}
        onRetry={refetch}
      />
    );
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>{courseToEdit ? "تعديل المادة" : "إنشاء مادة جديدة"}</Title>

        <Grid>
          <FormGroup>
            <Label>
              <FaBook /> إسم المادة
            </Label>
            <StyledInput
              placeholder="يجب ان يكون إسم المادة صالح طبقا للائحة الكلية"
              {...register("name", { required: "إسم المادة مطلوب" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label>
              <FaBarcode /> كود المادة
            </Label>
            <StyledInput
              placeholder="يجب ان يكون الكود صالح طبقا للائحة الكليه"
              {...register("code", { required: "كود المادة مطلوب" })}
            />
            {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup colSpan={2}>
            <Label>
              <FaAlignLeft /> وصف المادة
            </Label>
            <StyledTextArea
              placeholder="يجب اضافة وصف مختصر يكون دقيق ومعبر عن القسم"
              {...register("description", { required: "وصف المادة مطلوب" })}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </FormGroup>
        </Grid>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #eee",
            margin: "2rem 0",
          }}
        />

        {fields.map((field, index) => (
          <DetailGroupItem
            key={field.id}
            control={control}
            register={register}
            index={index}
            remove={remove}
            departments={departmentsResponse?.data}
            isEditMode={!!courseToEdit}
          />
        ))}

        <Button
          type="button"
          onClick={() => append({ department: "", semester: "", teachers: [] })}
          style={{
            width: "100%",
            marginTop: "1rem",
            background: "#e8eaf6",
            color: "#3f51b5",
          }}
        >
          <FaLayerGroup /> إضافة مجموعة تفاصيل جديدة
        </Button>
        <ButtonContainer>
          <Button
            style={{
              marginTop: "1rem",
              background: "#56c428",
              color: "#ffffff",
            }}
            type="submit"
            className="primary"
            disabled={isLoading}
          >
            {isLoading ? "جاري الحفظ..." : "حفظ التغييرات"}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </FormWrapper>
  );
};

export default CourseForm;
