import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

import ScheduledQuizCard2 from "./ScheduledQuizCard2"


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

  @media (max-width:760px ){
    width:95%;
    gap:1px;
    justify-content: space-between;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px
   
  }
`;
const Styledbutton = styled.button`
  padding-inline: 16px;
  background: linear-gradient(to bottom, #30BD58, #399F63);
  border-radius: 12px;
  width: 30%;
  height: 46px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 36.8px;
  font-family: Changa;
  outline: none;
  border: 0;
   @media (max-width:760px ){
  font-size: 10px;
  font-weight: 500;
  line-height:12px;
  width:33%;
  
    
  }
  @media (max-width:1027px ) and (min-width: 760px){
    width:33%;
    font-size: 12px;
  
  }
  &:focus{
    background:#ffffff;
    color:black
  }
`;
const Styledsearchbutton = styled.input`
  padding-inline: 16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  width: 65%;
  height: 46px;
  color: #6d778a;
  font-size: 15px;
  font-weight: 500;
  line-height: 36.8px;
  font-family: Changa;
  text-align: right;
  outline: none;
  border: 0;
   @media (max-width:760px ){
    font-size: 10px;
  font-weight: 500;
  line-height:12px;
  width: 65%;
  text-align: center;
  }
  @media (max-width:1027px ) and (min-width: 760px){
    font-size: 12px;
    width: 65%;
   
  }
`;

const Styledarrowicon = styled(SlArrowDown)`
 font-size: 13px;
 transform: translate(0px, 2px);
`;



function ScheduledQuizCard(){
    return (
        <>
          <StyledtimeContainer>
            <Styledbutton >
             السبعة الأيام القادمين<Styledarrowicon />
            </Styledbutton>
            <Styledsearchbutton type="text" placeholder=' ابحث عن كويز معين باستخدام العنوان أو التاريخ أو الحالة.. ' >
            </Styledsearchbutton>
           
          </StyledtimeContainer>
         <ScheduledQuizCard2></ScheduledQuizCard2>
        </>
      );
}


export default ScheduledQuizCard;