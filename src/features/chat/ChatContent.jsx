import styled from "styled-components";

import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessagesContainer from "./MessagesContainer";
import ChatFooter from "./ChatFooter";

const Div = styled.div`
  display: flex;
  height: 550px;
  margin-bottom: auto;
  align-items: center;
  gap: 100px;
  justify-content: space-between;
`;

function ChatContent() {
  return (
    <Div>
      <ChatContainer>
        <ChatHeader level="X" />
        <MessagesContainer />
        <ChatFooter />
      </ChatContainer>
    </Div>
  );
}

export default ChatContent;

// import { CHAT_WELCOME } from "../../utils/constants";

// import ListFilter from "../../ui/ListFilter";
// const ChatSelectContainer = styled.div`
//   box-shadow: var(--shadow-primary);
//   width: 200px;
//   height: 650px;
//   border-radius: 20px 20px 0px 0px;
//   padding: 20px;
//   background-color: #fff;
// `;
// const ChatSelectBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const ChatWelcoming = styled.span`
//   font-size: 1rem;
//   display: block;
//   color: var(--color-grey-600);
//   text-align: center;
// `;
{
  /* 
        <ChatSelectContainer>
          <ChatWelcoming>{CHAT_WELCOME}</ChatWelcoming>
          <ChatSelectBox>
            <ListFilter
              items={[
                { label: "CS Level 1", value: "level_1" },
                { label: "CS Level 2", value: "level_2" },
                { label: "CS Level 3", value: "level_3" },
                { label: "CS Level 4", value: "level_4" },
              ]}
              defaultItem={"level_1"}
              param={"level"}
              containerProps={{
                direction: "column",
              }}
              itemStyles={`
                margin-top:20px;
                padding: 5px 25px;
                font-size: 18px;
                border-radius:10px;
              `}
              multipleChoose={false}
            />
          </ChatSelectBox>
        </ChatSelectContainer>
         */
}
