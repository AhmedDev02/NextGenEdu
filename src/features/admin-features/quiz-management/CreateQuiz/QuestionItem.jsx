import {
  QuestionBox,
  QuestionContent,
  QuestionTextarea,
  AnswerOptionsGrid,
  AnswerOption,
  SetCorrectButton,
  AnswerInput,
  QuestionSidebar,
  RemoveButton,
} from "./CreateQuizStyles";
import { FaRegTrashAlt } from "react-icons/fa";

const QuestionItem = ({ field, index, remove, register, watch, setValue }) => {
  const correctAnswer = watch(`questions.${index}.correctAnswerIndex`);
  return (
    <QuestionBox>
      <QuestionContent>
        <QuestionTextarea
          placeholder={`نص السؤال ${index + 1}...`}
          {...register(`questions.${index}.text`, {
            required: "يجب كتابة السؤال",
          })}
        />
        <AnswerOptionsGrid>
          {field.options.map((option, optionIndex) => (
            <AnswerOption key={optionIndex}>
              <SetCorrectButton
                type="button"
                isCorrect={correctAnswer === optionIndex}
                onClick={() =>
                  setValue(`questions.${index}.correctAnswerIndex`, optionIndex)
                }
              >
                {String.fromCharCode(65 + optionIndex)}
              </SetCorrectButton>
              <AnswerInput
                placeholder={`إجابة ${optionIndex + 1}`}
                {...register(
                  `questions.${index}.options.${optionIndex}.value`,
                  { required: "الاجابة يجب الا تكون فارغة" }
                )}
              />
            </AnswerOption>
          ))}
        </AnswerOptionsGrid>
      </QuestionContent>
      <QuestionSidebar>
        <RemoveButton type="button" onClick={() => remove(index)}>
          <FaRegTrashAlt />
        </RemoveButton>
      </QuestionSidebar>
    </QuestionBox>
  );
};

export default QuestionItem;
