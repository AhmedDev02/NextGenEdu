import styled from "styled-components";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NotFoundBox = styled.div`
  background: #1e2235;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 350px;
  color: #fff;
`;

const H3 = styled.h3``;
const P = styled.p``;

const PageNotFound = () => {
  return (
    <Container>
      <NotFoundBox>
        <H3>404 - الصفحة غير موجوده</H3>
        <P>الصفحة التي تبحث عنها غير متوفرة.</P>
        <Button navigateTo="/students/login">العودة إلى تسجيل الدخول</Button>
      </NotFoundBox>
    </Container>
  );
};

export default PageNotFound;
