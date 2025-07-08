import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import styled from "styled-components";

import useGetDepartments from "../super-department-management/useGetDepartments";
import useCreateTeacher from "./useCreateTeacher";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";

const FormContainer = styled.form`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 2rem auto;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    align-items: stretch;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
  padding-top: 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }

  &:disabled {
    background-color: #e5e7eb;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #1f2937;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #1f2937;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #10b981;
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);

  &:hover:not(:disabled) {
    background-color: #059669;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  grid-column: 2 / -1;
  margin-top: -1rem;
`;

function CreateTeacherForm() {
  const queryClient = useQueryClient();

  const {
    data: departmentsData,
    isPending: isLoadingDepts,
    error: errorDepts,
  } = useGetDepartments();
  const { mutate, isPending: isCreatingTeacher } = useCreateTeacher();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("تم إضافة عضو هيئة التدريس بنجاح");
        queryClient.invalidateQueries({ queryKey: ["teachers"] });
        reset();
      },
      onError: (err) => {
        toast.error(err.message || "حدث خطأ أثناء إضافة عضو هيئة التدريس");
      },
    });
  };

  const isWorking = isLoadingDepts || isCreatingTeacher;

  if (isLoadingDepts) return <Spinner />;
  if (errorDepts) return <ErrorFallBack message={errorDepts.message} />;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>إضافة عضو هيئة تدريس جديد</FormTitle>

      <FormRow>
        <Label htmlFor="name">اسم عضو هيئة التدريس</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "يجب كتابة اسم الدكتور كاملا" })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormRow>

      <FormRow>
        <Label htmlFor="department_id">القسم</Label>
        <Select
          id="department_id"
          disabled={isWorking}
          {...register("department_id", { required: "يجب اختيار القسم" })}
        >
          <option value="">-- اختر القسم --</option>
          {departmentsData?.data?.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </Select>
        {errors.department_id && (
          <ErrorMessage>{errors.department_id.message}</ErrorMessage>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">الوصف (اختياري)</Label>
        <Textarea
          id="description"
          disabled={isWorking}
          {...register("description")}
        />
      </FormRow>

      <ButtonContainer>
        <SubmitButton type="submit" disabled={isWorking}>
          {isWorking ? "جاري الإضافة..." : "إضافة عضو هيئة تدريس"}
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CreateTeacherForm;
