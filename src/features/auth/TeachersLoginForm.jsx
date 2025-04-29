import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { ENDPOINTS } from "../../utils/apiConstant";
import axiosInstance from "../../services/api/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useLoginRedirectToast from "../../hooks/useLoginRedirectToast";
import Loader from "../../ui/tharwat/Loader";

import { BASE_URL } from "../../utils/apiConstant";
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
const TempSign = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
  margin: 10px;
  align-items: center;
`;

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [wasRedirected] = useLoginRedirectToast();

  const onSuperAdmin = async () => {
    const endpoint = ENDPOINTS.TEACHER_LOGIN;
    // Make the API call to login the user

    const headers = {
      "Content-Type": "application/json", // Required for JSON data
      "X-Requested-With": "XMLHttpRequest", // For identifying the request
      "X-Device-Type": "web", // To specify the device type (web or mobile)
    };
    const response = await axiosInstance.post(
      endpoint,
      {
        email: "superadmin@gmail.com",
        password: "admin123",
      },
      { headers }
    );

    const accessToken = response.data.data[0].access_token;
    const userData = response.data.data[0].user;
    // Store the token and user data in localStorage and Redux
    const userToStore = {
      id: userData.id,
      avatar: userData.avatar,
      created_at: userData.created_at,
      name: userData.name,
      email: userData.email,
      role: userData.type,
      token: accessToken,
    };
    dispatch(login(userToStore)); // Store user data in Redux

    console.log("Login successful", response.data);
    toast.success(` تم تسجيل دخول
      ${userData.name}`);

    switch (userToStore.role) {
      case "Super admin":
        navigate("/super-admin");
        break;
      case "Admin":
        navigate("/sub-super-admin");
        break;
      case "Teacher":
        navigate("/admin");
        break;
      default:
        navigate("/teachers/login"); // Default path in case no role matches
        break;
    }
  };
  const onAdmin = async () => {
    const endpoint = ENDPOINTS.TEACHER_LOGIN;
    // Make the API call to login the user

    const headers = {
      "Content-Type": "application/json", // Required for JSON data
      "X-Requested-With": "XMLHttpRequest", // For identifying the request
      "X-Device-Type": "web", // To specify the device type (web or mobile)
    };
    const response = await axiosInstance.post(
      endpoint,
      {
        email: "admin12@gmail.com",
        password: "admin123",
      },
      { headers }
    );

    const accessToken = response.data.data[0].access_token;
    const userData = response.data.data[0].user;
    // Store the token and user data in localStorage and Redux
    const userToStore = {
      id: userData.id,
      avatar: userData.avatar,
      created_at: userData.created_at,
      name: userData.name,
      email: userData.email,
      role: userData.type,
      token: accessToken,
    };
    dispatch(login(userToStore)); // Store user data in Redux

    console.log("Login successful", response.data);
    toast.success(` تم تسجيل دخول
      ${userData.name}`);

    switch (userToStore.role) {
      case "Super admin":
        navigate("/super-admin");
        break;
      case "Admin":
        navigate("/sub-super-admin");
        break;
      case "Teacher":
        navigate("/admin");
        break;
      default:
        navigate("/teachers/login"); // Default path in case no role matches
        break;
    }
  };
  const onTeacher = async () => {
    const endpoint = ENDPOINTS.TEACHER_LOGIN;
    // Make the API call to login the user

    const headers = {
      "Content-Type": "application/json", // Required for JSON data
      "X-Requested-With": "XMLHttpRequest", // For identifying the request
      "X-Device-Type": "web", // To specify the device type (web or mobile)
    };
    const response = await axiosInstance.post(
      endpoint,
      {
        email: "30812025000001@zu.edu.eg",
        password: "30812025000001@zu.edu.eg",
      },
      { headers }
    );
    const accessToken = response.data.data[0].access_token;
    const userData = response.data.data[0].user;
    // Store the token and user data in localStorage and Redux
    const [
      courses,
      announcements,
      semesters,
      departments,
      assignments,
      quizzes,
    ] = await Promise.all([
      axiosInstance.get(`${BASE_URL}/teachers/courses`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axiosInstance.get(`${BASE_URL}/dashboard/announcements`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axiosInstance.get(`${BASE_URL}/teachers/semesters`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axiosInstance.get(`${BASE_URL}/teachers/departments`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axiosInstance.get(`${BASE_URL}/teachers/assignments`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axiosInstance.get(`${BASE_URL}/teachers/quizzes`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    ]);

    // Store the token and user data in localStorage and Redux
    let userToStore = {
      id: userData.id,
      avatar: userData.avatar,
      created_at: userData.created_at,
      name: userData.name,
      email: userData.email,
      role: userData.type,
      token: accessToken,
      courses: courses.data, // Add courses data
      announcements: announcements.data, // Add announcements data
      semesters: semesters.data, // Add semesters data
      departments: departments.data, // Add departments data
      assignments: assignments.data, // Add assignments data
      quizzes: quizzes.data, // Add quizzes data
    };

    // If the role is Teacher, add assignments and quizzes to the user object

    dispatch(login(userToStore)); // Store user data in Redux

    console.log("Login successful", response.data);
    toast.success(` تم تسجيل دخول
      ${userData.name}`);

    switch (userToStore.role) {
      case "Super admin":
        navigate("/super-admin");
        break;
      case "Admin":
        navigate("/sub-super-admin");
        break;
      case "Teacher":
        navigate("/admin");
        break;
      default:
        navigate("/teachers/login"); // Default path in case no role matches
        break;
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true); // 🔁 Show spinner

    try {
      const endpoint = ENDPOINTS.TEACHER_LOGIN;
      // Make the API call to login the user

      const headers = {
        "Content-Type": "application/json", // Required for JSON data
        "X-Requested-With": "XMLHttpRequest", // For identifying the request
        "X-Device-Type": "web", // To specify the device type (web or mobile)
      };

      const response = await axiosInstance.post(
        endpoint,
        {
          email: data.email,
          password: data.password,
        },
        { headers }
      );

      // Extract access token and user data from the response
      console.log("this is the res:", response);
      // returns
      // 1. access token
      // 2. type
      // 3. user

      const accessToken = response.data.data[0].access_token;
      const userData = response.data.data[0].user;
      // Store the token and user data in localStorage and Redux
      const userToStore = {
        id: userData.id,
        avatar: userData.avatar,
        created_at: userData.created_at,
        name: userData.name,
        email: userData.email,
        role: userData.type,
        token: accessToken,
      };
      dispatch(login(userToStore)); // Store user data in Redux

      console.log("Login successful", response.data);
      toast.success(` تم تسجيل دخول
        ${userData.name}`);

      switch (userToStore.role) {
        case "Super admin":
          navigate("/super-admin");
          break;
        case "Admin":
          navigate("/sub-super-admin");
          break;
        case "Teacher":
          navigate("/admin");
          break;
        default:
          navigate("/"); // Default path in case no role matches
          break;
      }
    } catch (error) {
      if (error.response) {
        toast.error(`فشل الدخول: ${"الإيميل أو كلمة المرور غير صحيحة"}`);
      } else if (error.request) {
        toast.error("فشل الدخول: لم يتم استلام استجابة من السيرفر");
      } else {
        toast.error(`فشل الدخول: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {wasRedirected}
      <LoginBox>
        <Logo src="../../../public/logo.png" alt="Logo" />
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

          {isLoading ? <Loader /> : <Button type="submit">تسجيل الدخول</Button>}
          {
            <TempSign>
              <Button type="submit" size="small" onClick={onSuperAdmin}>
                Super admin
              </Button>
              <Button type="submit" size="small" onClick={onAdmin}>
                Admin
              </Button>
              <Button type="submit" size="small" onClick={onTeacher}>
                Teacher
              </Button>
            </TempSign>
          }
        </form>
      </LoginBox>
    </Container>
  );
}
