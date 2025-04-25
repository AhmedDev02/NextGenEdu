import { FiEdit } from "react-icons/fi";
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
  top: 80px;
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
const P = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;

const StyledIcon = styled(FiEdit)`
  height: 20px;
  width: 20px;
  color: red;
  &:hover {
    transform: scale(1.1);
  }
`;

function SubSuperAdminProfilePic({ user }) {
  const student = {
    name: "أحمد ثروت رفاعي خليل",
  };
  const { name } = student;
  return (
    <Div>
      <H3>الصورة الشخصية</H3>
      <ProfileImg src="../../../public/download.jpeg" alt="user" />
      <Name>أ.د/ {user.name}</Name>
      <Breaker />
      <Divider>
        <P>
          أستاذ متميز في قسم علوم الحاسب، تخرج عام 1941 وما زال ينبض بالحيوية
          وكأنه في ريعان الشباب بخبرة 39 عامًا ليس علي كوكب الأرض، بل امتدت إلى
          المريخ وزحل، حيث استلهم من عوالمهما تقنيات لم تصل إليها البشرية بعد.
          عاد إلينا بتواضعه المعهود ليشارك معرفته، ويدفع طلابه للأمام، نحو آفاق
          لم يسبقهم إليها أحد!
        </P>
      </Divider>
      <ImgEditor>
        <Span>
          <StyledIcon />
        </Span>
      </ImgEditor>
    </Div>
  );
}

export default SubSuperAdminProfilePic;
