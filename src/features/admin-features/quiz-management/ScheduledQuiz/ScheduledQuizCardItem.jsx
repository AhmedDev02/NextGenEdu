import styled from "styled-components";
import { MdAssignmentAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";
import Modal from "../../../../ui/amr/Modal";
import DeleteQuiz from "./DeleteQuiz";
import { CiEdit } from "react-icons/ci";

const StyledCardContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin: auto;
  margin-top: 20px;
  width: 70%;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  @media (max-width: 760px) {
    width: 95%;
  }
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  margin-top: 10px;
  gap: 1rem;
`;

const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  min-width: 0;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  background: var(--color-primary-green);
  border-radius: 10px;
  color: white;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;

  h3,
  h5 {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: var(--color-grey-200);
  display: flex;
  outline: none;
  border: none;
  border-radius: 1rem;
  & svg {
    font-size: 2rem;
  }
  &:focus {
    outline: none;
  }
`;

function ScheduledQuizCardItem({ quiz }) {
  const navigate = useNavigate();
  const {
    date,
    start_time,
    title,
    course: { name },
    id: quizId,
    description,
  } = quiz;
  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(quizId);
  return (
    <StyledCardContainer>
      <h3>{formattedDate}</h3>
      <StyledDetailsContainer>
        <StyledRightSection>
          <h4>{start_time}</h4>
          <StyledIcon>
            <MdAssignmentAdd style={{ fontSize: "40px" }} />
          </StyledIcon>
          <StyledTitle>
            <h3>{title}</h3>
            <h5 style={{ color: "#a2a3a4" }}>{description}</h5>
            <h5 style={{ color: "#8ea7bf" }}>{name}</h5>
          </StyledTitle>
        </StyledRightSection>
        <ButtonsContainer>
          <Button onClick={() => navigate(`quiz-details/${quizId}`)}>
            <IoEyeOutline />
          </Button>
          <Modal>
            <Modal.Open opens="delete-quiz">
              <Button>
                <IoTrashOutline />
              </Button>
            </Modal.Open>
            <Modal.Window name="delete-quiz">
              <DeleteQuiz quizId={quizId} onCloseModal />
            </Modal.Window>
          </Modal>
          <Button onClick={() => navigate(`edit-quiz/${quizId}`)}>
            <CiEdit />
          </Button>
        </ButtonsContainer>
      </StyledDetailsContainer>
    </StyledCardContainer>
  );
}

export default ScheduledQuizCardItem;
