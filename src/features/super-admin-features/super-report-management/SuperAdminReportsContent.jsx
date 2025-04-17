import styled from "styled-components";
import SuperAdminReportsCard from "./SuperAdminReportsCard"
const StyledtimeContainer = styled.div`
  margin:auto;
  width: 75%;
  background-color: transparent;
  border-radius: 15px 15px 15px 15px;
  padding: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:2px;
  @media (max-width:760px ){
    width:95%;
    gap:5px;
    
  }
  @media (max-width:1224px ) and (min-width: 769px){
    width:90%;
    gap:0px
   
  }`

const Styledbutton = styled.button`
padding-inline: 30px;
background-color:transparent;
border-radius: 15px;
color: #6D778A;
font-size: 15px;
font-weight: 500;
line-height: 36.8px;
font-family: Changa;
outline: none;
border: 2px #6D778A solid;
 @media (max-width:760px ){
font-size: 10px;
font-weight: 500;
line-height:12px;

padding-inline: 10px;
  
}
@media (max-width:1027px ) and (min-width: 760px){
  padding-inline: 5px;
  font-size: 12px;

}
&:focus{
  background:#d9f3e8;
  color:#30BD58;
  outline: none;
  border:2px #30BD58 solid;
}
`;
const Stylereddbutton = styled.button`
padding: 5px;
width:85%;
background: linear-gradient(to bottom, #FF3D60, #B82D42);
border-radius: 10px;
color: #ffffff;
font-size: 16px;
font-weight: 500;
line-height: 36.8px;
font-family: Changa;
outline: none;
border:0;
margin:auto;
 @media (max-width:760px ){
font-size: 10px;
font-weight: 500;
line-height:12px;
width:95%;
padding: 3px;
  
}
@media (max-width:1027px ) and (min-width: 760px){
  padding: 3px;
  font-size: 12px;
  width:90%;
}

&:focus{
  border:0;
  outline:0;
}

`;
 


function SuperAdminReportsContent(){
  return (
    <>
      <StyledtimeContainer>
        <Styledbutton style={{width:"17%"}} >إعدادي هندسة</Styledbutton>
        <Styledbutton style={{width:"19.5%"}}>الهندسة المعمارية</Styledbutton>
        <Styledbutton style={{width:"19%"}}>الهندسة المدنية</Styledbutton>
        <Styledbutton style={{width:"23%"}}>هندسة الحاسبات والنظم</Styledbutton>
        <Styledbutton style={{width:"19.5%"}}>الهندسة الكهربائية</Styledbutton> 
      </StyledtimeContainer>
     
      <SuperAdminReportsCard />
      
     
     
    </>
  );
}

export default SuperAdminReportsContent;
