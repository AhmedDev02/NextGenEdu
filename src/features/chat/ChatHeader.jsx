import styled from "styled-components";
import Search from "../../ui/Search";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom: 2px var(--color-grey-500) solid;
`;
const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const GroupName = styled.h4``;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
function ChatHeader({ level }) {
  return (
    <Div>
      <Search />
      <Group>
        <GroupName>CS level {level}</GroupName>
        <Img src="../../public/logo.png" alt="logo" />
      </Group>
    </Div>
  );
}

export default ChatHeader;
