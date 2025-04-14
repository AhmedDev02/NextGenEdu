import styled from "styled-components";
import Button from "../../../ui/Button";
import { MdAssignmentAdd } from "react-icons/md";


const AssighnmentData = [
  {
    Assighnmentdate: "السبت، 2 نوفمبر 2024",
    AssighnmentTime: "08:00 مساءً",
    AssighnmentNumber: "  اختبار الاسبوع الأول",
    Assighnmentsubject: "كويز-البرمجة الشيئية(oop)",
  },
  {
    Assighnmentdate: "الأحد، 3 نوفمبر 2024",
    AssighnmentTime: "08:00 مساءً",
    AssighnmentNumber:"  اختبار الاسبوع الأول",
    Assighnmentsubject: "كويز-البرمجة الشيئية(oop)",
  },
  {
    Assighnmentdate: "الإثنين،4 نوفمبر 2024",
    AssighnmentTime: "08:00 مساءً",
    AssighnmentNumber:"  اختبار الاسبوع الأول",
    Assighnmentsubject: "كويز-البرمجة الشيئية(oop)",
  },
];

const StyledtimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin:auto;
  width: 70%;
  height: 150px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding: 20px;
  @media (max-width:760px ){
    width:95%;
    
  }
  @media (max-width:1024px ) and (min-width: 760px){
    width:80%;
   
  }
`;
const Styledticon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(to bottom, #ff3d60, #b82d42);
  border-radius: 10px;
  color: white;
`;

const Styledcontanier = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  align-items: center;
  margin-top: 10px;
`;
const StyledRightcontanier = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 70px;
  gap: 10px;
`;
const Styledtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 60px;
`;

function QuizMangementCard() {
  return (
    <>
      {AssighnmentData.map((card, index) => (
        <StyledtimeContainer  key={index}>
          <h3>{card.Assighnmentdate}</h3>
          <Styledcontanier  className="bg-red-50">
            <StyledRightcontanier>
              <div style={{ width: "50px" }}>
                <h4 style={{ width: "50px" }}>{card.AssighnmentTime}</h4>
              </div>

              <Styledticon>
                <MdAssignmentAdd style={{ fontSize: "40px" }}></MdAssignmentAdd>
              </Styledticon>
              <Styledtitle>
                <h3>{card.AssighnmentNumber}</h3>
                <h5 style={{ color: "#6D778A" }}>{card.Assighnmentsubject}</h5>
                
              </Styledtitle>
            </StyledRightcontanier>

            <Button
              variation="secondary"
              style={{ height: "46px", width: "200px", padding: "0px " }}
            >
              إضافة للإرسال
            </Button>
          </Styledcontanier>
        </StyledtimeContainer>
      ))}
    </>
  );
}

export default QuizMangementCard;
