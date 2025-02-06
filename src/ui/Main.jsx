import styled from "styled-components";
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  background-color: #f1f1f1;
  flex: 1;
`;
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
