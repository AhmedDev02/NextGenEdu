import SuperAdminDashboardContent from "../../features/super-admin-features/super-dashboard/SuperAdminDashboardContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function SuperAdminDashboard() {
  return (
    <>
      <ContentHeader
        title={SUPER_ADMIN_PAGES_PROPERTIES.DASHBOARD.title}
        description={SUPER_ADMIN_PAGES_PROPERTIES.DASHBOARD.description}
        button={false}
      />
      <SuperAdminDashboardContent />
    </>
  );
}

export default SuperAdminDashboard;
