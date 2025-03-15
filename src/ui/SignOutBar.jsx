import styled from "styled-components";
import SignOutToggle from "./SignOutToggle";
import { NAME_TEST } from "../utils/constants";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

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

  // handling
  function handleSignOutToggle() {
    setSignOut(!signOutToggle);
  }
  console.log(profile);
  return (
    <Div>
      <SignOutToggle toggle={handleSignOutToggle} />
      <Text>
        {NAME_TEST}
        {` (${20812020101866}) `}
      </Text>
      <Img src="../../public/download.jpeg" alt="profile.name" />
      {/* {signOutToggle && <SignOutButton />} */}
      <SignOutButton isVisible={signOutToggle} />
    </Div>
  );
}

export default SignOutBar;
