import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { CiTextAlignJustify } from "react-icons/ci";
import { SlArrowLeft } from "react-icons/sl";



const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color:transparent;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  align-items: flex-start;
`;
const NewsIcon = styled(HiOutlineNewspaper)`

  font-size: 22px;
  position: absolute;
  transform: translate(-5px, -25px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 22px;
    transform: translate(-5px, -23px);
    }

  @media (max-width:767px ){
  font-size: 20px;
  transform: translate(-5px, -23px);
  }

`;
const TextIcon = styled(CiTextAlignJustify)`

  font-size: 22px;
  position: absolute;
  transform: translate(-7px,40px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 18px;
    transform: translate(-7px, 38px);
    }

  @media (max-width:767px ){
  font-size: 16px;
  transform: translate(-7px, 34px);
  }

`;
const ArrowIcon = styled(SlArrowLeft)`

  font-size: 17px;
  position: absolute;
  transform: translate(-250px,12px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 18px;
    transform: translate(-7px, 38px);
    }

  @media (max-width:767px ){
  font-size: 16px;
  transform: translate(-7px, 34px);
  }

`;
const ControlledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color:transparent;
  margin:auto;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;
const ControlledInput = styled.input`
  min-width: 40%;
  padding: 10px;
  padding-inline:30px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
  font-weight:600;
  overflow: visible;
  text-overflow: ellipsis;
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  padding-inline: 32px;
  border: none;
  font-weight:600;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 120px;
  resize: none;
  font-size: 18px;
  margin:auto;
  box-shadow: var(--shadow-primary);
`;
const LastDiv = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  margin-top:40px;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color:transparent;
`;
const LastDiv2 = styled.div`
  display: flex;
  width: 100%;
  margin-top:15px;
  border-radius: 12px;
  font-family: "Changa", sans-serif;
  background-color:transparent;
`;
const StyledSelect = styled.select`
  height: 40px;
  padding: 5px;
  background: transparent;
  color: black;
  margin-inline:10px;
  border: 1px black solid;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight:600;
  text-align: right;
  

  &:focus {
    background: #ffffff;
    outline: none;
  }
`;

const StyledOption = styled.option`
  color: black;
`;
const Styledbutton = styled.button`
  width: 15%;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #FF3D60, #B82D42);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: Changa;
  margin-left:10px;

  &:focus {
    background: #ffffff;
    color: black;
  }
  
  @media (max-width:760px ){
  font-size: 10px;
  font-weight: 500;
  line-height:12px;
  
  }
  @media (max-width:1027px ) and (min-width: 760px){
    
    font-size: 12px;
  
  }
 
`;

const options = ["2025/01/29", "2025/01/28", "2025/01/27", "2025/01/26"];


const CreateTasksContent = () => {
  return (
      <>
    <CreateContainer>

    <ControlledContainer>
        <Div>
          <Label for="time">عنوان الأسايمنت</Label>
          <NewsIcon></NewsIcon>
          <ControlledInput
            name="title"
            type="text"
            placeholder=" أدخل عنوانًا يعبر عن محتوى الأسايمنت بشكل واضح."
          />
        </Div>
        <Div>
          <Label for="time">درجة الأسايمنت</Label>
          <ControlledInput
            name="degree"
            type="number"
            min="0"
            defaultValue={5}
            style={{padding: "10px"}}
          />
        </Div>
       </ControlledContainer>
       
       <InputContainer>
        <Label for="description">وصف الأسايمنت</Label>
        <TextIcon />
        
        <Textarea
          name="description"
          placeholder="قدم شرحًا تفصيليًا حول المطلوب في الأسايمنت، مع أي تعليمات إضافية."
        />
      </InputContainer>

      <LastDiv>
        <h1>الموعد النهائي</h1>
        <p style={{marginTop:"10px"}}>⏰ حدد الموعد النهائي لتسليم الأسايمنت وتوقيت إغلاقه.</p>
        
        <LastDiv2>
          <h5 style={{width:"10%",backgroundColor:"transparent",textAlign:"center",padding:"8px"}}>يبدأ في</h5>

      
        <StyledSelect defaultValue="" style={{width:"22%"}}>
          
              <StyledOption value="" disabled>2025/01/25</StyledOption>
              {options.map((option, index) => (
             <StyledOption key={index} value={option}>
             {option}
             </StyledOption>
             ))}
             
        </StyledSelect>

        <StyledSelect defaultValue="" style={{width:"17%"}}>
          
              <StyledOption value="" disabled>12:10 ص</StyledOption>
              {options.map((option, index) => (
             <StyledOption key={index} value={option}>
             {option}
             </StyledOption>
             ))}
             
        </StyledSelect>


          <h5 style={{width:"12%",backgroundColor:"transparent",textAlign:"center",padding:"8px"}}>ينتهي في</h5>


          <StyledSelect defaultValue="" style={{width:"22%"}}>
          
            <StyledOption value="" disabled>2025/01/25</StyledOption>
            {options.map((option, index) => (
            <StyledOption key={index} value={option}>
            {option}
            </StyledOption>
            ))}
            
        </StyledSelect>

    <StyledSelect defaultValue="" style={{width:"17%"}}>
      
          <StyledOption value="" disabled>12:10 ص</StyledOption>
          {options.map((option, index) => (
         <StyledOption key={index} value={option}>
         {option}
         </StyledOption>
         ))}
        
    </StyledSelect>

        </LastDiv2>

         <LastDiv2 style={{justifyContent:"flex-end"}}>
         <Styledbutton>نشر !</Styledbutton>
         </LastDiv2>
        

      </LastDiv>


      </CreateContainer>
    </>
  )
}

export default CreateTasksContent