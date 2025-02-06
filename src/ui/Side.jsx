import styled from "styled-components";
import Logo from "./Logo";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const StyledSideBar = styled(animated.div)`
  height: 100%;
  width: 15%;
  z-index: 0;
`;

function Side({ children, isVisible }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  // Animation for expanding/collapsing
  const slideAnimation = useSpring({
    width: isVisible ? "15%" : "0%",
    overflow: isVisible ? "visible" : "hidden",
    config: { tension: 200, friction: 30 },
    onRest: () => {
      // Set display to none after collapse animation completes
      if (!isVisible) setShouldRender(false);
    },
  });

  useEffect(() => {
    // Render the sidebar immediately when becoming visible
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  if (!shouldRender) return null; // Completely unmount when hidden

  return (
    <StyledSideBar style={slideAnimation}>
      <Logo />
      {children}
    </StyledSideBar>
  );
}

export default Side;
