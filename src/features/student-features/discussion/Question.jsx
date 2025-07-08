import styled from "styled-components";
import Button from "../../../ui/Button";
import QuestionStatus from "./QuestionStatus";
import QuestionDetails from "./QuestionDetails";
import { FiThumbsUp } from "react-icons/fi";
import { FaSpinner, FaTrash } from "react-icons/fa";
import QuestionModal from "./QuestionModal";
import { getStudentYear, getTimeFormatted } from "../../../utils/helpers";
import { useLikeQuestion } from "./useLikeQuestion";
import CustomFaSpinner from "../../../ui/tharwat/CustomFaSpinner";

const IMAGE_URL = "https://nextgenedu-database.azurewebsites.net/storage/";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

const QuestionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 72%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: ${({ isUser }) => isUser && "space-between"};
    gap: 10px;
    min-height: 30px;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const Span = styled.span`
  display: inline-block;
  margin: 0 10px;
`;
const Break = styled.div`
  width: 80%;
  border: 1px solid var(--color-secondary-darkblue);
  margin: 5px auto;
`;

function Question({ interested, isUser, body, questionDetails }) {
  const { mutate, isPending } = useLikeQuestion(); // Destructure mutate from the hook
  const handleLike = (event) => {
    event.stopPropagation(); // prevents bubbling up to parent
    mutate({ questionID: questionDetails._id });
  };
  return (
    <Div>
      <QuestionsDiv>
        <QuestionDetails
          level={getStudentYear(questionDetails.user.semester)}
          name={questionDetails.user.name}
          date={getTimeFormatted(questionDetails.createdAt)}
          question={body}
          avatar={` ${questionDetails?.user?.avatar}`}
        />
        <QuestionStatus
          likes={questionDetails.likes}
          answers={questionDetails.answers}
          watch={questionDetails.views}
        />
      </QuestionsDiv>
      <ButtonsDiv isUser={isUser}>
        {isUser && <QuestionModal questionID={questionDetails._id} />}
        <Button
          variation="secondary"
          size="custom"
          paddingLeftRight={isUser ? "208px" : "258px"}
          paddingTopBottom="10px"
          style={{ borderRadius: "15px", border: "2px white solid" }}
          navigateTo={`/discussion/${questionDetails._id}`}
          phonePadding={isUser ? "10px 30px" : "10px 90px"}
          tabPadding={!isUser ? "15px 267px" : "10px 200px"}
        >
          عرض الإجابة
        </Button>

        {!isPending ? (
          <Button
            variation={interested ? "primary" : "transparent"}
            size="custom"
            paddingLeftRight="65px"
            paddingTopBottom="17px"
            phonePadding={isUser ? "10px 30px" : "10px 80px"}
            tabPadding={"20px 65px"}
            onClick={handleLike}
          >
            <Span>مهتم</Span>
            <FiThumbsUp />
          </Button>
        ) : (
          <CustomFaSpinner />
        )}
      </ButtonsDiv>

      <Break />
    </Div>
  );
}

export default Question;
