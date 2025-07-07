import TeachersManagementContent from "../../features/super-admin-features/super-teachers-management/TeachersManagementContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const SuperTeacherManagementPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.TEACHERS_MANAGEMENT.title}
        description={
          SUPER_ADMIN_PAGES_PROPERTIES.TEACHERS_MANAGEMENT.description
        }
        button={false}
      />
      <TeachersManagementContent />
    </>
  );
};

export default SuperTeacherManagementPage;
