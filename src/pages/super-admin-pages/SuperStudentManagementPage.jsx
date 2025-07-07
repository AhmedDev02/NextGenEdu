import StudentsManagementContent from "../../features/super-admin-features/super-students-management/StudentsManagementContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const SuperStudentManagementPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.STUDENTS_MANAGEMENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.STUDENTS_MANAGEMENT.description}
        button={false}
      />
      <StudentsManagementContent />
    </>
  );
};

export default SuperStudentManagementPage;
