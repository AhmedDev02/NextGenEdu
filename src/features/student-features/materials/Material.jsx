import ContentHeader from "../../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../../utils/constants";
import MaterialDetails from "./MaterialDetails";
import { useMaterial } from "./useMaterial";

function Material() {
  const { material } = useMaterial();

  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.MATERIAL.title}
        subject={material?.subject}
        description={STUDENT_PAGES_PROPERTIES.MATERIAL.description}
        button={true}
      />
      <MaterialDetails />
    </>
  );
}

export default Material;
