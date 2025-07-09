import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { PiDoorDuotone } from "react-icons/pi";

import Spinner from "../../../ui/amr/Spinner";
import ErrorFallBack from "../../../ui/amr/ErrorFallBack";
import useGetBuildings from "../super-buildings/useGetBuildings";
import useCreateHall from "./useCreateHall";

const FormPageContainer = styled.div`
  width: 100rem;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }

  &:disabled {
    background-color: #e5e7eb;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px #dcfce7;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #10b981;
  color: white;
  padding: 0.8rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #059669;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const CreateHall = () => {
  const {
    data: buildingsData,
    isPending: isLoadingBuildings,
    error: errorBuildings,
  } = useGetBuildings();

  const { create, isCreatingHall } = useCreateHall();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    create(data, {
      onSuccess: () => {
        toast.success("تم إنشاء القاعة بنجاح");
        reset();
      },
      onError: (err) => toast.error(err.message),
    });
  };

  const isWorking = isLoadingBuildings || isCreatingHall;

  if (isLoadingBuildings) return <Spinner />;
  if (errorBuildings) return <ErrorFallBack message={errorBuildings.message} />;

  return (
    <FormPageContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>
          <PiDoorDuotone />
          <span>إنشاء قاعة جديدة</span>
        </FormTitle>

        <FormRow>
          <Label htmlFor="name">اسم القاعة</Label>
          <Input
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", { required: "يجب كتابة اسم القاعة" })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="code">كود القاعة</Label>
          <Input
            type="text"
            id="code"
            disabled={isWorking}
            {...register("code", { required: "يجب كتابة كود القاعة" })}
          />
          {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="floor">الطابق</Label>
          <Input
            type="number"
            id="floor"
            disabled={isWorking}
            {...register("floor", {
              required: "يجب كتابة الطابق المتواجد به القاعة",
              valueAsNumber: true,
            })}
          />
          {errors.floor && <ErrorMessage>{errors.floor.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="building_id">المبنى</Label>
          <Select
            id="building_id"
            disabled={isWorking}
            {...register("building_id", {
              required: "يجب اختيار المبنى",
              valueAsNumber: true,
            })}
          >
            <option value="">-- اختر المبنى --</option>
            {buildingsData?.data?.map((building) => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </Select>
          {errors.building_id && (
            <ErrorMessage>{errors.building_id.message}</ErrorMessage>
          )}
        </FormRow>

        <ButtonContainer>
          <SubmitButton type="submit" disabled={isWorking}>
            {isWorking ? "جاري الإنشاء..." : "إنشاء القاعة"}
          </SubmitButton>
        </ButtonContainer>
      </FormContainer>
    </FormPageContainer>
  );
};

export default CreateHall;
