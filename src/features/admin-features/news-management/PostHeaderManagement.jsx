import styled from "styled-components";

const HeaderImage = styled.img`
  width: 55px;
  height: 55px;
  background-size: fit;
  background-repeat: no-repeat;
  border-radius: 50%;
`;
const HeaderIdentity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
const HeaderName = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-900);
  font-weight: var(--font-weight-extra-bold);
`;
const HeaderSubject = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-500);
  font-weight: var(--font-weight-regular);
`;
const HeaderDate = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  font-weight: var(--font-weight-bold);
`;
const StyledPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function PostHeaderManagement({ headerInfo }) {
  const { id, name, type, avatar, subject, date, department } = headerInfo;
  return (
    <StyledPostHeader>
      <Div>
        <HeaderImage
          src={`https://${avatar}` || "/logo.png"}
          alt="Picture of doctor"
        />
        <HeaderIdentity>
          <HeaderName>{name}</HeaderName>
          <HeaderSubject>
            {department} {subject}
          </HeaderSubject>
        </HeaderIdentity>
      </Div>
      <HeaderDate>{date}</HeaderDate>
    </StyledPostHeader>
  );
}

export default PostHeaderManagement;
