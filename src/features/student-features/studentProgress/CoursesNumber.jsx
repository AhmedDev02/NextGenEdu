import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 60rem;
  height: 7rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-size:2rem!important;;
  padding: 1rem;
  text-align: center;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

function CoursesNumber({ courses, totalDegrees }) {
  return (
    <Container>
      <InfoBox>
        <p>عدد المواد : {courses.length} </p>
      </InfoBox>
      <InfoBox>
        <p>مجموع الدرجات : {totalDegrees} </p>
      </InfoBox>
    </Container>
  );
}

export default CoursesNumber;
