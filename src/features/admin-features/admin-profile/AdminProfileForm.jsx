import styled from "styled-components";
import {
  FiUser,
  FiEdit2,
  FiMail,
  FiPhone,
  FiKey,
  FiCheck,
} from "react-icons/fi";
import { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

const Container = styled.div`
  width: 60%;

  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1024px) and (min-width: 769px) {
    min-width: 100%;
    padding: 40px;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    min-width: 100%;
    padding: 40px;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  direction: rtl;
  margin-bottom: 15px;
  background: ${({ isEditing }) => (!isEditing ? "" : "#1c2230")};
  cursor: ${({ isEditing }) => (!isEditing ? "" : "not-allowed;")};
`;

const Input = styled.input`
  &::-ms-reveal,
  &::-ms-clear,
  &::-webkit-contacts-auto-fill-button,
  &::-webkit-credentials-auto-fill-button,
  &::-webkit-textfield-decoration-container {
    display: none !important;
  }
  all: unset;
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #666;
  &:focus {
    outline: none;
  }
  direction: rtl;
`;

const Icon = styled.span`
  color: #666;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #252e45;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  font-family: "Changa", sans-serif;

  background: ${({ isEditing }) => (isEditing ? "#28a745" : "#252e45")};

  &:hover {
    background: ${({ isEditing }) => (isEditing ? "#218838" : "#1c2230")};
  }

  &:hover {
    background: #1c2230;
  }
  &:active {
    scale: 0.97;
  }
  &:focus {
    outline: none;
  }
`;
const Div = styled.div`
  cursor: pointer;
`;
const CancelButton = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  color: #fff;
  outline: none;
  border: none;
  background: var(--color-danger-red);
  &:active {
    outline: none;
    scale: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

const AdminProfileForm = ({ formInfo, updateInfo }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { name, email, uni_code } = formInfo;
  const [formData, setFormData] = useState({ name, email, uni_code });
  const { password, setPassword, isEditing, setIsEditing, handleSavePassword } =
    updateInfo;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container>
      {/* Full Name */}
      <Label>الإسم الكامل</Label>
      <InputWrapper isEditing={isEditing}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
        <Icon>
          <FiUser />
        </Icon>
      </InputWrapper>

      {/* University Code */}
      <Label>الكود الجامعي</Label>
      <InputWrapper isEditing={isEditing}>
        <Input type="text" value={formData.uni_code} readOnly />
        <Icon>
          <FiKey />
        </Icon>
      </InputWrapper>

      {/* University Email */}
      <Label>الإيميل الجامعي</Label>
      <InputWrapper isEditing={isEditing}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          readOnly
        />
        <Icon>
          <FiMail />
        </Icon>
      </InputWrapper>

      {/* Phone Number */}
      <Label>كلمة المرور</Label>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          readOnly={!isEditing}
        />
        <Icon>
          <Div onClick={handleShowPassword}>
            {showPassword ? <IoIosEyeOff size={18} /> : <IoMdEye size={18} />}
          </Div>
        </Icon>
      </InputWrapper>

      {/* Edit Button */}
      <Button onClick={handleSavePassword} isEditing={isEditing}>
        {isEditing ? <FiCheck /> : <FiEdit2 />}
        {isEditing ? "حفظ التغييرات" : "تعديل"}
      </Button>
      {isEditing && (
        <CancelButton
          onClick={() => {
            setIsEditing(false);
            setPassword("");
          }}
        >
          الغاء التعديل
        </CancelButton>
      )}
    </Container>
  );
};

export default AdminProfileForm;
