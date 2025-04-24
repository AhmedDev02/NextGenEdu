import styled from "styled-components";
import AdminProfilePic from "./SuperAdminProfilePic";
import AdminProfileForm from "./SuperAdminProfileForm";
import { useSelector } from "react-redux";

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

function SuperAdminProfileContent() {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store

  return (
    <Div>
      <Header>
        <H1>المعلومات الأساسية</H1>
      </Header>
      <Breaker />
      <ProfileDataContainer>
        <AdminProfilePic user={user} />
        <AdminProfileForm user={user} />
      </ProfileDataContainer>
      <Breaker />
    </Div>
  );
}

export default SuperAdminProfileContent;
