import styled from "styled-components";
const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  white-space: nowrap;
`;

const StyledTableDetails = styled.div`
  height: 7rem;
  width: 100%;
  min-width: 1000px;
  background-color: white;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  margin: 8rem auto 4rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 1rem;
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #fb3c5e, #bb2d43);
  width: 14rem;
  height: 5rem;
  border-radius: 1.5rem;
  flex-shrink: 0;
  white-space: nowrap; 
`;

const P = styled.p`
  font-size: 1.8rem!important;
  font-weight: 500;
  color: white;
  white-space: nowrap; 
`;

function SemesterDetails() {
  return (
    <ScrollWrapper>
      <StyledTableDetails>
        {[
          "الدورة",
          "الحضور",
          "التكاليف",
          "الميدتيرم",
          "أعمال السنة",
          "الاختبار النهائي",
          "المجموع",
        ].map((text) => (
          <StyledCell key={text}>
            <P>{text}</P>
          </StyledCell>
        ))}
      </StyledTableDetails>
    </ScrollWrapper>
  );
}

export default SemesterDetails;
