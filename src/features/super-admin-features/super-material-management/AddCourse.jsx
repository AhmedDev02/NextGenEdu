import { useForm, useFieldArray } from "react-hook-form";
import { FaBook, FaBarcode, FaAlignLeft, FaLayerGroup } from "react-icons/fa";
import useGetDepartments from "../super-department-management/useGetDepartments";
import useCreateCourse from "./useCreateCourse";
import DetailGroupItem from "./DetailGroupItem";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
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

const AddCourse = () => {
  const { mutate, isPending: isCreating } = useCreateCourse();
  const { data: departmentsResponse, isPending: isPendingDepartments,refetch,error } =
    useGetDepartments();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", code: "", description: "", details: [] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "details",
  });

  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      code: data.code,
      description: data.description,
      details: data.details.map((detail) => ({
        department: detail.department,
        semester: detail.semester,
        teachers: detail.teachers.map((t) => t.id),
      })),
    };

    mutate(formattedData, {
      onSuccess: () => {
        toast.success("تم اضافة المادة بنجاح");
        reset();
      },
      onError: (err) => {
        const errorMessage =
          err.response?.data?.message || "خطأ في اضافة المادة";
        toast.error(errorMessage);
      },
    });
  };

  if (isPendingDepartments) return <Spinner />;
  if(error) {
    console.log(error.message)
    return <ErrorFallBack message={error.message || "خطأ في عرض المعلومات"} onRetry={refetch} />
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>إنشاء مادة دراسية جديدة</Title>
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
          <FaLayerGroup /> إضافة مجموعة تفاصيل جديدة (قسم/فرقة/مدرسين)
        </Button>
        <ButtonContainer>
          <Button type="submit" className="primary" disabled={isCreating}>
            {isCreating ? "جاري الحفظ..." : "حفظ المادة"}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddCourse;
