import styled from "styled-components";

const StyledContent = styled.div`
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;
function Content({ children }) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;
