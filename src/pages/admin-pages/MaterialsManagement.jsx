import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function MaterialsManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.MATERIALS_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.MATERIALS_ADMIN.description}
        button={false}
      />
    </>
  );
}

export default MaterialsManagement;
