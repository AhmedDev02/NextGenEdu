import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { MdAssignmentAdd } from "react-icons/md";



// container content

const StyledtimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin:auto;
  width: 70%;
  height: 75px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width:767px ){
    width:80%;
    justify-content: space-between;
  }
  @media (max-width:1027px ) and (min-width: 767px){
    width:75%;
  }
`;
const Styledbutton = styled.button`
  padding-inline: 16px;
  background: linear-gradient(to bottom, #30BD58, #399F63);
  border-radius: 12px;
  width: 27%;
  height: 46px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  line-height: 36.8px;
  font-family: Changa;
  outline: none;
  border: 0;

  @media (max-width:767px ){
  font-size: 10px;
  font-weight: 500;
  line-height:12px;
  width: 35%;
    
  }
  @media (max-width:1027px ) and (min-width: 767px){
    width: 31%;
    font-size: 12px;
  }
`;
const Styledinputcontainer = styled.div`

  position: relative;
  display: inline-block;
  width: 70%;

  input {
  width: 100%;
  border-radius: 12px;
  padding-inline: 35px;
  background-color: #f1f1f1;
  height: 46px;
  color: #6d778a;
  font-size: 15px;
  font-weight: 500;
  line-height: 36.8px;
  font-family: Changa;
  text-align: right;
  outline: none;
  overflow: visible;
  text-overflow: ellipsis;
  border: 0;
  &:focus {
    border: 1px solid black;
  }

   @media (max-width:767px ){
  font-size: 12px;
  font-weight: 500;
  line-height:12px;
  width: 95%;
  margin-inline:15px;
  padding-inline:30px;
  }

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 12px;
    width: 95%;
    padding-inline:25px;
    margin-inline:20px;
    }
  }
`;

const Styledarrowicon = styled(SlArrowDown)`
 font-size: 14px;
 transform: translate(0px, 3px);

 @media (max-width:767px ){
  font-size: 11px;
  }
`;
const Styledsearchicon = styled(GoSearch)`
  font-size: 17px;
  position: absolute;
  transform: translate(-10px, 15px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 16px;
    transform: translate(-25px, 15px);
    }

  @media (max-width:767px ){
  font-size: 13px;
  transform: translate(-25px, 16px);
  }
`;

// available task content

const AssignmentData = [
  {
    Assignmentdate: "السبت، 2 نوفمبر 2024",
    AssignmentTime: "08:00 مساءً",
    AssignmentNumber: "اسايمنت الاسبوع الرابع",
    Assignmentsubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
  {
    Assignmentdate: "الأحد، 3 نوفمبر 2024",
    AssignmentTime: "08:00 مساءً",
    AssignmentNumber: "اسايمنت الاسبوع الرابع",
    Assignmentsubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
  {
    Assignmentdate: "الإثنين،4 نوفمبر 2024",
    AssignmentTime: "08:00 مساءً",
    AssignmentNumber: "اسايمنت الاسبوع الرابع",
    Assignmentsubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
];


const Stylediconcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(to bottom, #ff3d60, #b82d42);
  border-radius: 10px;
  color: white;

  @media (max-width:1027px ) and (min-width: 767px){
    width: 55px;
    height: 55px;
    }

 @media (max-width: 767px){
    width: 45px;
    height: 45px;
    }
   
`;
const Styledicon = styled(MdAssignmentAdd)`
  font-size: 40px;

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 35px;
    }

    @media (max-width: 767px){
    font-size: 30px;
    }
`;
const Styledcontanier = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
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
const Styledtime = styled.div`
  display: flex;
  flex-direction: column;
  width: 45px;
  text-align:center;
  line-height:25px;
`;
const Styledtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 60px;
  @media (max-width:1027px ) and (min-width: 767px){
    height: 50px;
    }

    @media (max-width: 767px){
    height: 45px;
    } 
`;
const StyledButton = styled.button`
  border-radius: 12px;
  padding: 10px;
  width: 25%;
  background-color: #2A3248;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Changa;
  outline: none;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #2A3248;
    border: 1px solid #2A3248;
  }

  @media (max-width: 767px) {
    transform: translate(20px, 0px);
  }
`;


function TasksContent() {
  return (
    <>
      {AssignmentData.map((card, index) => (
        <StyledtimeContainer key={index} style={{height:"150px" , display:"inline-block"}}>
          <h1>{card.Assignmentdate}</h1>
          <Styledcontanier>

            <StyledRightcontanier>
           
              <Styledtime>
              <h4>{card.AssignmentTime}</h4>
              </Styledtime>

              <Stylediconcontainer>
                <Styledicon/>
              </Stylediconcontainer>

              <Styledtitle>
                <h1>{card.AssignmentNumber}</h1>
                <h5 style={{ color: "#6D778A" }}>{card.Assignmentsubject}</h5>
              </Styledtitle>
              
            </StyledRightcontanier>

            <StyledButton>عرض النتائج</StyledButton>

          </Styledcontanier>
        </StyledtimeContainer>
      ))}
    </>
  );
}

const LastTasksContent = () => {
  return (
    <>
    <StyledtimeContainer>

        <Styledbutton>الأيام السبعة القادمين<Styledarrowicon/></Styledbutton> 

        <Styledinputcontainer>
            <Styledsearchicon/>
            <input  type="text" placeholder="ابحث عن أسايمنت معين باستخدام العنوان، تاريخ التسليم.."/>
        </Styledinputcontainer>
        
      </StyledtimeContainer>

      <TasksContent />
    </>
  )
}

export default LastTasksContent