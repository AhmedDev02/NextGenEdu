import styled from "styled-components";
import Button from "../../ui/Button";

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background: #1e2235;
  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
  width: 350px;
`;

const Logo = styled.img`
  width: 200px;
  margin: 0 auto 1rem;
  display: block;
`;

const H3 = styled.h3``;
const P = styled.p`
  color: #fff;
`;

const PasswordResetSuccess = () => {
  return (
    <Container>
      <LoginBox>
        <Logo src="../../../public/logo.png" alt="Logo" />
        <H3 style={{ color: "#fff" }}>تم تغيير كلمة المرور بنجاح!✅</H3>
        <P>بإمكانك تسجيل الدخول الآن بكلمة المرور الجديدة</P>
        <Button navigateTo="/login">الذهاب لتسجيل الدخول</Button>
      </LoginBox>
    </Container>
  );
};

export default PasswordResetSuccess;
