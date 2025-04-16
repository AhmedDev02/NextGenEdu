import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 300px repeat(6, 1fr);
`;
const Cell = styled.div`
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  ${(props) =>
    props.type === "last" &&
    `
      border-left: none;
      background: var( --color-danger-red);
      border-radius: 2rem 0 0 2rem;
      color: white;
    `}
`;
const P = styled.p`
  font-size: 1.8rem !important;
  font-weight: bold;
`;
const DataRow = ({ data }) => {
  const { id, name, scores } = data;
  const { Physics, Geography, Date, Subject, Test, FinalResult } = scores;

  return (
    <Row>
      <Cell>
        <P>
          {name} ({id})
        </P>
      </Cell>
      <Cell>
        <P>{Physics}/10</P>
      </Cell>
      <Cell>
        <P>{Geography}/10</P>
      </Cell>
      <Cell>
        <P>{Date}/30</P>
      </Cell>
      <Cell>
        <P>{Subject}/50</P>
      </Cell>
      <Cell>
        <P>{Test}/100</P>
      </Cell>
      <Cell type="last">
        <P>{FinalResult}/150</P>
      </Cell>
    </Row>
  );
};

export default DataRow;
