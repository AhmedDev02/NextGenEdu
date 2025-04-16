import styled from "styled-components";
import DataRow from "./DataRow";
import { data } from "./data";

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px repeat(6, 1fr);
  margin-bottom: 1rem;
`;
const HeaderCell = styled.div``;
const P = styled.p`
  font-size: 1.8rem !important;
  font-weight: bold;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
