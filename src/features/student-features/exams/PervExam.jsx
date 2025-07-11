import styled from "styled-components";
import Button from "../../../ui/Button";
import { MdAssignmentAdd } from "react-icons/md";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--shadow-primary);
  width: 100%;
`;
const ExamLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const H3 = styled.h3``;

const Span = styled.span`
  font-size: 1rem;
  display: block;
  color: var(--color-grey-500);
`;
const Divider = styled.div``;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;
`;
function PervExam({ finishedExam }) {
  return (
    <Div>
      <ExamLogoDiv>
        <MdAssignmentAdd
          style={{ fontSize: "4rem", color: "var(--color-red)" }}
        />
        <Divider>
          <H3>إختبار</H3>
          <Span>{finishedExam.description}</Span>
          <Span>{finishedExam.date} </Span>
        </Divider>
      </ExamLogoDiv>
      <ButtonDiv>
        <Button
          variation="transparent"
          size="small"
          disabled={true}
          style={{ boxShadow: "none", fontWeight: "700", fontSize: "1.4rem" }}
        >
          إنتهى
        </Button>
        <Button
          variation="primary"
          size="custom"
          paddingLeftRight="4px"
          style={{ boxShadow: "none", fontWeight: "700", fontSize: "1.4rem" }}
          navigateTo={`/exam/answers/${finishedExam?.id}`}
        >
          أظهر الإجابات
        </Button>
      </ButtonDiv>
    </Div>
  );
}

export default PervExam;
