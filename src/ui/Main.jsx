import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { useEffect, useState } from "react";

const AnimatedMain = styled(animated.main)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f1f1f1;
  max-width: 85%;
  margin-right: auto;
  flex: 1;
  @media (max-width: 1024px) and (min-width: 769px) {
    min-width: 100%; /* Fixes width-related issues */
    background-color: orange;
    width: 100%; /* Ensures full width */
    margin-right: 0;
    flex: 1;
  }
  /* this is for tablets */

  @media (max-width: 768px) {
    min-width: 100%; /* Fixes width-related issues */
    background-color: red;
    width: 100%; /* Ensures full width */
    margin-right: 0;
    flex: 1;
  }
`;
function Main({ children }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMainWidth = () =>
    screenWidth <= 768 ? "100%" : isSidebarOpen ? "85%" : "100%";

  const mainAnimation = useSpring({
    // maxWidth: isSidebarOpen ? "85%" : "100%", // Full width when sidebar is hidden
    maxWidth: getMainWidth(),

    config: { tension: 200, friction: 30 },
  });

  return <AnimatedMain style={mainAnimation}>{children}</AnimatedMain>;
}

export default Main;
