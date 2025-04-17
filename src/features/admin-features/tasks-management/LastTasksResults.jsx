import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


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
const Styledbegin = styled.div`
  box-shadow: var(--shadow-primary);
  margin:auto;
  width: 70%;
  height: 50px;
  background-color: lightgray;
  border-radius: 15px 15px 15px 15px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:760px ){
    width:95%;
    gap:1px;
    justify-content: space-between;
    height: 50px;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px;
    height: 50px;
  }
`;
const Styledinsidebegin = styled.div`
  
  width: calc(50% - 10px);
  height: 50px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding-inline:15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:760px ){
    width: calc(50% - 10px);
    gap:1px;
    justify-content: space-between;
    height: 50px;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width: calc(50% - 10px);
    gap:5px;
    height: 50px;
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
const Styledinputcontainer = styled.div`

  position: relative;
  display: inline-block;
  width: 80%;

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

const Styledsearchicon = styled(GoSearch)`
  font-size: 17px;
  position: absolute;
  transform: translate(-10px, 14px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 16px;
    transform: translate(-25px, 15px);
    }

  @media (max-width:767px ){
  font-size: 13px;
  transform: translate(-25px, 16px);
  }
`;
const Styledcardborder = styled.div`
 
  margin:auto;
  width: 70%;
  height: 60px;
  background-color: transparent;
  border-radius: 8px 8px 8px 8px;
  border:1px solid black;
  padding:10px;
  display: flex;
  justify-content:space-between;
  align-items: center;

  @media (max-width:760px ){
    width:95%;
    gap:1px;
    justify-content: space-between;
    height: 60px;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px;
    height: 60px;
    justify-content: space-between;
  }
`;

const ResultData = [
  
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "5",
      FinalDegree:" 5",
   
    },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "5",
    FinalDegree:"5",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "5",
    FinalDegree:" 5",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "5",
    FinalDegree:" 5",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "5",
    FinalDegree:" 5",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "5",
    FinalDegree:" 5",
 
  },
];


const LastTasksResults = () => {
    return ( <>
     
     <Styledbegin>

     <Styledinsidebegin>
        <h1>عدد الطلاب الذين قاموا بتسليم الأسايمنت</h1>
        <h1>151</h1>
     </Styledinsidebegin>

     <Styledinsidebegin>
     <h1>تحديد الكل و إعطاء درجة</h1>
     <Styledinsidebegin style={{width:"45%" , backgroundColor:"transparent",padding:"8px" ,gap:"7px"}}>
        <input type="number" placeholder="5" style={{width:"50%" , backgroundColor:"lightgray",borderRadius: "12px" ,height:"40px",textAlign:"center",outline:"none",border:"0",color:"black"}}/>
        <Styledbutton style={{width:"50%" ,height:"40px" ,paddingInline:"0px",background:"linear-gradient(to bottom, #FF3D60, #B82D42)"}}>تقييم</Styledbutton>
     </Styledinsidebegin>

     </Styledinsidebegin>
            
    </Styledbegin>

          <StyledtimeContainer>

        <Styledinputcontainer>
            <Styledsearchicon/>
            <input  type="text" placeholder="ابحث عن أسايمنت معين باستخدام العنوان، تاريخ التسليم.."/>
        </Styledinputcontainer>

            <Styledbutton >بحث</Styledbutton>
           
          </StyledtimeContainer>

         <Styledcard>
          <h5 style={{width:"40%",backgroundColor:"transparent"}}>الإسم</h5>
          <h5 style={{width:"15%",backgroundColor:"transparent",textAlign:"center"}}>الأسايمنت</h5>
          <h5 style={{width:"10%",backgroundColor:"transparent",textAlign:"center"}}>درجة الطالب</h5>
          <h5 style={{width:"10%",backgroundColor:"transparent",textAlign:"center"}}>الدرجة</h5>
          <h5 style={{width:"25%",backgroundColor:"transparent",textAlign:"left",paddingLeft:"40px"}}>إضافة تقييم</h5>
         </Styledcard>
         
         <LastTasksResultsCards />

     </>
   
    )
  }

  function LastTasksResultsCards() {
    return (
      <>
        {ResultData.map((card, index) => (
          <Styledcardborder  key={index}>
            
          <h5 style={{width:"40%",backgroundColor:"transparent"}}>{card.StudentName}</h5>
          
          <h5 style={{width:"15%",backgroundColor:"transparent",textAlign:"center"}}>
          <Styledbutton style={{width:"80%"  ,paddingInline:"0px",background:"linear-gradient(to bottom, #FF3D60, #B82D42)"}}><FaArrowUpRightFromSquare style={{marginInline:"5px",transform: "translate(0px, 3px)" }} />
          عرض</Styledbutton>
          </h5>
          
          <h5 style={{width:"10%",backgroundColor:"transparent",textAlign:"center"}}>{card.StudentDegree}</h5>
          <h5 style={{width:"10%",backgroundColor:"transparent",textAlign:"center"}}>{card.FinalDegree}</h5>
        
        <h5 style={{width:"25%",backgroundColor:"transparent",paddingLeft:"25px"}}>
          
        <Styledinsidebegin style={{width:"85%" , backgroundColor:"transparent",padding:"8px" ,gap:"7px",marginRight:"32%",textAlign:"left"}}>
        <input type="number" placeholder="5" style={{width:"50%" , backgroundColor:"lightgray",borderRadius: "12px" ,height:"40px",textAlign:"center",outline:"none",border:"0",color:"black"}}/>
        <Styledbutton style={{width:"50%" ,height:"40px" ,paddingInline:"0px",background:"linear-gradient(to bottom, #FF3D60, #B82D42)"}}>تقييم</Styledbutton>
        </Styledinsidebegin>

        </h5>

         
          </Styledcardborder>
        ))}
      </>
    );
  }

export default LastTasksResults;