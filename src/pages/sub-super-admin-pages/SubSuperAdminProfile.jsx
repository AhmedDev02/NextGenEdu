import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";
import ContentHeader from "../../ui/ContentHeader";
import SuperAdminProfileContent from "../../features/super-admin-features/super-profile/SuperAdminProfileContent";

function SubSuperAdminProfile() {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.PROFILE.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.PROFILE.description}
        button={false}
      />
      <SuperAdminProfileContent />
    </>
  );
}

export default SubSuperAdminProfile;
