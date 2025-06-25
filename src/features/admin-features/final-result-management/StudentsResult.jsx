import styled from "styled-components";
import DataRow from "./DataRow";
import { data } from "./data";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem; 
  margin: 0 auto;
  padding: 1rem;
  overflow-x: auto; 

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  min-width: 70rem; 
  display: grid;
  grid-template-columns: 2fr repeat(6, 1fr); 
  margin-bottom: 1rem;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    padding-right: 0.3rem;
    grid-gap: 0.3rem;
  }
`;

export const HeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.8rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0;
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

export const Body = styled.div`
  width: 100%;
  min-width: 70rem; 
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const StudentsResult = () => {
  return (
    <Container>
      <Header>
        <HeaderCell>
          <P>الاسم</P>
        </HeaderCell>
        <HeaderCell>
          <P>الحضور</P>
        </HeaderCell>
        <HeaderCell>
          <P>التكاليف</P>
        </HeaderCell>
        <HeaderCell>
          <P>الميدتيرم</P>
        </HeaderCell>
        <HeaderCell>
          <P>اعمال السنه</P>
        </HeaderCell>
        <HeaderCell>
          <P>اختبار نهائي</P>
        </HeaderCell>
        <HeaderCell>
          <P>الدرجه النهائيه</P>
        </HeaderCell>
      </Header>
      <Body>
        {data.map((student) => (
          <DataRow key={student.id} data={student} />
        ))}
      </Body>
    </Container>
  );
};

export default StudentsResult;
