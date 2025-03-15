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
  @media (max-width: 768px) {
    min-width: 100%;
    /* display: block; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    position: relative;
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    position: relative;
  }
  /* this is for tablets */
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
