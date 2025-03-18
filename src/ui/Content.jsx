import styled from "styled-components";

const StyledContent = styled.div`
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  @media (max-width: 768px) {
    height: ${({ open }) => (open ? "auto" : "30px")};
    max-width: 100%;
    align-items: start;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
  }
`;
function Content({ children }) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;
