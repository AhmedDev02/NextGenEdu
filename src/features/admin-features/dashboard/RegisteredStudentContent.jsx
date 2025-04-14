import styled from "styled-components";



const QuizData = [
  
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
    {
      StudentName: "إسلام ايهاب محمد لطفي (123456789)",
      StudentDegree: "سكشن 6",
     FinalDegree:" مستجد",
   
    },
  
];

const Styledcardborder = styled.div`
 box-shadow: var(--shadow-primary);
  margin:auto;
  width: 70%;
  height: 45px;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
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


         
       

function RegisteredStudentContent() {
  return (
    <>
      {QuizData.map((card, index) => (
        <Styledcardborder  key={index}>
     
         <h5 style={{width:"42%"}}>{card.StudentName}</h5>
          <h5 style={{width:"29%" ,display:"flex" , justifyContent:"center" ,}} >{card.StudentDegree}</h5>
          <h5 style={{width:"29%" ,display:"flex" , justifyContent:"flex-end" , }} >{card.FinalDegree} </h5>
       
        </Styledcardborder>
      ))}
    </>
  );
}

export default RegisteredStudentContent;
