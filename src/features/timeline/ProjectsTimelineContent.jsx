
import Button from "../../ui/Button";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import ProjectsTimelineCard from "./ProjectsTimelineCard"



const StyledtimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  width: 950px;
  height: 75px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding: 20px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;
const Styledsearchbutton= styled.button`
  padding-inline:16px;
  background-color: #f1f1f1;
  border-radius: 12px;
  width:350px;
  height:46px;
  color:#6D778A;
  font-size:15px;
  font-weight:500;
  line-height:36.8px;
  font-family:Changa;
  text-align:right;
  outline:none;
  border:0;
`;


const Styledarrowicon =styled(SlArrowDown)`
  font-size:15px;
  transform:translate(-5px,2px);

`
const Styledsearchicon =styled(GoSearch)`
  font-size:13px;
  transform:translate(5px,2px);

`
function ProjectsTimelineContent (){
return<>
<StyledtimeContainer>
<Button style={{borderRadius:"10px",height:"44px" ,}}>الأيام السبعة القادمين <Styledarrowicon/> </Button>
<Styledsearchbutton >  <Styledsearchicon /> البحث حسب نوع النشاط والاسم </Styledsearchbutton>
<Button style={{borderRadius:"10px",height:"44px" ,}}>اختبارات  (كويز)  <Styledarrowicon /></Button>
</StyledtimeContainer>
 
<ProjectsTimelineCard></ProjectsTimelineCard>

</> 

}


export default ProjectsTimelineContent;