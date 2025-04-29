import { useParams } from "react-router-dom";
import ContentHeader from "../../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../../utils/constants";
import CurriculumContent from "./CurriculumContent";
import { useUser } from "../../../hooks/useUser";

function Curriculum() {
  const { user } = useUser();
  const { curriculumId } = useParams(); // Get the 'id' from the URL
  const materialName = user.courses.data.filter((materialId) => {
    console.log(materialId.id);
    return +materialId.id === +curriculumId;
  })[0].name;

  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.CURRICULUM.title}
        description={ADMIN_PAGES_PROPERTIES.CURRICULUM.description}
        subject={"مادة " + materialName}
        button={true}
      />
      <CurriculumContent />
    </>
  );
}

export default Curriculum;
