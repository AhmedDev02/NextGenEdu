import styled from "styled-components";

const Row = styled.div`
  height: 7rem;
  width: 100%;
  background-color: white;
  display: flex;
  margin-top: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  gap: 6rem;
`;
const Data = styled.div`
  border-radius: 2rem;
  background-color: white;
  height: 100%;
  width: 33.33%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2.5rem;
`;
const DataStatus = styled.div`
  background-color: #30bd58;
  width: 25%;
  height: 100%;
  border-radius: 2rem;
  color: white;
  font-weight: 500;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataFormat = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;

function TableRow({ data }) {
  const { code, name, grade, status } = data;
  return (
    <Row>
      <DataFormat>
        <Data>
          <p style={{ textAlign: "center" }}>{name}</p>
        </Data>
        <Data>
          <p> {code} </p>
        </Data>
        <Data>
          <p> {grade} </p>
        </Data>
      </DataFormat>
      <DataStatus>
        <p style={{ textAlign: "center" }}> {status} </p>
      </DataStatus>
    </Row>
  );
}

export default TableRow;
