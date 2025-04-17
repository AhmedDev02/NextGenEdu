import styled from "styled-components";
import {useState} from "react";
import { HiOutlineUpload } from "react-icons/hi";
import Button from "../../../ui/Button"
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
const StyledMatrialContainer = styled.div`
  margin:auto;
  width: 45%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform:translateY(-20px);
  @media (max-width:760px ){
    width:90%;
    gap:5px;
    transform:translateY(-10px);
  }
  @media (max-width:1224px ) and (min-width: 769px){
    width:60%;
    gap:0px
   
  }`
const StyledContainer = styled.div`
  margin:auto;
  width: 85%;
  background-color: transparent;
  height:156px;
  border-radius: 15px 15px 15px 15px;
  padding: 0px;
  display: flex;
  flex-direction:column;
  position:relative;
  align-items: center;
  gap:2px;
  border:2px black solid;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 11px;
    width: 10px;
    height: 85%;
    background-color: #2A3248;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  @media (max-width:760px ){
    width:95%;
    gap:5px;
    padding: 10px;
    height:156px;
  }
  @media (max-width:1224px ) and (min-width: 769px){
    width:90%;
    gap:0px
   
  }`
const Styledinner = styled.div`
  margin:auto;
  width: 93%;
  background-color: #ffff;
  height:60px;
  border-radius: 12px 12px 12px 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:760px ){
    padding: 10px;
    height:45px;
  }
  @media (max-width:1224px ) and (min-width: 769px){
    padding: 15px;
   
  } ` 

const Styleddiv = styled.div`
display:flex;
justify-content:flex-start;
width:85%;
margin:auto;
font-size: 15px;
font-weight: 500;
line-height: 36.8px;
font-family: Changa;

@media (max-width:760px ){
width:95%;
padding: 3px;
}
@media (max-width:1027px ) and (min-width: 760px){
  width:90%;
}
`;
const StyledMatrialDiv = styled.div`
text-align:center;
margin:auto;
font-size: 20px !important;
font-weight: 700;
line-height: 36.8px;
font-family: Changa;
background-color:#ffff;
border-radius:15px;
padding:5px 20px;


`;
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
 
const Styleddownloadicon = styled(HiOutlineUpload )`
 font-size: 13px;
 transform: translate(-9px, 4px);
`;
const Styleddp= styled.h6`
 font-size: 10px !important;;
 transform: translate(-120px, -10px);

 @media (max-width:760px ){
  font-size: 8px !important;;
  transform: translate(-85px, -10px);
  
}
@media (max-width:1027px ) and (min-width: 760px){
  font-size: 10px !important;;
  transform: translate(-105px, -10px);
  }
`;
const Styledh1= styled.h1`
 font-size: 16px !important;;
 

 @media (max-width:760px ){
  font-size: 8px !important;;
  
  
}
@media (max-width:1027px ) and (min-width: 760px){
  font-size: 10px !important;}
  
`;


const  SuperAdminReportsCard = () =>{
  const [activeDiv ,setActiveDiv]=useState(1);
  return (
    <>
     <StyledtimeContainer >
        <Styledbutton onClick={()=>setActiveDiv(1)} style={{width:"32.5%"}} >الطلاب</Styledbutton>
        <Styledbutton onClick={()=>setActiveDiv(2)} style={{width:"32.5%"}} >الأساتذة والمعيدين </Styledbutton>
        <Styledbutton onClick={()=>setActiveDiv(3)} style={{width:"32.5%"}} > المواد</Styledbutton>
      </StyledtimeContainer>

      <Stylereddbutton  > رفع فايل “Excel” <Styleddownloadicon size={18} ></Styleddownloadicon ></Stylereddbutton>
      {activeDiv===1 &&(
        <>
        <Styleddiv><h1 >عرض تقرير شامل عن الطلاب</h1></Styleddiv>
        <StyledContainer>
          <Styledinner>
            <h1>عدد  الطلاب المسجلين</h1>
            <h1>301 طالب</h1>
          </Styledinner>
          <Styledinner>
            <h1>إجمالي نسبة حضور الطلاب</h1>
            <h1>67%</h1>
          </Styledinner>
          
        </StyledContainer>
        </>

      )}
      {activeDiv===2 &&(

 <>
  <Styleddiv><h1>عرض تقرير عن الدكاترة والمعيدين </h1></Styleddiv>
 <StyledContainer>
   <Styledinner>
     <h1>
عدد المواد التي يدرّسها كل دكتور
  </h1>
     <h1>3 مواد</h1>
   </Styledinner>
   <Styledinner>
     <h1> عدد المواد التي يدرّسها كل معيد </h1>
     <h1>4  سكاشن</h1>
   </Styledinner>
   
 </StyledContainer>
 </>
      )}
      {activeDiv===3 &&(

 <>
  <Styleddiv><h1 >عرض تقرير عن المواد</h1></Styleddiv>
<StyledContainer >
  <Styledinner style={{backgroundColor:"transparent"}}>
    <h1>
    أكثر المواد صعوبة  <Styleddp>(بناءً على نسب النجاح والرسوب)</Styleddp>
 </h1>
  </Styledinner>
 <StyledMatrialContainer >
  <StyledMatrialDiv>Math 2</StyledMatrialDiv>
  <StyledMatrialDiv>Math1</StyledMatrialDiv>
  <StyledMatrialDiv>Data Structure</StyledMatrialDiv>
 </StyledMatrialContainer>
  
  
 

</StyledContainer>
</>
      )}
     <div style={{textAlign:"left",  width:"80%" }}>
     <Button variation="secondary">طباعة</Button>
     </div>
      
     
     
    </>
  );
}

export default SuperAdminReportsCard;
