import AdminProfileContent from "../../features/admin-features/admin-profile/AdminProfileContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function AdminProfile() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.PROFILE.title}
        description={ADMIN_PAGES_PROPERTIES.PROFILE.description}
        button={false}
      />
      <AdminProfileContent />
    </>
  );
}

export default AdminProfile;
