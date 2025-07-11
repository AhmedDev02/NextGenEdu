import SuperDepartmentContent from "../../features/super-admin-features/super-department-management/SuperDepartmentContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function SuperAdminDepartmentsManagement() {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.description}
        button={false}
      />
      <SuperDepartmentContent />
    </>
  );
}

export default SuperAdminDepartmentsManagement;
