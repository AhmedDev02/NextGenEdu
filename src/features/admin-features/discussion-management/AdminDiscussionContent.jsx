import styled from "styled-components";
import { useReadQuestions } from "../../student-features/discussion/useReadQuestions";
import DiscussionHeader from "../../student-features/discussion/DiscussionHeader";
import Question from "../../student-features/discussion/Question";
import Spinner from "../../../ui/amr/Spinner";
import { useUser } from "../../../hooks/useUser";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;

function AdminDiscussionContent() {
  const { questions, isLoading, id } = useReadQuestions();
  const data = questions?.questions ? questions?.questions : [];
  const { user } = useUser();
  if (isLoading) return <Spinner />;
  return (
    <Div>
      <DiscussionHeader
        isTeacherFromAdmin={user?.role === "Teacher"}
        questionsNum={data.length}
      />

      {data.map((item, index) => {
        return (
          <Question
            key={index}
            isUser={item.user.id == id}
            interested={item.user.liked}
            body={item.body}
            questionDetails={item}
          />
        );
      })}
    </Div>
  );
}

export default AdminDiscussionContent;
