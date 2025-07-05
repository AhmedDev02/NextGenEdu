import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuizScheduler from "./QuizScheduler";
import QuestionsBuilder from "./QuestionsBuilder";
import {
  FormContainer,
  CreateContainer,
  InputContainer,
  Label,
  Input,
  Textarea,
  P,
  ControlledContainer,
  Div,
  ControlledInput,
  SubmitButton,
} from "./CreateQuizStyles";
import "react-datepicker/dist/react-datepicker.css";
import useCreateQuiz from "./useCreateQuiz";

const formatTime = (date) => {
  return date.toTimeString().split(" ")[0];
};

const formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

const CreateQuizContent = () => {
  const { id } = useParams();

  const { mutate: createQuizMutation, isCreating } = useCreateQuiz();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      duration: 10,
      question_degree: 2,
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 10 * 60000),
      questions: [],
    },
  });

  const questionDegree = watch("question_degree");
  const questionsCount = watch("questions").length;
  const finalGrade = (questionsCount || 0) * (questionDegree || 0);
  const durationInMinutes = watch("duration");
  const startTime = watch("startDate");

  useEffect(() => {
    if (startTime && durationInMinutes > 0) {
      const durationInMs = durationInMinutes * 60 * 1000;
      const newEndDate = new Date(startTime.getTime() + durationInMs);
      setValue("endDate", newEndDate, { shouldValidate: true });
    }
  }, [startTime, durationInMinutes, setValue]);
  const onSubmit = (formData) => {
    const data = {
      course_id: id,
      title: formData.title,
      description: formData.description,
      total_degree: finalGrade,
      date: formatDate(formData.startDate),
      start_time: formatTime(formData.startDate),
      duration: formData.duration,
      question_degree: formData.question_degree,
      new_questions: formData.questions.map((question) => ({
        question: question.text,
        answers: question.options.map((option, index) => ({
          answer: option.value,
          is_correct: index === question.correctAnswerIndex ? 1 : 0,
        })),
      })),
    };

    createQuizMutation(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <CreateContainer>
        <InputContainer>
          <Label htmlFor="title">عنوان الكويز</Label>
          <Input
            id="title"
            placeholder="ادخل عنواناً واضحاً للكويز"
            {...register("title", { required: "يجب كتابة عنوان للكويز" })}
            disabled={isCreating}
          />
          {errors.title && <P>{errors.title.message}</P>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="description">وصف الكويز</Label>
          <Textarea
            id="description"
            placeholder="أضف وصفاً موجزاً يوضح محتوى الكويز وأهدافه"
            {...register("description", { required: "يجب كتابة وصف للكويز" })}
            disabled={isCreating}
          />
          {errors.description && <P>{errors.description.message}</P>}
        </InputContainer>
        <ControlledContainer>
          <Div>
            <Label htmlFor="duration">تحديد الوقت (بالدقائق)</Label>
            <ControlledInput
              id="duration"
              type="number"
              min="1"
              {...register("duration", { required: "يجب تحديد وقت الاختبار" })}
              disabled={isCreating}
            />
            {errors.duration && <P>{errors.duration.message}</P>}
          </Div>
          <Div>
            <Label htmlFor="question_degree">درجة السؤال</Label>
            <ControlledInput
              id="question_degree"
              type="number"
              min="0.5"
              step="0.5"
              {...register("question_degree", {
                required: "يجب اختيار درجة لكل سؤال",
              })}
              disabled={isCreating}
            />
            {errors.question_degree && <P>{errors.question_degree.message}</P>}
          </Div>
          <Div>
            <Label htmlFor="questions_count">عدد الأسئلة</Label>
            <ControlledInput
              id="questions_count"
              value={questionsCount}
              readOnly
            />
          </Div>
          <Div>
            <Label htmlFor="final_grade">الدرجة النهائية</Label>
            <ControlledInput id="final_grade" value={finalGrade} readOnly />
          </Div>
          <QuizScheduler
            control={control}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        </ControlledContainer>
        <QuestionsBuilder
          control={control}
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <SubmitButton type="submit" disabled={isCreating}>
          {isCreating ? "جاري الإنشاء..." : "!نشر"}
        </SubmitButton>
      </CreateContainer>
    </FormContainer>
  );
};

export default CreateQuizContent;
