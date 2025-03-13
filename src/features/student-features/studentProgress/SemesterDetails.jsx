import styled from "styled-components";

const StyledTableDetails = styled.div`
  height: 7rem;
  width: 100%;
  background-color: white;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 4rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
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
`;
const P = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
`;
function SemesterDetails() {
  return (
    <StyledTableDetails>
      <StyledCell>
        <P>الدورة</P>
      </StyledCell>
      <StyledCell>
        <P>الحضور</P>
      </StyledCell>
      <StyledCell>
        <P>التكاليف</P>
      </StyledCell>
      <StyledCell>
        <P>الميدتيرم</P>
      </StyledCell>
      <StyledCell>
        <P>أعمال السنة</P>
      </StyledCell>
      <StyledCell>
        <P>الاختبار النهائي</P>
      </StyledCell>
      <StyledCell>
        <P>المجموع</P>
      </StyledCell>
    </StyledTableDetails>
  );
}

export default SemesterDetails;
