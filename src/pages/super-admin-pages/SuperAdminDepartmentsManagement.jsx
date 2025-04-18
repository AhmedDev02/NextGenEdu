import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES} from "../../utils/constants";
import SuperAdminDeptManage from "../../features/super-admin-features/super-department-management/SuperAdminDeptManage"

function SuperAdminDepartmentsManagement() {
  return (
    <>
    <ContentHeader
      title={ SUPER_ADMIN_PAGES_PROPERTIES.ADD_MATERIAL.title}
      description={ SUPER_ADMIN_PAGES_PROPERTIES.ADD_MATERIAL.description}
      button={false}
    />
    <SuperAdminDeptManage/>
  </>
  )
}

export default SuperAdminDepartmentsManagement;


