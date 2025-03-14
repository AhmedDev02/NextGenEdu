import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";

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

const Input = styled.input`
  font-family: "Changa", sans-serif;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  color: #fff;
  &::placeholder {
    color: #d9f3e8;
    opacity: 0.85;
  }
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ForgotPassword = styled.a`
  display: block;
  margin-bottom: 10px;
  /* margin-left: auto; */
  color: #fff;

  font-size: 1.4rem;
  cursor: pointer;
  text-decoration: none;
  text-align: start;
  direction: rtl;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 55%;
  top: 43%;
  transform: translateY(-50%);
  color: #d9f3e8;
  opacity: 0.85;

  font-size: 16px;
`;
const EyeIcon = styled.span`
  position: absolute;
  right: 90%;
  top: 45%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin: -10px 0 10px;
  text-align: start;
`;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <LoginBox>
        <Logo src="../../../public/logo.png" alt="Logo" />{" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {!watch("email") && (
              <Icon>
                <FaEnvelope />
              </Icon>
            )}
            <Input
              type="email"
              placeholder="البريد الجامعي"
              {...register("email", { required: "البريد الجامعي مطلوب" })}
            />
          </InputContainer>
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          <InputContainer>
            {!watch("password") && (
              <Icon style={{ left: "65%" }}>
                <FaLock />
              </Icon>
            )}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="كلمةالمرور"
              {...register("password", { required: "كلمة المرور مطلوبة" })}
            />
            {watch("password") && (
              <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon>
            )}
          </InputContainer>
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

          <ForgotPassword href="/forgot-password">
            نسيت كلمة المرور؟
          </ForgotPassword>

          <Button type="submit">تسجيل الدخول</Button>
        </form>
      </LoginBox>
    </Container>
  );
}
