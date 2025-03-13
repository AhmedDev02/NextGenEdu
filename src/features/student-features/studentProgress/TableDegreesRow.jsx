import styled from "styled-components";

const Row = styled.div`
  height: 7rem;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  position: relative;
  justify-content: flex-end;
`;
const Data = styled.div`
  background-color: white;
  border-right: 2px solid gray;
  height: 100%;
  width: 17rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2.5rem;
`;
const DataCourse = styled.div`
  background-color: #30bd58;
  width: 14%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  align-items: center;
`;
const DataTotalDegree = styled.div`
  background-color: white;
  width: 14.5%;
  height: 100%;
  border-right: 2px solid gray;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2.5rem;
`;
const DataFormat = styled.div`
  display: flex;
  height: 100%;
  width: 844.5px;
`;
function TableDegreesRow({ course }) {
  const {
    assignmentScore,
    finalExamScore,
    courseName,
    midtermScore,
    percentage,
    projectScore,
  } = course;

  function extractScoreParts(score) {
    if (!score) return { numerator: 0, denominator: 0 };
    const [numerator, denominator] = score
      .split("/")
      .map((num) => parseInt(num, 10));
    return { numerator, denominator };
  }

  const { numerator: projectNum, denominator: projectDen } =
    extractScoreParts(projectScore);
  const { numerator: assignmentNum, denominator: assignmentDen } =
    extractScoreParts(assignmentScore);
  const { numerator: midtermNum, denominator: midtermDen } =
    extractScoreParts(midtermScore);

  const semesterWorksNumerator = projectNum + assignmentNum + midtermNum;
  const semesterWorksDenominator = projectDen + assignmentDen + midtermDen;

  const semesterWorks = `${semesterWorksNumerator}/${semesterWorksDenominator}`;

  return (
    <Row>
      DataCourse
      <DataCourse>
        <p style={{textAlign:'left'}}>{courseName || "N/A"}</p>
      </DataCourse>
      <DataFormat>
        <Data>
          <p>{projectScore || "0/0"}</p>
        </Data>
        <Data>
          <p>{assignmentScore || "0/0"}</p>
        </Data>
        <Data>
          <p>{midtermScore || "0/0"}</p>
        </Data>
        <Data>
          <p>{semesterWorks || "0/0"}</p>
        </Data>
        <Data>
          <p>{finalExamScore || "0/0"}</p>
        </Data>
      </DataFormat>
      <DataTotalDegree>
        <p>{percentage || "0%"}</p>
      </DataTotalDegree>
    </Row>
  );
}

export default TableDegreesRow;
