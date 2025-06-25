import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: var(--color-secondary-darkblue);
  width: 40%;
  padding: 20px;
  position: relative;
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 90%;
    padding: 40px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 40px;
  }
  border-radius: 15px;
`;
const Breaker = styled.div`
  height: 2px;
  width: 50%;
  background-color: #fff;
  border: 10px dotted var(#fff);
  border-radius: 20px;
`;

const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  color: #fff;
`;
const Name = styled.h4`
  font-size: 1.4rem;
  color: #fff;
`;
const UniCode = styled.h4`
  font-size: 1.4rem;
  color: #fff;
`;

const Group = styled.h5`
  font-size: 1.3rem;
  color: #fff;
`;

const Divider = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ImgEditor = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-secondary-darkblue);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 60px;
  right: 120px;
  /* For screens between 769px and 1024px */
  @media (max-width: 1024px) and (min-width: 769px) {
    right: 220px;
  }

  /* For screens 768px and below */
  @media (max-width: 768px) {
    right: 190px;
  }
`;

const StyledIcon = styled(FiEdit)`
  height: 20px;
  width: 20px;
  color: red;
  &:hover {
    transform: scale(1.1);
  }
`;
const Input = styled.input`
  display: none;
  cursor: pointer;
`;
const Label = styled.label`
  cursor: pointer;
`;
const SendButton = styled.button`
  background: ${({ type }) =>
    type === "cancel"
      ? "var(--color-danger-red)"
      : "var(--color-primary-green)"};
  width: ${({ type }) => (type === "cancel" ? "9rem" : "15rem")};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 1.5rem;
  &:active,
  &:focus {
    outline: none;
  }
  &:active {
    scale: 0.9;
  }
`;
function ProfilePic({ profilePicInfo, handleSave }) {
  const { SelectedImage, setSelectedImage } = useStudentProgressContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const { name, uni_code, group, personal_id, avatar } = profilePicInfo;
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setSelectedImage(previewUrl); // for preview
    setSelectedFile(file);
  };
  return (
    <Div>
      <H3>الصورة الشخصية</H3>
      <ProfileImg
        src={SelectedImage || `https://${avatar}` || "/download.jpeg"}
        alt="user"
      />

      <Name>{name}</Name>
      <UniCode>({uni_code})</UniCode>
      <Breaker />
      <Divider>
        <Group>مجموعة: {group}</Group>
        <Group>الرقم القومي: {personal_id}</Group>
      </Divider>

      <ImgEditor>
        <Label htmlFor="avatar-upload">
          <StyledIcon />
          <Input
            onChange={handleImageUpload}
            type="file"
            id="avatar-upload"
            accept="image/*"
          />
        </Label>
      </ImgEditor>
      <SendButton
        disabled={selectedFile === null}
        onClick={() => handleSave(selectedFile, setSelectedFile)}
      >
        حفظ الصوره
      </SendButton>
      {SelectedImage && (
        <SendButton
          onClick={() => {
            setSelectedImage(null);
          }}
          type="cancel"
        >
          الغاء الحفظ
        </SendButton>
      )}
    </Div>
  );
}

export default ProfilePic;
