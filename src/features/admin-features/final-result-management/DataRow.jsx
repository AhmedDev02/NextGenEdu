import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  min-width: 70rem;
  background-color: white;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: 2fr repeat(6, 1fr); 
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    padding: 0 0.3rem;
    grid-gap: 0.3rem;
  }
`;

export const Cell = styled.div`
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  text-align: center;

  ${(props) =>
    props.type === "last" &&
    `
      border-left: none;
      background: var(--color-danger-red);
      border-radius: 1.5rem 0 0 1.5rem; /* Adjust for RTL */
      color: white;
    `}

  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0;
  }
`;

export const P = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
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
