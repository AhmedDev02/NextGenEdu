import styled from "styled-components";
import Button from "../../../ui/Button";
import ListFilter from "../../../ui/ListFilter";

import { FiPlus } from "react-icons/fi";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const H3 = styled.h3``;
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  display: block;
`;

const P = styled.p``;

function DiscussionHeader({ questionsNum }) {
  return (
    <Header>
      <HeaderDiv>
        <H3>جميع الأسئلة</H3>
        <Span>{questionsNum} سؤال حتي الآن!</Span>
      </HeaderDiv>
      <HeaderFilter>
        <Button
          size="custom"
          paddingLeftRight="30px"
          paddingTopBottom="10px"
          fontSize="1.4rem"
          style={{ paddingBottom: "15px" }}
        >
          <FiPlus style={{ fontSize: "1.4rem" }} />
          ضف سؤالك
        </Button>
        <ListFilter
          items={[
            { label: "Academic Questions", value: "academic" },
            { label: "General Questions", value: "general" },
            { label: "All Questions", value: "all" },
          ]}
          param={"questions"}
        />
      </HeaderFilter>
    </Header>
  );
}

export default DiscussionHeader;
