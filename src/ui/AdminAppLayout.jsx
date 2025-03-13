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
