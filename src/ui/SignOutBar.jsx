import styled from "styled-components";
import SignOutToggle from "./SignOutToggle";
import { useState } from "react";
import SignOutButton from "./SignOutButton";
import { useGetProfile } from "../features/student-features/profile/useGetProfile";
import Spinner from "./amr/Spinner";

const Div = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-left: auto;
  margin-right: 200px;
  position: relative;
  @media (max-width: 768px) {
    height: 40px;
    gap: 20;
    margin-right: 0;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
const Text = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-grey-700);
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1rem;
  }
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: contain;
  /* margin-left: auto; */
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 30px;
    height: 30px;
  }
`;
// const
function SignOutBar({ profile }) {
  const [signOutToggle, setSignOut] = useState(false);
  // const user = useSelector((state) => state.auth.user);
  // const { SelectedImage } = useStudentProgressContext();
  const { ProfileInfo, isPending } = useGetProfile();
  if (isPending) return <Spinner />;
  const { avatar, name, email, type } = ProfileInfo.data;

  // handling
  function handleSignOutToggle() {
    setSignOut(!signOutToggle);
  }

  return (
    <Div>
      <SignOutToggle toggle={handleSignOutToggle} />
      <Text>
        {name}
        {` (${email || "20812020101866"}) `}
      </Text>
      <Img src={`https://${avatar}` || "/download.jpeg"} alt="profile.name" />
      {/* {signOutToggle && <SignOutButton />} */}
      <SignOutButton
        isVisible={signOutToggle}
        path={type === "Super admin" ? "/teachers/login" : "/students/login"}
      />
    </Div>
  );
}

export default SignOutBar;
