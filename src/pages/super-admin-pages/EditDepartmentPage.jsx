import EditDepartment from "../../features/super-admin-features/super-department-management/EditDepartment";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const EditDepartmentPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_DEPT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_DEPT.description}
        button={true}
      />
      <EditDepartment />
    </>
  );
};

export default EditDepartmentPage;
