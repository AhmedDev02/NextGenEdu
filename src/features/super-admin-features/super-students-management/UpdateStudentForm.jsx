import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import useGetDepartments from "../super-department-management/useGetDepartments";
import useUpdateStudent from "./useUpdateStudent";
import useGetOneStudent from "./useGetOneStudent";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { ActionButton } from "./SharedStyles";
import { FaTrash } from "react-icons/fa";
import Modal from "../../../ui/amr/Modal";
import DeleteStudent from "./DeleteStudent";
import { useEffect } from "react";

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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AvatarImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e5e7eb;
`;

const FormSection = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
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
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    align-items: stretch;
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
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
    color: #6b7280;
    cursor: not-allowed;
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
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
`;
const DeleteContainer = styled.div``;
const Buttons = styled.div``;
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
`;

const semesterTerms = [
  { label: "فرقة أعدادية / ترم اول", value: 1 },
  { label: "فرقة أعدادية / ترم ثاني", value: 2 },
  { label: "فرقة أولي / ترم اول", value: 3 },
  { label: "فرقة أولي / ترم ثاني", value: 4 },
  { label: "فرقة ثانية / ترم اول", value: 5 },
  { label: "فرقة ثانية / ترم ثاني", value: 6 },
  { label: "فرقة ثالثة / ترم اول", value: 7 },
  { label: "فرقة ثالثة / ترم ثاني", value: 8 },
  { label: "فرقة رابعة / ترم اول", value: 9 },
  { label: "فرقة رابعة / ترم ثاني", value: 10 },
];

const nationalities = [
  { label: "مصري", value: "National" },
  { label: "اجنبي", value: "international" },
];

function UpdateStudentForm({ onCancel }) {
  const { studentId } = useParams();
  const queryClient = useQueryClient();

  const {
    student,
    isPending: isLoadingStudent,
    error: errorStudent,
    refetch,
  } = useGetOneStudent(studentId);
  const {
    data: departmentsData,
    isPending: isLoadingDepts,
    error: errorDepts,
  } = useGetDepartments();
  const { mutate, isPending: isUpdatingStudent } = useUpdateStudent();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    values: student?.data,
  });
  const avatar = student?.data?.avatar;
  useEffect(() => {
    if (student?.data) {
      const department = departmentsData?.data?.find(
        (d) => d.name === student.data.department
      );
      reset({
        ...student.data,
        department_id: department?.id,
      });
    }
  }, [student, departmentsData, reset]);

  const onSubmit = (data) => {
    const updatedData = {
      name: data.name,
      department_id: data.department_id,
      nationality: data.nationality,
      semester_id: data.semester,
    };

    mutate(
      { studentId, updatedData },
      {
        onSuccess: () => {
          toast.success("تم تحديث البيانات بنجاح");
          queryClient.invalidateQueries(["student", studentId]);
        },
        onError: (err) => {
          toast.error(err.message || "خدث خطأ اثناء تحديث البيانات");
        },
      }
    );
  };
  const isWorking = isLoadingStudent || isLoadingDepts || isUpdatingStudent;

  if (isLoadingStudent || isLoadingDepts) return <Spinner />;
  if (errorStudent || errorDepts)
    return (
      <ErrorFallBack
        message={errorStudent?.message || errorDepts?.message}
        onRetry={refetch}
      />
    );

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>تعديل بيانات الطالب</FormTitle>

      <AvatarPreview>
        <AvatarImage src={`https://${avatar}`} alt="Student Avatar" />
      </AvatarPreview>

      <FormSection>
        <SectionTitle>بيانات يمكن تعديلها</SectionTitle>
        <FormRow></FormRow>
        <FormRow>
          <Label htmlFor="name">اسم الطالب</Label>
          <Input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", { required: "يجب كتابة اسم الطالب" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="nationality">الجنسية</Label>
          <Select
            id="nationality"
            disabled={isWorking}
            {...register("nationality", {
              required: "يجب اختيار جنسية الطالب",
            })}
          >
            {nationalities.map((nat) => (
              <option key={nat.value} value={nat.value}>
                {nat.label}
              </option>
            ))}
          </Select>
        </FormRow>

        <FormRow>
          <Label htmlFor="department_id">القسم</Label>
          <Select
            id="department_id"
            disabled={isWorking}
            {...register("department_id")}
          >
            {departmentsData?.data?.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </Select>
        </FormRow>

        <FormRow>
          <Label htmlFor="semester">الفرقة / الترم</Label>
          <Select id="semester" disabled={isWorking} {...register("semester")}>
            {semesterTerms.map((sem) => (
              <option key={sem.value} value={sem.value}>
                {sem.label}
              </option>
            ))}
          </Select>
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

        <FormRow>
          <Label htmlFor="personal_id">الرقم القومي</Label>
          <Input
            type="text"
            id="personal_id"
            {...register("personal_id")}
            disabled
          />
        </FormRow>
      </FormSection>

      <ButtonContainer>
        <DeleteContainer>
          <Modal>
            <Modal.Open opens="delete-student">
              <ActionButton type="button" bgColor="#fa5451">
                <FaTrash />
                <span>حذف الطالب</span>
              </ActionButton>
            </Modal.Open>
            <Modal.Window name="delete-student">
              <DeleteStudent studentId={studentId} onCloseModal />
            </Modal.Window>
          </Modal>
        </DeleteContainer>
        <Buttons>
          <Button type="button" onClick={onCancel} disabled={isWorking}>
            إلغاء
          </Button>
          <SubmitButton type="submit" disabled={!isDirty || isWorking}>
            {isWorking ? "جاري الحفظ..." : "حفظ التغييرات"}
          </SubmitButton>
        </Buttons>
      </ButtonContainer>
    </FormContainer>
  );
}

export default UpdateStudentForm;
