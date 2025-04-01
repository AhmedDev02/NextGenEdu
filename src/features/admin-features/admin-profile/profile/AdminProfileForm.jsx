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
`;

const AdminProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "أحمد ثروت رفاعي",
    universityCode: "1234567890",
    email: "1234567890@zu.edu.eg",
    phone: "1234567890",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggleEdit = () => {
    if (isEditing) {
      // Save changes here (e.g., send to API)
      console.log("Updated Data:", formData);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Container>
      {/* Full Name */}
      <Label>الإسم الكامل</Label>
      <InputWrapper>
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
        <Input type="text" value={formData.universityCode} readOnly />
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
      <Label>رقم الهاتف</Label>
      <InputWrapper>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
        <Icon>
          <FiPhone />
        </Icon>
      </InputWrapper>

      {/* Edit Button */}
      <Button onClick={toggleEdit} isEditing={isEditing}>
        {isEditing ? <FiCheck /> : <FiEdit2 />}
        {isEditing ? "حفظ التغييرات" : "تعديل"}
      </Button>
    </Container>
  );
};

export default AdminProfileForm;
