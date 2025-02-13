import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Main from "./Main";
import Side from "./Side";
import StudentNav from "./StudentNav";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

function StudentAppLayout() {
  return (
    <Div>
      <Side>
        <StudentNav />
      </Side>
      <Main>
        <Header profile={"profile"} />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Div>
  );
}

export default StudentAppLayout;
