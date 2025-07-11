import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import useGetDepartments from "../super-department-management/useGetDepartments";
import useGetOneTeacher from "./useGetOneTeacher";
import useUpdateTeacher from "./useUpdateTeacher";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Modal from "../../../ui/amr/Modal";
import DeleteTeacher from "./DeleteTeacher";

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

const AvatarPreview = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const AvatarImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e5e7eb;
`;

const FormSection = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #10b981;
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  align-items: start;
  gap: 1.5rem;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

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
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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

const DeleteButton = styled(Button)`
  background-color: #ef4444;
  color: white;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);

  &:hover:not(:disabled) {
    background-color: #dc2626;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  grid-column: 2 / -1;
  margin-top: -1rem;
`;

function UpdateTeacherForm() {
  const { teacherId } = useParams();
  const queryClient = useQueryClient();

  const { teacher, isPending, error, refetch } = useGetOneTeacher(teacherId);
  const {
    data: departmentsData,
    isPending: isLoadingDepts,
    error: errorDepts,
  } = useGetDepartments();
  const { mutate, isPending: isUpdatingTeacher } = useUpdateTeacher();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  useEffect(() => {
    if (teacher?.data) {
      const department = departmentsData?.data?.find(
        (d) => d.name === teacher.data.department
      );
      reset({
        ...teacher.data,
        department_id: department?.id,
      });
    }
  }, [teacher, departmentsData, reset]);

  const onSubmit = (data) => {
    const updatedData = {
      name: data.name,
      department_id: data.department_id,
      description: data.description,
    };

    mutate(
      { teacherId, updatedData },
      {
        onSuccess: () => {
          toast.success("تم تحديث بيانات عضو هيئة التدريس بنجاح");
          queryClient.invalidateQueries({ queryKey: ["teacher", teacherId] });
        },
        onError: (err) => {
          toast.error(err.message || "حدث خطأ أثناء تحديث البيانات");
        },
      }
    );
  };

  const isWorking = isLoadingDepts || isPending || isUpdatingTeacher;

  if (isLoadingDepts || isPending) return <Spinner />;
  if (errorDepts || error)
    return <ErrorFallBack message={errorDepts?.message || error?.message} onRetry={refetch} />;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>تعديل بيانات عضو هيئة التدريس</FormTitle>

      <AvatarPreview>
        <AvatarImage
          src={`https://${teacher?.data?.avatar}`}
          alt="Teacher Avatar"
        />
      </AvatarPreview>

      <FormSection>
        <SectionTitle>بيانات يمكن تعديلها</SectionTitle>
        <FormRow>
          <Label htmlFor="name">اسم عضو هيئة التدريس</Label>
          <Input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", { required: "هذا الحقل مطلوب" })}
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
      </FormSection>

      <FormSection>
        <SectionTitle>بيانات لا يمكن تعديلها</SectionTitle>
        <FormRow>
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input type="email" id="email" {...register("email")} disabled />
        </FormRow>
        <FormRow>
          <Label htmlFor="uni_code">الرمز الجامعي</Label>
          <Input type="text" id="uni_code" {...register("uni_code")} disabled />
        </FormRow>
      </FormSection>

      <ButtonContainer>
        <div>
          <Modal>
            <Modal.Open opens="delete-teacher">
              <DeleteButton type="button">
                <FaTrash />
                <span>حذف المدرس</span>
              </DeleteButton>
            </Modal.Open>
            <Modal.Window name="delete-teacher">
              <DeleteTeacher teacherId={teacherId} onCloseModal={() => {}} />
            </Modal.Window>
          </Modal>
        </div>
        <Buttons>
          <SubmitButton type="submit" disabled={!isDirty || isWorking}>
            {isWorking ? "جاري الحفظ..." : "حفظ التغييرات"}
          </SubmitButton>
        </Buttons>
      </ButtonContainer>
    </FormContainer>
  );
}

export default UpdateTeacherForm;
