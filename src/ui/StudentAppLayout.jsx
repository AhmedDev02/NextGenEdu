import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Main from "./Main";
import Side from "./Side";
import StudentNav from "./StudentNav";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
function StudentAppLayout() {
  const [sideBar, setSideBar] = useState(true);

  //handling
  function handleSideBar() {
    setSideBar(!sideBar);
  }
  return (
    <Div>
      {/* {sideBar && (
        <Side isVisible={sideBar}>
          <StudentNav />
        </Side>
      )} */}

      <Side isVisible={sideBar}>
        <StudentNav />
      </Side>

      <Main>
        <Header profile={"profile"} toggle={handleSideBar} />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </Div>
  );
}

export default StudentAppLayout;
