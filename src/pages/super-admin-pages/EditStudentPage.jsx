import UpdateStudentForm from "../../features/super-admin-features/super-students-management/UpdateStudentForm";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const EditStudentPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_STUDENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_STUDENT.description}
        button={true}
      />
      <UpdateStudentForm />
    </>
  );
};

export default EditStudentPage;
