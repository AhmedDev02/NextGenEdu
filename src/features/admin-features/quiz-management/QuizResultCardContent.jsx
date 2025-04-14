import styled from "styled-components";



const QuizData = [
  
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "17",
     FinalDegree:" 20",
   
    },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "17",
   FinalDegree:" 20",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "17",
   FinalDegree:" 20",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "17",
   FinalDegree:" 20",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "17",
   FinalDegree:" 20",
 
  },
  {
    StudentName: "إسلام ايهاب محمد لطفي (123456789)",
    StudentDegree: "17",
   FinalDegree:" 20",
 
  },
];

const Styledcardborder = styled.div`
 
  margin:auto;
  width: 70%;
  height: 45px;
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
    height: 45px;
  }
  @media (max-width:1024px ) and (min-width: 769px){
    width:80%;
    gap:5px;
    height: 45px;
    justify-content: space-between;
  }
`;


         
       

function QuizResultCardContent() {
  return (
    <>
      {QuizData.map((card, index) => (
        <Styledcardborder  key={index}>
     
         <h5 style={{width:"42%"}}>{card.StudentName}</h5>
          <h5 style={{width:"29%" ,display:"flex" , justifyContent:"center" ,marginInlineStart:"20px"}} >{card.StudentDegree}</h5>
          <h5 style={{width:"29%" ,display:"flex" , justifyContent:"flex-end" , marginInlineEnd:"20px"}} >{card.FinalDegree} </h5>
       
        </Styledcardborder>
      ))}
    </>
  );
}

export default QuizResultCardContent;
