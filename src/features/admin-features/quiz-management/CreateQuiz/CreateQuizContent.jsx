import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  min-width: 80%;
  margin: auto;
  border-radius: 12px;
  padding-bottom: 50px;
  font-family: "Changa", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 18px;
  box-shadow: var(--shadow-primary);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  align-items: flex-start;
`;
const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 80%;
  margin: auto;
  border-radius: 12px;
  /* padding-bottom: 50px; */
  font-family: "Changa", sans-serif;
`;

const ControlledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 10px;
  width: 100%;
  min-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ControlledInput = styled.input`
  min-width: 40%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const CreateQuizContent = () => {
  const [questions, setQuestions] = useState(10);
  const [questionDegree, setQuestionDegree] = useState(2);
  const [time, setTime] = useState(10);

  const handleQuestionChange = (e) => {
    setQuestions(Math.max(5, parseInt(e.target.value, 10)));
  };

  const handleDegreeChange = (e) => {
    setQuestionDegree(Math.max(0.5, parseFloat(e.target.value)));
  };

  const handleTimeChange = (e) => {
    setTime(parseInt(e.target.value, 10));
  };

  const finalGrade = questions * questionDegree;

  return (
    <CreateContainer>
      <InputContainer>
        <Label for="title">الخبر</Label>
        <Input
          name="title"
          // value={details}
          // onChange={(e) => setDetails(e.target.value)}
          placeholder="أضف تفاصيل الخبر لتوضيح المعلومات للطلاب بشكل شامل ودقيق"
        />
      </InputContainer>
      <InputContainer>
        <Label for="description">الخبر</Label>
        <Textarea
          name="description"
          // value={details}
          // onChange={(e) => setDetails(e.target.value)}
          placeholder="أضف تفاصيل الخبر لتوضيح المعلومات للطلاب بشكل شامل ودقيق"
        />
      </InputContainer>
      <ControlledContainer>
        <Div>
          <Label for="time">تحديد الوقت</Label>
          <ControlledInput
            name="time"
            type="number"
            value={time}
            onChange={handleTimeChange}
            min="0"
          />
        </Div>
        <Div>
          <Label for="QuestionsNumber">عدد الأسئلة</Label>
          <ControlledInput
            name="QuestionsNumber"
            type="number"
            value={questions}
            onChange={handleQuestionChange}
            min="5"
            step="5"
          />
        </Div>

        <Div>
          <Label for="grade">درجة السؤال</Label>
          <ControlledInput
            name="grade"
            type="number"
            value={questionDegree}
            onChange={handleDegreeChange}
            min="0.5"
            step="0.5"
          />
        </Div>
        <Div>
          <Label for="final">الدرجة النهائية</Label>
          <ControlledInput
            name="final"
            value={finalGrade || "حدد عدد الأسئلة"}
            readonly
          ></ControlledInput>
        </Div>
      </ControlledContainer>
    </CreateContainer>
  );
};

export default CreateQuizContent;
