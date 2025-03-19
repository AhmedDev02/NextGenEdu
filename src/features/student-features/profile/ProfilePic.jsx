import { FiEdit, FiEdit2, FiEdit3 } from "react-icons/fi";
import styled from "styled-components";

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
const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  &:hover {
    box-shadow: var(--shadow-primary);
  }

  background-color: #fff;
`;

const StyledIcon = styled(FiEdit)`
  height: 20px;
  width: 20px;
  color: red;
  &:hover {
    transform: scale(1.1);
  }
`;

function ProfilePic() {
  const student = {
    name: "أحمد ثروت رفاعي خليل",
    uniCode: "123456789",
    group: "A",
    section: "1",
    degree: 85,
  };
  const { name, uniCode, group, section } = student;
  return (
    <Div>
      <H3>الصورة الشخصية</H3>
      <ProfileImg src="../../../public/download.jpeg" alt="user" />
      <Name>{name}</Name>
      <UniCode>({uniCode})</UniCode>
      <Breaker />
      <Divider>
        <Group>مجموعة: {group}</Group>
        <Group>سكشن: {section}</Group>
      </Divider>
      <ImgEditor>
        <Span>
          <StyledIcon />
        </Span>
      </ImgEditor>
    </Div>
  );
}

export default ProfilePic;
