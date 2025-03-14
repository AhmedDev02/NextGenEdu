import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

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

const Icon = styled.span`
  position: absolute;
  left: 55%;
  top: 43%;
  transform: translateY(-50%);
  color: #d9f3e8;
  opacity: 0.85;

  font-size: 16px;
`;
const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin: -10px 0 10px;
  text-align: start;
`;
const H3 = styled.h3``;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    isValid,
    formState: { errors },
    isSubmitting,
  } = useForm({
    mode: "onChange", // Ensures validation runs on every input change
    criteriaMode: "all", // Ensures all validation errors show
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: data.password }),
      });

      const resData = await response.json();

      if (response.ok) {
        toast.success("Password reset successful! Redirecting...");
        setTimeout(() => navigate("/password-reset-success"), 3000);
      } else {
        toast.error(resData.message);
        setTimeout(() => navigate("/password-reset-error"), 3000); // Redirect to error page
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setTimeout(() => navigate("/password-reset-error"), 3000); // Redirect to error page
    }
  };

  return (
    <Container>
      <LoginBox>
        <Logo src="../../../public/logo.png" alt="Logo" />
        <H3 style={{ color: "#fff" }}>تغيير كلمة المرور</H3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {!watch("password") && (
              <Icon style={{ left: "48%" }}>
                <FaLock />
              </Icon>
            )}
            <Input
              type={"text"}
              placeholder="كلمة السر الجديدة"
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "كلمة المرور يجب ان تتكون على الاقل من 6 أحرف",
                },
              })}
              onBeforeInput={(e) => {
                if (/[\u0600-\u06FF\u0750-\u077F]/.test(e.data))
                  e.preventDefault();
              }}
            />
          </InputContainer>
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <InputContainer>
            {!watch("confirmPassword") && (
              <Icon style={{ left: "55%" }}>
                <FaLock />
              </Icon>
            )}
            <Input
              type={"text"}
              placeholder="تأكيد كلمة السر"
              {...register("confirmPassword", {
                required: "يجب تأكيد كلمة المرور",
                validate: (value) =>
                  value === watch("password") || "كلمة السر غير مطابقة",
                pattern: {
                  value: /^[A-Za-z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\-]*$/,
                  message: "الحروف باللغة الإنجليزية فقط!",
                },
              })}
              onBeforeInput={(e) => {
                if (/[\u0600-\u06FF\u0750-\u077F]/.test(e.data))
                  e.preventDefault();
              }}
            />
          </InputContainer>
          {errors.confirmPassword && (
            <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
          )}
          <Button disabled={isValid || isSubmitting} type="submit">
            تأكيد
          </Button>
        </form>
      </LoginBox>
    </Container>
  );
}
