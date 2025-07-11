import styled from "styled-components";
import { FiLogOut } from "react-icons/fi"; // Importing the logout icon
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useSignOut } from "../features/auth/useSignOut";
import { useUser } from "../hooks/useUser";

const LogoutContainer = styled(animated.button)`
  position: absolute;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  direction: rtl; /* Right-to-Left for Arabic text */
  font-weight: bold;
  color: #111;
  border: none;
  top: 70px;
  font-family: "Changa", sans-serif;
  z-index: 9;
  &::before {
    content: "";
    position: absolute;
    top: -8px; /* Position above the box */
    left: 85%; /* Adjust based on where you want it */
    transform: translateX(-50%); /* Center horizontally */

    /* Triangle trick */
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff; /* Triangle color (black) */
  }

  @media (max-width: 768px) {
    top: 50px;
    padding: 10px 50px;
    gap: 10px;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;
const IconWrapper = styled.div`
  color: #e63946;
  font-size: 2.4rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1rem;
  }
`;
const H3 = styled.h3`
  font-size: 1rem !important;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  /* 📟 Tablets (769px - 1024px) */
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 1rem;
  }
`;

function SignOutButton({ isVisible, path }) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const navigate = useNavigate();
  const { signOut, isLoading } = useSignOut();
  const { token } = useUser();
  const dispatch = useDispatch();

  const fadeInDown = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { tension: 400, friction: 30 },
    onRest: () => {
      if (!isVisible) setShouldRender(false); // Unmount after fade-out
    },
  });

  useEffect(() => {
    if (isVisible) setShouldRender(true); // Mount when visible
  }, [isVisible]);

  if (!shouldRender) return null; // Completely remove from DOM

  return (
    <LogoutContainer
      onClick={function () {
        return signOut(token);
      }}
      style={fadeInDown}
    >
      <H3>تسجيل الخروج</H3>
      <IconWrapper>
        <FiLogOut />
      </IconWrapper>
    </LogoutContainer>
  );
}

export default SignOutButton;
