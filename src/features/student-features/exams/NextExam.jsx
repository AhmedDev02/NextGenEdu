import styled from "styled-components";
import Button from "../../../ui/Button";
import { toggleSidebar } from "../../../store/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (max-width: 1024px) and (min-width: 769px) {
    max-width: 90%;
    padding: 40px;
  }

  /* this is for tablets */

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px;
  }
`;
const H4 = styled.h4`
  align-self: start;
  margin-bottom: 10px;
`;
const ExamDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: start;
  gap: 10px;
`;
const Breaker = styled.div`
  width: 80%;
  border: 1px solid var(--color-grey-600);
  margin: 5px 0;
  align-self: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const ExamGoal = styled.p`
  font-size: 1.4rem;
`;
const Start = styled.h5`
  font-size: 1.4rem;
  align-self: start;
  margin: 5px;
`;
const End = styled.h5`
  margin: 5px;

  font-size: 1.4rem;
  align-self: start;
`;

const ExamDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  flex-direction: column;
  background-color: #fff;
  box-shadow: var(--shadow-primary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const LabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
`;
const Label = styled.span`
  background: var(--color-danger-red);
  text-align: center;
  width: 150px;
  border-radius: 10px;
  padding: 10px 0;
  color: #fff;
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 150px;
  }

  /* this is for tablets */

  @media (max-width: 768px) {
    width: 110px;
  }
`;
const LabelDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 100%;
`;

const LabelDetails = styled.span`
  text-align: center;
  width: 150px;
  padding: 10px 0px;
  text-align: center;
  color: #000;
  position: relative;
  &:not(:last-child)::before {
    content: "";
    display: inline-block;
    width: 2px;
    position: absolute;
    height: 68px;
    top: -5px;
    left: -30px;
    background-color: #000;
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 120px;
    &:not(:last-child)::before {
      content: "";
      display: inline-block;
      width: 2px;
      position: absolute;
      height: 65px;
      top: -5px;
      left: -30px;
      background-color: #000;
    }
  }

  /* this is for tablets */

  @media (max-width: 768px) {
    width: 110px;
    &:not(:last-child)::before {
      content: "";
      display: inline-block;
      width: 2px;
      position: absolute;
      height: 60px;
      top: -5px;
      left: -30px;
      background-color: #000;
    }
  }
`;

const AdviceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
const AdviceRow = styled.div`
  width: 100%;
  box-shadow: var(--shadow-primary);
  background-color: #fff;
  display: flex;
  position: relative;
  border-radius: 15px;
`;

const AdviceText = styled.h5`
  text-align: center;
  padding: 10px;
`;

const AdviceSpan = styled.div`
  background: var(--color-primary-green);
  padding: 10px;
  text-align: center;
  width: 25%;
  color: #fff;
  border-radius: 15px;
`;
const AdviceNumber = styled.span`
  position: absolute;
  width: 50px;
  height: 55px;
  border-radius: 70px;
  background-color: #f1f1f1;
  font-size: 3rem;
  color: var(--color-green);
  font-weight: 800;
  top: -5px;
  padding: 4px 0;
  right: -28px;
  text-align: center;
  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 3rem !important;
  }

  /* this is for tablets */

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;
function NextExam({ examGoal, startTime, endTime }) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handle toggle
  function handleToggle() {
    if (isSidebarOpen) dispatch(toggleSidebar());
    navigate("/exams/1/1");
  }

  return (
    <Div>
      <Container>
        <H4>وصف الإختبار</H4>
        <ExamDescriptionDiv>
          <ExamGoal>{examGoal} </ExamGoal>
          <Breaker />
          <Start>
            {" الإختبار يبدأ في:"} {startTime}
          </Start>
          <End>
            {" الإختبار ينتهي في:"} {endTime}
          </End>
        </ExamDescriptionDiv>
        <Button style={{ marginTop: "10px" }} onClick={handleToggle}>
          ابدأ الإختبار الآن!
        </Button>
      </Container>
      <ExamDetailsDiv>
        <H4>تفاصيل الإختبار</H4>

        <LabelDiv>
          <Label>حالة الإختبار</Label>
          <Label> التصنيف</Label>
          <Label>مدة الإختبار</Label>
          <Label> المرات المسموح بها</Label>
        </LabelDiv>
        <Breaker style={{ marginTop: "35px", width: "100%" }} />
        <LabelDetailsDiv>
          <LabelDetails>{"لم يبدأ بعد"}</LabelDetails>
          <LabelDetails>{"أعمال سنة"}</LabelDetails>
          <LabelDetails>{"15 دقيقة"}</LabelDetails>
          <LabelDetails style={{ borderLeft: "none" }}>
            {"مرة واحدة"}
          </LabelDetails>
        </LabelDetailsDiv>
      </ExamDetailsDiv>
      <AdviceDiv>
        <H4>نصائح للإختبار</H4>
        <AdviceRow>
          <AdviceNumber>1</AdviceNumber>
          <AdviceSpan>{"📚 استعد مسبقاً"}</AdviceSpan>
          <AdviceText>
            {"خصص وقتاً للمراجعة وفهم المواضيع الرئيسية."}
          </AdviceText>
        </AdviceRow>
        <AdviceRow>
          <AdviceNumber>2</AdviceNumber>

          <AdviceSpan>{"⏰ نظم وقتك جيداً"}</AdviceSpan>
          <AdviceText>
            {
              "قسّم وقت الاختبار بين الأسئلة، ولا تقضِ وقتاً طويلاً على سؤال واحد."
            }
          </AdviceText>
        </AdviceRow>
        <AdviceRow>
          <AdviceNumber>3</AdviceNumber>

          <AdviceSpan>{"🔍 اقرأ الأسئلة بتركيز"}</AdviceSpan>
          <AdviceText>
            {" تأكد من فهم السؤال جيداً قبل البدء بالإجابة."}{" "}
          </AdviceText>
        </AdviceRow>
        <AdviceRow>
          <AdviceNumber>4</AdviceNumber>

          <AdviceSpan>{"😌 استرخِ وابقَ هادئاً"}</AdviceSpan>
          <AdviceText>{" تنفّس بعمق وثق بقدراتك! "} </AdviceText>
        </AdviceRow>
        <H4> بالتوفيق للجميع🌹</H4>
      </AdviceDiv>
    </Div>
  );
}

export default NextExam;
