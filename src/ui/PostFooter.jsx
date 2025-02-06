import styled from "styled-components";
import { BEST_WISHES } from "../utils/constants";

const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
`;
const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6.5rem;
`;

const Div = styled.div``;

function PostFooter({ footerInfo }) {
  const {
    identity: { name },
  } = footerInfo;
  return (
    <MainFooter>
      <Div>
        <H3>{BEST_WISHES}</H3>
        <H3> {name}</H3>
      </Div>
    </MainFooter>
  );
}

export default PostFooter;
