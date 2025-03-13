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
`;

function Side({ children }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [shouldRender, setShouldRender] = useState(isSidebarOpen);

  // Animation for expanding/collapsing
  const slideAnimation = useSpring({
    width: isSidebarOpen ? "15%" : "0%",
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
