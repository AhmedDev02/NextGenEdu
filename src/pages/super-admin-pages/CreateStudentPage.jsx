import CreateStudentForm from "../../features/super-admin-features/super-students-management/CreateStudentForm";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const CreateStudentPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.CREATE_STUDENT.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.CREATE_STUDENT.description}
        button={true}
      />
      <CreateStudentForm />
    </>
  );
};

export default CreateStudentPage;
