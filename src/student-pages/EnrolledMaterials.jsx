import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function EnrolledMaterials() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.ENROLLED_MATERIALS.title}
        description={STUDENT_PAGES_PROPERTIES.ENROLLED_MATERIALS.description}
        button={false}
      />
    </>
  );
}

export default EnrolledMaterials;
