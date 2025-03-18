import styled from "styled-components";

const Row = styled.div`
  height: 7rem;
  width: 1150px; 
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
`;

const Data = styled.div`
  background-color: white;
  border-right: 2px solid gray;
  height: 100%;
  width: 164.28px;
  font-size: 2rem!important;;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const DataCourse = styled.div`
  background-color: #30bd58;
  width: 164.28px;
  height: 100%;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 0 8px;
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;
`;
const P=styled.p`
font-size: 1.6rem!important;
`

const DataTotalDegree = styled(Data)`
  width: 164.28px;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;

const DataFormat = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

function TableDegreesRow({ course }) {
  const {
    assignmentScore = "0/0",
    finalExamScore = "0/0",
    courseName = "N/A",
    midtermScore = "0/0",
    percentage = "0%",
    projectScore = "0/0",
  } = course;

  function extractScoreParts(score) {
    const match = score?.match(/^(\d+)\/(\d+)$/);
    return match
      ? {
          numerator: parseInt(match[1], 10),
          denominator: parseInt(match[2], 10),
        }
      : { numerator: 0, denominator: 0 };
  }

  const { numerator: projectNum, denominator: projectDen } =
    extractScoreParts(projectScore);
  const { numerator: assignmentNum, denominator: assignmentDen } =
    extractScoreParts(assignmentScore);
  const { numerator: midtermNum, denominator: midtermDen } =
    extractScoreParts(midtermScore);

  const semesterWorksNumerator = projectNum + assignmentNum + midtermNum;
  const semesterWorksDenominator = projectDen + assignmentDen + midtermDen;

  return (
    <Row>
      <DataCourse>
        <P>{courseName}</P>
      </DataCourse>
      <DataFormat>
        <Data>{projectScore}</Data>
        <Data>{assignmentScore}</Data>
        <Data>{midtermScore}</Data>
        <Data>{`${semesterWorksNumerator}/${semesterWorksDenominator}`}</Data>
        <Data>{finalExamScore}</Data>
      </DataFormat>
      <DataTotalDegree>{percentage}</DataTotalDegree>
    </Row>
  );
}

export default TableDegreesRow;
