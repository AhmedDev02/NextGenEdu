import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: var(--color-secondary-darkblue);
  box-shadow: var(--shadow-primary);
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
function Logo() {
  return (
    <Div>
      <Img src="../../public/logo.png" alt="name" />
    </Div>
  );
}

export default Logo;
