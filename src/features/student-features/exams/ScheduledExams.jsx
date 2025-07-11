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

function ScheduledExams({ scheduledExams }) {
  return (
    <Div>
      <ExamLogoDiv>
        <MdAssignmentAdd
          style={{ fontSize: "4rem", color: "var(--color-red)" }}
        />
        <Divider>
          <H3>إختبار</H3>
          <Span>{scheduledExams?.description}</Span>
          <Span>{scheduledExams?.date} </Span>
          <Span> الدرجة العظمى : {scheduledExams?.total_degree} </Span>
        </Divider>
      </ExamLogoDiv>
      <Button
        variation="transparent"
        size="small"
        disabled={true}
        style={{ boxShadow: "none", fontWeight: "700", fontSize: "1.4rem" }}
      >
        يبدأ في تمام الساعة <Span>{scheduledExams?.start_time} </Span>
      </Button>
    </Div>
  );
}

export default ScheduledExams;
