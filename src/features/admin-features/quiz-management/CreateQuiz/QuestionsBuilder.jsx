import { useFieldArray } from "react-hook-form";
import QuestionItem from "./QuestionItem";
// 👇 This is the corrected line
import { QuestionsSection, AddQuestionButton } from "./CreateQuizStyles";

const QuestionsBuilder = ({ control, register, watch, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const addNewQuestion = () => {
    append({
      text: "",
      options: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }],
      correctAnswerIndex: 0,
    });
  };

  return (
    <QuestionsSection>
      {fields.map((field, index) => (
        <QuestionItem
          key={field.id}
          field={field}
          index={index}
          remove={remove}
          register={register}
          watch={watch}
          setValue={setValue}
        />
      ))}
      <AddQuestionButton type="button" onClick={addNewQuestion}>
        + إضافة سؤال جديد
      </AddQuestionButton>
    </QuestionsSection>
  );
};

export default QuestionsBuilder;
