import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import ProfileForm from "./ProfileForm";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* width: 1000px; */
  @media (max-width: 1024px) {
    min-width: 100%;
    padding: 40px;
  }
  @media (min-width: 1025px) {
    width: 1000px;
    padding: 40px;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px;
  }
`;
const Header = styled.header`
  text-align: center;
  background-color: var(--color-secondary-darkblue);
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

const StudentStatus = styled.div`
  text-align: center;
  background: var(--color-danger-red);
  width: 100%;
  display: flex;
  padding: 20px 0;
  border-radius: 20px;
`;
const StudentStat = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
  width: 100%;
`;

const Span = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
`;
const P = styled.p`
  display: block;
  font-size: 1.3rem;
  font-weight: 700;

  color: #fff;
  text-align: center;
`;
const Breaker = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--color-secondary-darkblue);
  border-radius: 20px;
`;
const ProfileDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 90%;

    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  /* This is for tablets (screens smaller than 768px) */
  @media (max-width: 768px) {
    min-width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

function ProfileContent() {
  const student = {
    name: "أحمد علي",
    department: "علوم الحاسوب",
    level: "3",
    group: "أ",
    section: "1",
    degree: 85,
  };
  const { name, department, level, group, section, degree } = student;
  return (
    <Div>
      <Header>
        <H1>المعلومات الأساسية</H1>
      </Header>
      <StudentStatus>
        <StudentStat>
          <Span>الإسم</Span>
          <P>{name}</P>
        </StudentStat>
        <StudentStat>
          <Span>الكلية/القسم</Span>
          <P>{department}</P>
        </StudentStat>
        <StudentStat>
          <Span>الفرقة</Span>
          <P>{level}</P>
        </StudentStat>
        <StudentStat>
          <Span>المجموعة</Span>
          <P>{group}</P>
        </StudentStat>
        <StudentStat>
          <Span>السكشن</Span>
          <P>{section}</P>
        </StudentStat>
        <StudentStat>
          <Span>التقدير التراكمي</Span>
          <P>{degree}</P>
        </StudentStat>
      </StudentStatus>
      <Breaker />
      <ProfileDataContainer>
        <ProfilePic />
        <ProfileForm />
      </ProfileDataContainer>
      <Breaker />
    </Div>
  );
}

export default ProfileContent;
