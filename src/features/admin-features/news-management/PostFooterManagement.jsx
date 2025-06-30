import styled from "styled-components";
import { BEST_WISHES } from "../../../utils/constants";

const MainFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  margin-top: auto;
`;

const Signature = styled.div`
  text-align: right;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  margin: 0 0 0.25rem 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function PostFooterManagement({ footerInfo }) {
  const { name } = footerInfo;

  return (
    <MainFooter>
      <Signature>
        <H3>{BEST_WISHES}</H3>
        <H3>{name}</H3>
      </Signature>
    </MainFooter>
  );
}

export default PostFooterManagement;
