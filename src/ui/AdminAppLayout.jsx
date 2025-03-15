import styled from "styled-components";
import Side from "./Side";
import Main from "./Main";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import AdminNav from "./AdminNav";
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

function AdminAppLayout() {
  return (
    <Div>
      <Side>
        <AdminNav />
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

export default AdminAppLayout;
