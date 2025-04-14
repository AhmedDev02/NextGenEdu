import styled from "styled-components";
import RegisteredStudentContent from "./RegisteredStudentContent"




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
    justify-content: space-around;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px
   
  }
`;

const Styledcard = styled.div`
 
  margin:auto;
  width: 70%;
  height: 20px;
  background-color: transparent;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:760px ){
    width:95%;
    gap:1px;
    justify-content: space-between;
    height: 20px;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px;
    height: 20px;
    justify-content: space-between;
  }
`;

const Styledbutton = styled.button`
  padding-inline: 16px;
  background: linear-gradient(to bottom, #30BD58, #399F63);
  border-radius: 12px;
  width: 12%;
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
  width:15%;
  
    
  }
  @media (max-width:1027px ) and (min-width: 760px){
    width:15%;
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
  width: 80%;
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
  width: 80%;
  text-align: center;
  }
  @media (max-width:1027px ) and (min-width: 760px){
    font-size: 12px;
    width: 80%;
   
  }
`;




function RegisteredStudent(){
    return (
        <>
          
          <StyledtimeContainer>
            
            <Styledsearchbutton type="text" placeholder='   أدخل اسم الطالب أو رقم هويته لعرض بياناته.. ' >
            </Styledsearchbutton>
            <Styledbutton >
            بحث
            </Styledbutton>
           
          </StyledtimeContainer>
         <Styledcard>
          <h5 style={{width:"42%"}}>الإسم</h5>
          <h5 style={{width:"29%" ,display:"flex" , justifyContent:"center"}} >السكشن</h5>
          <h5 style= {{ width:"29%" ,display:"flex" , justifyContent:"flex-end"}}>الحاله</h5>
         </Styledcard>
         <RegisteredStudentContent/>
         
        </>
      );
}


export default RegisteredStudent;