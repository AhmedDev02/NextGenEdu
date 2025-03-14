import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../ui/tharwat/Loader";

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
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const resData = await response.json();

      if (response.ok) {
        toast.success("تفقدالرابط المرسل إلى البريد الجامعي");
        setEmailSent(true);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      toast.error("حدث خطأ!");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Logo src="../../../public/logo.png" alt="Logo" />

        <H3 style={{ color: "#fff" }}>طلب تغيير كلمة المرور</H3>

        {emailSent ? (
          <p style={{ color: "#d9f3e8" }}>
            تم إرسال رابطًا لإعادة تعيين كلمة المرور على بريدك الجامعي.
            <br />
            سيتم تحويلك لصفحة تسجيل الدخول... <Loader />
          </p>
        ) : (
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
                {...register("email", {
                  required: "البريد الجامعي مطلوب",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "البريد الجامعي غير صحيح!",
                  },
                })}
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </InputContainer>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "جارِِ الإرسال..." : "تأكيد"}
            </Button>
          </form>
        )}
      </LoginBox>
    </Container>
  );
}
