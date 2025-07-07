import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";
import SuperMaterialContent from "../../features/super-admin-features/super-material-management/SuperMaterialContent";

function SuperAdminMaterialsManagement() {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.DETAILS_MATERIAL.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.DETAILS_MATERIAL.description}
        button={false}
      />
      <SuperMaterialContent />
    </>
  );
}

export default SuperAdminMaterialsManagement;
