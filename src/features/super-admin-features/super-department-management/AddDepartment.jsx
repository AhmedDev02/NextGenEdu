import { useForm } from "react-hook-form";
import {
  ButtonsContainer,
  ConfirmButton,
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  InputsContainer,
  InputWrapper,
  Label,
  StyledIcon,
} from "./Styles";
import useCreateDepartment from "./useCreateDepartment";
import toast from "react-hot-toast";

const AddDepartment = () => {
  const { mutate: createDept, isPending: isCreating } = useCreateDepartment();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newDepartment = {
      name: data.name,
      description: data.description,
    };
    createDept(newDepartment, {
      onSuccess: () => {
        toast.success("تم اضافة قسم جديد بنجاح");
        reset();
      },
      onError: (err) => {
        toast.error(err.message || "خطأ في اضافة القسم");
      },
    });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <InputGroup>
            <Label htmlFor="dept-name">اسم القسم</Label>
            <InputWrapper>
              <Input
                placeholder="الرجاء كتابة اسم القسم بالكامل"
                id="dept-name"
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
                placeholder="الرجاء كتابة وصف  يعبر عن القسم بإختصار"
                id="dept-description"
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
          <ConfirmButton type="submit">
            {isCreating ? "جاري الإضافة..." : "إضافة القسم"}
          </ConfirmButton>
        </ButtonsContainer>
      </Form>
    </Container>
  );
};

export default AddDepartment;
