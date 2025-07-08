import CreateTeacherForm from "../../features/super-admin-features/super-teachers-management/CreateTeacherForm";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const CreateTeacherPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.CREATE_TEACHER.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.CREATE_TEACHER.description}
        button={true}
      />
      <CreateTeacherForm />
    </>
  );
};

export default CreateTeacherPage;
