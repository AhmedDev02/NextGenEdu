import styled from "styled-components";
import LectureStatus from "../../features/admin-features/material-management/LectureStatus";
import Modal from "./Modal";
import MyButton from "./MyButton";

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-primary);
  border-radius: var(--border-radius-lg);
  gap: 10px;
  background-color: #fff;
  ${({ style }) => style}
`;
const Img = styled.img`
  width: 100%;
  object-fit: contain;
  height: 30%;
  /* margin-bottom: auto; */
`;
const H4 = styled.h4`
  margin-top: 10px;
  text-align: right;
  font-weight: var(--font-weight-semibold);
`;
const H5 = styled.h5`
  text-align: left;
  font-weight: var(--font-weight-medium);
`;

const Br = styled.div`
  display: block;
  margin: 1rem 0;
  margin-bottom: 0;
  height: 1px;
  background-color: var(--color-grey-400);
  opacity: 0.8;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: auto;
  gap: 10px;
`;
const Span = styled.span`
  /* font-size: 1.4rem;
  background-color: var(--color-active);
  color: var(--color-green);
  padding: 10px 5px;
  border-radius: var(--border-radius-lg);
  border: var(--color-green) 2px solid; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  font-size: 5rem;
`;
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  gap: 5px;
`;
const P = styled.p`
  font-size: 3rem;
`;

function MyCard({ data, buttonsContent }) {
  const { id, name, semester } = data;
  // const { id } = useParams();
  return (
    <Modal>
      <StyledCard>
        <Img src="../../../public/logo.png" alt="logo" />
        <H4>{name}</H4>
        <H5> {semester?.name}</H5>
        <Br />
        <Div>
          <ButtonDiv>
            {buttonsContent.map((element, index) => {
              if (element.state === "modal") {
                return (
                  <Modal.Open key={index} opens="lec-status">
                    <MyButton
                      variation={element.variation}
                      size="custom"
                      paddingTopBottom="10px"
                      paddingLeftRight="60px"
                      styles={"border"}
                      onClick={() => element.setSelectedLectureId(id)}
                    >
                      <Span>
                        <P>{element.logo}</P>
                        <P>{element.label}</P>
                      </Span>
                    </MyButton>
                  </Modal.Open>
                );
              }

              return (
                <MyButton
                  key={index}
                  variation={element.variation}
                  size="custom"
                  paddingTopBottom="10px"
                  paddingLeftRight="60px"
                  styles={"border"}
                  path={element.path}
                  state={element.state}
                  id={id}
                >
                  <Span>
                    <P>{element.logo}</P>
                    <P>{element.label}</P>
                  </Span>
                </MyButton>
              );
            })}
          </ButtonDiv>
        </Div>
      </StyledCard>

      <Modal.Window name="lec-status">
        <LectureStatus lectureId={id} />
      </Modal.Window>
    </Modal>
  );
}

export default MyCard;
