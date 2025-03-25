import ContentHeader from "../../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../../utils/constants";
import CurriculumContent from "./CurriculumContent";

function Curriculum() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.CURRICULUM.title}
        description={ADMIN_PAGES_PROPERTIES.CURRICULUM.description}
        subject={"مادة الOOP"}
        button={true}
      />
      <CurriculumContent />
    </>
  );
}

export default Curriculum;
