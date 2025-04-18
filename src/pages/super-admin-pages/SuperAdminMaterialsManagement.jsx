import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES} from "../../utils/constants";
import SuperAdminMaterialManage from "../../features/super-admin-features/super-material-management/SuperAdminMaterialManage"

function SuperAdminMaterialsManagement() {
  return (
    <>
    <ContentHeader
      title={ SUPER_ADMIN_PAGES_PROPERTIES.DETAILS_MATERIAL.title}
      description={ SUPER_ADMIN_PAGES_PROPERTIES.DETAILS_MATERIAL.description}
      button={false}
    />
    <SuperAdminMaterialManage/>
  </>
  )
}

export default SuperAdminMaterialsManagement;




