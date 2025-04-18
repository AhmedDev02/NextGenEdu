import styled from "styled-components";
import { HiOutlineNewspaper } from "react-icons/hi2";


const NewsIcon = styled(HiOutlineNewspaper)`

  font-size: 22px;
  position: absolute;
  transform: translate(-5px, 39px);

  @media (max-width:1027px ) and (min-width: 767px){
    font-size: 20px;
    transform: translate(-5px, 37px);
    }

  @media (max-width:767px ){
  font-size: 20px;
  transform: translate(-5px, 34px);
  }

`;

const ControlledContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 70%;
  flex-wrap: wrap;
  background-color:transparent;
  margin:auto;

  @media (max-width:1027px ) and (min-width: 767px){
    width: 80%;
    }

  @media (max-width:767px ){
  width: 90%;
  }
`;
const Div = styled.div`
  display: flex;
  width: calc(50% - 10px);
  flex-direction: column;
  background-color:transparent;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
`;
const ControlledInput = styled.input`
  padding: 10px;
  width:100%;
  padding-inline:30px;
  height:40px;
  border: none;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-primary);
  font-weight:600;
  overflow: visible;
  text-overflow: ellipsis;
`;

const StyledSelect = styled.select`
  padding: 5px;
  color: black;
  height:40px;
  width:100%;
  
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow-primary);
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

const options = ["ثروت", "عمرو", "رياض", "ساره"];


const Styledbutton = styled.button`
  width: 15%;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #30BD58, #399F63);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: Changa;
  

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



const SuperAdminDeptManage = () => {
    return (
        <>
      
  
      <ControlledContainer>
          <Div>
            <Label for="time">إسم القسم</Label>
            <NewsIcon></NewsIcon>
            <ControlledInput
              name="title"
              type="text"
              placeholder=" أضف إسم القسم الجديد"
            />
          </Div>
          <Div>
            <Label for="time">رئيس القسم</Label>
            <StyledSelect defaultValue="">
          
              <StyledOption value="" disabled>يرجي تحديد رئيس القسم</StyledOption>
              {options.map((option, index) => (
             <StyledOption key={index} value={option}>
             {option}
             </StyledOption>
             ))}
             
        </StyledSelect>
          </Div>

          <Div style={{justifyContent:"flex-end" , width:"100%" , flexDirection:"row"}}>
             <Styledbutton>حفظ</Styledbutton>
         </Div>

         </ControlledContainer>
         
         
         
  
        
      </>
    )
  }
  
  export default SuperAdminDeptAdd;