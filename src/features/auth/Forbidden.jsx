import styled from "styled-components";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ForbiddenBox = styled.div`
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

const Forbidden = () => {
  return (
    <Container>
      <ForbiddenBox>
        <H3>403 - لا توجد صلاحية</H3>
        <P>ليس لديك صلاحية للوصول إلى هذه الصفحة.</P>
        <Button navigateTo="/login">العودة إلى تسجيل الدخول</Button>
      </ForbiddenBox>
    </Container>
  );
};

export default Forbidden;
