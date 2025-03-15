import styled from "styled-components";
import Logo from "./Logo";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StyledSideBar = styled(animated.div)`
  height: 100%;
  width: 15%;
  z-index: 0;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    /* margin-top: 80px; */
    min-width: 0;
    z-index: 101;
    height: 100%;
    align-self: flex-end;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
    min-width: 0;
    z-index: 10;
    height: 100%;
    align-self: flex-end;
  }
  /* this is for tablets */
`;

function Side({ children }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [shouldRender, setShouldRender] = useState(isSidebarOpen);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getSidebarWidth = () => (screenWidth <= 1024 ? "60%" : "15%");

  console.log(screenWidth);
  // Animation for expanding/collapsing
  const slideAnimation = useSpring({
    width: isSidebarOpen ? getSidebarWidth() : "0%",
    overflow: isSidebarOpen ? "visible" : "hidden",
    config: { tension: 200, friction: 30 },
    onRest: () => {
      // Set display to none after collapse animation completes
      if (!isSidebarOpen) setShouldRender(false);
    },
  });

  useEffect(() => {
    // Render the sidebar immediately when becoming visible
    if (isSidebarOpen) setShouldRender(true);
  }, [isSidebarOpen]);

  return (
    <StyledSideBar style={slideAnimation}>
      <Logo />
      {children}
    </StyledSideBar>
  );
}

export default Side;
