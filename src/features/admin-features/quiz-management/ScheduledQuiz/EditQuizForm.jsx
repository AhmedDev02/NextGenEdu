import { useEffect } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegTrashAlt } from "react-icons/fa";

import useShowQuiz from "./useShowQuiz";
import useEditQuiz from "./useEditQuiz";
import Spinner from "../../../../ui/amr/Spinner";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Empty from "../../../../ui/amr/Empty";

import {
  AddQuestionButton,
  AnswerInput,
  AnswerOption,
  AnswerOptionsGrid,
  ControlledContainer,
  ControlledInput,
  CreateContainer,
  DatePickerWrapper,
  Div,
  FormContainer,
  InfoBadge,
  Input,
  InputContainer,
  Label,
  P,
  QuestionBox,
  QuestionContent,
  QuestionSidebar,
  QuestionsSection,
  QuestionTextarea,
  RemoveButton,
  SchedulerContainer,
  SchedulerWrapper,
  Separator,
  SetCorrectButton,
  SubmitButton,
  Textarea,
  TimeLabel,
} from "../CreateQuiz/CreateQuizStyles";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function EditQuizForm() {
  const { quizId } = useParams();
  const { quiz, isPending: isFetching, error, refetch } = useShowQuiz(quizId);
  const { mutate: editQuiz, isPending: isEditing } = useEditQuiz();

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const startDate = watch("startDate");
  const duration = watch("duration");
  const questionDegree = watch("question_degree");
  const questionsCount = fields.length;
  const finalGrade = (questionsCount || 0) * (questionDegree || 0);
  const queryClient = useQueryClient();
  console.log(quiz);
  useEffect(() => {
    if (quiz?.data) {
      const quizData = quiz.data;
      const initialStartDate = new Date(
        quizData.date + "T" + quizData.start_time
      );
      const initialDuration = quizData.duration;
      const initialEndDate = new Date(
        initialStartDate.getTime() + initialDuration * 60 * 1000
      );

      const formattedData = {
        title: quizData.title,
        description: quizData.description,
        duration: initialDuration,
        question_degree: quizData.total_degree / quizData.questions.length,
        startDate: initialStartDate,
        endDate: initialEndDate,
        questions: quizData.questions.map((q) => ({
          text: q.question,
          correctAnswerIndex: q.answers
            .findIndex((a) => a.correct === 1)
            .toString(),
          options: q.answers.map((a) => ({ value: a.answer })),
        })),
      };
      reset(formattedData);
    }
  }, [quiz, reset]);

  useEffect(() => {
    if (startDate && duration > 0) {
      const durationInMilliseconds = duration * 60 * 1000;
      const newEndDate = new Date(startDate.getTime() + durationInMilliseconds);
      setValue("endDate", newEndDate);
    }
  }, [startDate, duration, setValue]);

  const onSubmit = (formData) => {
    const apiData = {
      course_id: quiz.data.course.id,

      title: formData.title,
      description: formData.description,
      duration: parseInt(formData.duration, 10),
      question_degree: parseInt(formData.question_degree, 10),
      total_degree: parseInt(finalGrade, 10),
      new_questions: formData.questions.map((question) => ({
        question: question.text,
        answers: question.options.map((option, index) => ({
          answer: option.value,
          is_correct:
            parseInt(question.correctAnswerIndex, 10) === index ? 1 : 0,
        })),
      })),
    };

    editQuiz(
      { quizId, updatedData: apiData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["quiz", quizId]);
          toast.success("تم تحديث الاختبار بنجاح");
        },
        onError: (err) => {
          toast.error(err.message || "حدث خطأ في تحديث الاختبار");
        },
      }
    );
  };
  if (isFetching) return <Spinner />;
  if (error)
    return <ErrorFallBack message="خطأ في عرض الاختبار" onRetry={refetch} />;
  if (!quiz || !quiz.data) return <Empty resourceName="معلومات" />;

  const isPublished = quiz?.data?.status === "published";
  const isWorking = isFetching || isEditing;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CreateContainer>
        <InputContainer>
          <Label htmlFor="title">عنوان الكويز</Label>
          <Input id="title" {...register("title")} disabled={isWorking} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="description">وصف الكويز</Label>
          <Textarea
            id="description"
            {...register("description")}
            disabled={isWorking}
          />
        </InputContainer>
        <ControlledContainer>
          <Div>
            <Label htmlFor="duration">المدة (بالدقائق)</Label>
            <ControlledInput
              id="duration"
              type="number"
              {...register("duration")}
              disabled={isWorking || isPublished}
            />
          </Div>
          <Div>
            <Label htmlFor="question_degree">درجة السؤال</Label>
            <ControlledInput
              id="question_degree"
              type="number"
              step="0.5"
              {...register("question_degree")}
              disabled={isWorking}
            />
          </Div>
          <Div>
            <Label>عدد الأسئلة</Label>
            <ControlledInput value={questionsCount} readOnly />
          </Div>
          <Div>
            <Label>الدرجة النهائية</Label>
            <ControlledInput value={finalGrade} readOnly />
          </Div>
        </ControlledContainer>
        <SchedulerWrapper>
          <Label>
            جدولة الكويز {isPublished && "(لا يمكن تعديله بعد النشر)"}
          </Label>
          <SchedulerContainer>
            <DatePickerWrapper>
              <TimeLabel>يبدأ في</TimeLabel>
              <Controller
                control={control}
                name="startDate"
                disabled={isPublished}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={5}
                    timeCaption="الوقت"
                    timeFormat="h:mm aa"
                    dateFormat="h:mm aa"
                    disabled={isPublished}
                  />
                )}
              />
            </DatePickerWrapper>
            <Separator />
            <DatePickerWrapper>
              <TimeLabel>ينتهي في</TimeLabel>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={5}
                    timeCaption="الوقت"
                    timeFormat="h:mm aa"
                    dateFormat="h:mm aa"
                    readOnly
                    disabled={isPublished}
                  />
                )}
              />
            </DatePickerWrapper>
            <Separator />
            <DatePickerWrapper>
              <TimeLabel> التاريخ</TimeLabel>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => {
                      const startTime = new Date(watch("startDate"));
                      const newStartDate = new Date(date);
                      newStartDate.setHours(
                        startTime.getHours(),
                        startTime.getMinutes()
                      );
                      setValue("startDate", newStartDate);
                    }}
                    dateFormat="yyyy/MM/dd"
                    disabled={isPublished}
                  />
                )}
              />
            </DatePickerWrapper>
          </SchedulerContainer>
        </SchedulerWrapper>

        <QuestionsSection>
          <Label as="h2">الأسئلة</Label>
          {fields.map((field, index) => (
            <QuestionBox key={field.id}>
              <QuestionContent>
                <QuestionTextarea
                  placeholder={`نص السؤال ${index + 1}...`}
                  {...register(`questions.${index}.text`)}
                />
                <AnswerOptionsGrid>
                  {field.options.map((option, optionIndex) => (
                    <AnswerOption key={optionIndex}>
                      <SetCorrectButton
                        type="button"
                        isCorrect={
                          watch(`questions.${index}.correctAnswerIndex`) ==
                          optionIndex
                        }
                        onClick={() =>
                          setValue(
                            `questions.${index}.correctAnswerIndex`,
                            optionIndex.toString()
                          )
                        }
                      >
                        {String.fromCharCode(65 + optionIndex)}
                      </SetCorrectButton>
                      <AnswerInput
                        placeholder={`إجابة ${optionIndex + 1}`}
                        {...register(
                          `questions.${index}.options.${optionIndex}.value`
                        )}
                      />
                    </AnswerOption>
                  ))}
                </AnswerOptionsGrid>
              </QuestionContent>
              <QuestionSidebar>
                <InfoBadge color="#ef4444">{index + 1}</InfoBadge>
                <RemoveButton type="button" onClick={() => remove(index)}>
                  <FaRegTrashAlt />
                </RemoveButton>
              </QuestionSidebar>
            </QuestionBox>
          ))}
          <AddQuestionButton
            type="button"
            onClick={() =>
              append({
                text: "",
                options: [
                  { value: "" },
                  { value: "" },
                  { value: "" },
                  { value: "" },
                ],
                correctAnswerIndex: "0",
              })
            }
          >
            + إضافة سؤال جديد
          </AddQuestionButton>
        </QuestionsSection>

        <SubmitButton type="submit" disabled={isWorking}>
          {isEditing ? "جاري الحفظ..." : "حفظ التعديلات"}
        </SubmitButton>
      </CreateContainer>
    </FormContainer>
  );
}

export default EditQuizForm;
