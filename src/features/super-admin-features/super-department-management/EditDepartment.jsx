import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useGetDepartment from "./useGetDepartment";
import useEditDepartment from "./useEditDepartment";
import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import Empty from "../../../ui/amr/Empty";
import {
  ButtonsContainer,
  ConfirmButton,
  Container,
  DeleteDepartment,
  EditButton,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  InputsContainer,
  InputWrapper,
  Label,
  StyledIcon,
} from "./Styles";
import Modal from "../../../ui/amr/Modal";
import DeleteDepartmentContent from "./DeleteDepartmentContent";

const EditDepartment = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { departmentId } = useParams();
  const {
    data: departmentData,
    isPending,
    error,
    refetch,
  } = useGetDepartment(departmentId);
  const { mutate, isPending: isUpdating } = useEditDepartment();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (departmentData?.data) {
      reset({
        name: departmentData.data.name,
        description: departmentData.data.description || "",
      });
    }
  }, [departmentData, reset]);

  if (isPending) return <Spinner />;
  if (error) return <ErrorFallBack message={error.message} onRetry={refetch} />;
  if (!departmentData?.data) return <Empty resourceName="معلومات القسم" />;

  const handleEditToggle = () => {
    if (isEditing) {
      reset({
        name: departmentData.data.name,
        description: departmentData.data.description || "",
      });
    }
    setIsEditing((prev) => !prev);
  };

  const onSubmit = (formData) => {
    mutate(
      { departmentId, updatedData: formData },
      {
        onSuccess: () => {
          toast.success("تم تحديث بيانات القسم بنجاح");
          queryClient.invalidateQueries({
            queryKey: ["department", departmentId],
          });
          setIsEditing(false);
        },
        onError: (err) => {
          toast.error(err.message || "فشل تحديث بيانات القسم");
        },
      }
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <InputGroup>
            <Label htmlFor="dept-name">اسم القسم</Label>
            <InputWrapper>
              <Input
                id="dept-name"
                disabled={!isEditing || isUpdating}
                {...register("name", { required: "اسم القسم مطلوب" })}
              />
              <StyledIcon />
            </InputWrapper>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="dept-description">وصف القسم</Label>
            <InputWrapper>
              <Input
                id="dept-description"
                disabled={!isEditing || isUpdating}
                {...register("description", {
                  required: "وصف القسم مطلوب",
                })}
              />
            </InputWrapper>
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </InputGroup>
        </InputsContainer>

        <ButtonsContainer>
          <EditButton type="button" onClick={handleEditToggle}>
            {isEditing ? "إلغاء" : "تعديل"}
          </EditButton>
          {isEditing && (
            <ConfirmButton type="submit" disabled={isUpdating || !isDirty}>
              {isUpdating ? "جاري الحفظ..." : "حفظ التغييرات"}
            </ConfirmButton>
          )}
        </ButtonsContainer>
      </Form>
      <Modal>
        <Modal.Open opens="delete-dept">
          <DeleteDepartment>حذف القسم</DeleteDepartment>
        </Modal.Open>
        <Modal.Window name="delete-dept">
          <DeleteDepartmentContent departmentId={departmentId} onCloseModal />
        </Modal.Window>
      </Modal>
    </Container>
  );
};

export default EditDepartment;
