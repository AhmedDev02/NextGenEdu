import UpdateTeacherForm from "../../features/super-admin-features/super-teachers-management/UpdateTeacherForm";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const EditTeacherPage = () => {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_TEACHER.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.EDIT_TEACHER.description}
        button={true}
      />
      <UpdateTeacherForm />
    </>
  );
};

export default EditTeacherPage;
