import { MdAssignmentAdd } from "react-icons/md";
import styled from "styled-components";
import Button from "../../../ui/Button";
import ExaminationQuestionsPage from "./ExaminationQuestionsPage";
import QuestionsFilter from "./QuestionsFilter";
import QuestionsButtons from "./QuestionsButtons";
import { useSearchParams } from "react-router-dom";
import ExaminationFinishForm from "./ExaminationFinishForm";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 40px;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px;
  }
`;

const ExamLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;
const H3 = styled.h3``;
const Span = styled.span`
  font-size: 1rem;
  color: var(--color-grey-500);
`;
const Divider = styled.div``;
const P = styled.p`
  display: inline-block;
`;
const ExamDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #e7f3f5;
  box-shadow: var(--shadow-primary);
  padding: 50px 20px;

  border-radius: 10px;
  margin-bottom: 20px;
`;
function ExaminationContent({ timeLeft }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const questionNumber = searchParams.get("questionNumber") || 1;
  const isFinished = searchParams.get("finished") || false;
  console.log(isFinished);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Div>
      <ExamLogoDiv>
        <Divider style={{ display: "flex" }}>
          <MdAssignmentAdd
            style={{ fontSize: "4rem", color: "var(--color-red)" }}
          />
          <Divider>
            <H3>إختبار</H3>
            <Span>الإسبوع الثاني</Span>
          </Divider>
        </Divider>
        <Button
          variation="transparent"
          size="small"
          disabled={true}
          style={{
            boxShadow: "none",
            fontWeight: "700",
            fontSize: timeLeft < 180 ? "1.8rem" : "1.4rem",
            color: timeLeft < 180 ? "red" : "var(--color-secondary-darkblue)",
            padding: "0 10px",
            marginLeft: "auto",
            marginRight: "30%",
          }}
        >
          <P>الوقت المتبقي </P> {timeLeft}
        </Button>
      </ExamLogoDiv>
      <QuestionsFilter />
      <ExamDetailsDiv>
        {!isFinished ? (
          <ExaminationQuestionsPage
            examDetails={{
              questionText:
                "What is the main purpose of encapsulation in Object-Oriented Programming (OOP)?",

              answers: [
                {
                  A: "To hide the implementation details of a class",
                },
                {
                  B: "To make the code more readable",
                },
                {
                  C: "To improve the performance of the code",
                },
                {
                  D: "To make the code more secure",
                },
              ],
              correctAnswer: "B",
            }}
          />
        ) : (
          <ExaminationFinishForm />
        )}
      </ExamDetailsDiv>

      {!isFinished && <QuestionsButtons />}
    </Div>
  );
}

export default ExaminationContent;
