import { useEffect, useState } from "react";
import styled from "styled-components";

const Row = styled.div`
  height: 7rem;
  width: 100%;
  min-width: 700px; /* Prevents it from shrinking */
  background-color: white;
  display: flex;
  margin-top: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  gap: 6rem;

  @media (max-width: 768px) {
    gap: 2rem; /* Reduce gap on small screens */
  }
`;

const Data = styled.div`
  border-radius: 2rem;
  background-color: white;
  height: 100%;
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const DataStatus = styled.div`
  background-color: ${(props) => props.studentStatus};
  width: 25%;
  height: 100%;
  border-radius: 2rem;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataFormat = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const P = styled.p`
  font-size: 1.6rem !important;
`;

function TableRow({ data }) {
  const [studentStatus, setStudentStatus] = useState("#30bd58");

  useEffect(() => {
    function handleStatus() {
      if (status === "راسب") {
        setStudentStatus("#FF3D60");
      }
    }
    handleStatus();
  }, []);
  const { code, name, grade, status } = data;
  return (
    <Row>
      <DataFormat>
        <Data>
          <P style={{ textAlign: "center" }}>{name}</P>
        </Data>
        <Data>
          <P> {code} </P>
        </Data>
        <Data>
          <P> {grade} </P>
        </Data>
      </DataFormat>
      <DataStatus studentStatus={studentStatus}>
        <P style={{ textAlign: "center" }}> {status} </P>
      </DataStatus>
    </Row>
  );
}

export default TableRow;
