import StudentsManagementContent from "../../features/admin-features/students-management/StudentsManagementContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function StudentsManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.STUDENT_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.STUDENT_ADMIN.description}
        button={false}
      />
      <StudentsManagementContent />
    </>
  );
}

export default StudentsManagement;
