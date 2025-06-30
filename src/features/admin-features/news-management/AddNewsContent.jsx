import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MdOutlineSubtitles } from "react-icons/md";
import { useCourses } from "../dashboard/useCourses";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import { useCreateAnnouncement } from "./useCreateAnnouncement";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  height: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 4rem;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.label`
  font-weight: bold;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TitleInput = styled.input`
  border: none;
  box-shadow: var(--shadow-primary);
  border-radius: 1rem;
  padding: 1.2rem 4rem 1.2rem 1.5rem;
  width: 100%;

  &:active,
  &:focus {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
`;

const Icon = styled(MdOutlineSubtitles)`
  position: absolute;
  right: 1rem;
  top: ${({ type }) => (type === "textarea" ? "22%" : "50%")};
  transform: translateY(-50%);
  font-size: 2rem;
  color: #888;
`;

const ContentContainer = styled(TitleContainer)``;

const ContentInput = styled.textarea`
  width: 100%;
  border: none;
  box-shadow: var(--shadow-primary);
  border-radius: 1rem;
  padding: 1.2rem 4rem 1.2rem 1.5rem;
  min-height: 10rem;
  max-height: 30rem;
  resize: vertical;
  font-family: inherit;

  &:active,
  &:focus {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }
`;

const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

const Select = styled.select`
  padding: 1.2rem 1.5rem;
  border: none;
  box-shadow: var(--shadow-primary);
  width: 100%;
  border-radius: 1rem;
  background-color: white;

  &:focus,
  &:active {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
`;

const CourseContainer = styled(YearContainer)``;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: auto;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  background: var(--color-primary-green);
  border: none;
  border-radius: 1rem;
  color: white;
  padding: 1.2rem 3rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
  }
`;
const P = styled.p`
  color: red;
`;
const AddNewsContent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { courses, error, isPending, refetch } = useCourses();
  const { mutate, isPending: isCreating } = useCreateAnnouncement();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallback
        message="خطأ في تحميل الصفحه يرجي المحاولة مجددا"
        onRetry={refetch}
      />
    );
  }
  const onSubmit = (data) => {
    mutate(
      {
        course_id: Number(data.course),
        title: data.title,
        body: data.body,
      },
      {
        onSuccess: () => {
          toast.success("تم اضافة الخبر بنجاح");
          queryClient.invalidateQueries(["announcements"]);
          reset();
          navigate("/admin/news");
        },
        onError: () => {
          toast.error("حدث خطأ اثناء اضافة الخبر:");
        },
      }
    );
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <FormContainer>
          <TitleContainer>
            <Title htmlFor="title">عنوان الخبر</Title>
            <InputWrapper>
              <Icon type="input" />
              <TitleInput
                id="title"
                type="text"
                placeholder="قم بإضافة عنوان واضح ومباشر..."
                {...register("title", {
                  required: "يجب اختيار عنوان الخبر اولا",
                })}
              />
            </InputWrapper>
            {errors.title && <P>{errors.title.message}</P>}
          </TitleContainer>

          <ContentContainer>
            <Title htmlFor="body">محتوي الخبر</Title>
            <InputWrapper>
              <Icon type="textarea" />
              <ContentInput
                id="body"
                placeholder="أضف تفاصيل الخبر..."
                {...register("body", {
                  required: "يجب اختيار محتوي الخبر اولا",
                })}
              />
            </InputWrapper>
            {errors.body && <P>{errors.body.message}</P>}
          </ContentContainer>

          <DetailsContainer>
            <YearContainer>
              <Title htmlFor="semester">الفرقة الدراسية</Title>
              <Select
                id="semester"
                {...register("semester", {
                  required: "يجب اختيار الفرقة اولا",
                })}
              >
                <option value="" disabled selected>
                  -- اختر الفرقة --
                </option>
                {courses?.data?.map((course) => (
                  <option value={course.semester.id} key={course.semester.id}>
                    {course.semester.name}
                  </option>
                ))}
              </Select>
              {errors.semester && <P>{errors.semester.message}</P>}
            </YearContainer>

            <CourseContainer>
              <Title htmlFor="course">المادة الدراسية</Title>
              <Select
                id="course"
                {...register("course", {
                  required: "يجب اختيار المادة الدراسية اولا",
                })}
              >
                <option value="" disabled selected>
                  -- اختر المادة --
                </option>
                {courses?.data?.map((course) => (
                  <option value={course.id} key={course.id}>
                    {course.name}
                  </option>
                ))}
              </Select>
              {errors.course && <P>{errors.course.message}</P>}
            </CourseContainer>
          </DetailsContainer>

          <ButtonContainer>
            <Button disabled={isCreating} type="submit">
              {isCreating ? "يتم النشر" : "انشر !"}
            </Button>
          </ButtonContainer>
        </FormContainer>
      </form>
    </Container>
  );
};

export default AddNewsContent;
