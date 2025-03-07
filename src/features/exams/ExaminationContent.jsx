import { MdAssignmentAdd } from "react-icons/md";
import styled from "styled-components";
import Button from "../../ui/Button";
import ExaminationQuestionsPage from "./ExaminationQuestionsPage";
import QuestionsFilter from "./QuestionsFilter";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 1000px;
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
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
function ExaminationContent({ timeLeft }) {
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
        <ExaminationQuestionsPage />
      </ExamDetailsDiv>
      <QuestionsFilter />
    </Div>
  );
}

export default ExaminationContent;
