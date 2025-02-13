import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";

const AnimatedMain = styled(animated.main)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f1f1f1;
  max-width: 85%;
  margin-right: auto;
  flex: 1;
`;
function Main({ children }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const mainAnimation = useSpring({
    maxWidth: isSidebarOpen ? "85%" : "100%", // Full width when sidebar is hidden
    config: { tension: 200, friction: 30 },
  });
  return <AnimatedMain style={mainAnimation}>{children}</AnimatedMain>;
}

export default Main;
