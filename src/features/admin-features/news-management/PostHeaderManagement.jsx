import styled from "styled-components";

const StyledPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const HeaderIdentity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeaderName = styled.span`
  font-size: 1.6rem;
  color: var(--color-grey-900);
  font-weight: var(--font-weight-extra-bold);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeaderSubject = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-500);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeaderDate = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-500);
  font-weight: var(--font-weight-bold);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

function PostHeaderManagement({ headerInfo }) {
  const { name, avatar, subject, date, department } = headerInfo;
  return (
    <StyledPostHeader>
      <UserInfo>
        <HeaderImage
          src={`https://${avatar}` || "/logo.png"}
          alt={`Picture of ${name}`}
        />
        <HeaderIdentity>
          <HeaderName>{name}</HeaderName>
          <HeaderSubject>
            {department} / {subject}
          </HeaderSubject>
        </HeaderIdentity>
      </UserInfo>
      <HeaderDate>{date}</HeaderDate>
    </StyledPostHeader>
  );
}

export default PostHeaderManagement;
