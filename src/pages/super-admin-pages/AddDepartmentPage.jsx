import AddDepartment from "../../features/super-admin-features/super-department-management/AddDepartment";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddDepartmentPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.DEPARTMENT.description}
        button={true}
      />
      <AddDepartment />
    </>
  );
};

export default AddDepartmentPage;
