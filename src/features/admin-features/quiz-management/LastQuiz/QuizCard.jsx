import styled from "styled-components";
import { MdAssignmentAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const StyledCardContainer = styled.div`
  box-shadow: var(--shadow-primary, 0 4px 6px rgba(0, 0, 0, 0.1));
  margin: 20px auto;
  width: 95%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  min-width: 0;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 0;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  background: var(--color-primary-green, #10b981);
  border-radius: 10px;
  color: white;

  svg {
    font-size: 40px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;

const CardHeading = styled.h3`
  font-size: 1.6rem;
  color: #6b7280;
  margin-bottom: 10px;
`;

const QuizTime = styled.h4`
  font-size: 1.6rem;
  color: #374151;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding-bottom: 10px;
    width: 100%;
  }
`;

const QuizTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const QuizDescription = styled.p`
  font-size: 1.6rem;
  color: #a4a5a5;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CourseName = styled.h5`
  font-size: 1.4rem;
  color: #4f6895;
  font-weight: 500;
  margin: 0;
`;

const StyledButton = styled.button`
  background:var(--color-primary-green);
  color: white;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  outline: none;
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

function QuizCard({ quiz }) {
  const {
    start_time,
    title,
    description,
    date,
    id: quizId,
    course: { name },
  } = quiz;

  const navigate = useNavigate();

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <StyledCardContainer>
      <CardHeading>{formattedDate}</CardHeading>
      <StyledDetailsContainer>
        <ContentSection>
          <QuizTime>{start_time}</QuizTime>
          <IconTextWrapper>
            <StyledIcon>
              <MdAssignmentAdd />
            </StyledIcon>
            <TextContainer>
              <QuizTitle>{title}</QuizTitle>
              <QuizDescription>{description}</QuizDescription>
              <CourseName>{name}</CourseName>
            </TextContainer>
          </IconTextWrapper>
        </ContentSection>
        <StyledButton onClick={() => navigate(`results/${quizId}`)}>
          النتائج
        </StyledButton>
      </StyledDetailsContainer>
    </StyledCardContainer>
  );
}

export default QuizCard;
