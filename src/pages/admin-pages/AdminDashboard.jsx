import DashboardContent from "../../features/admin-features/dashboard/DashboardContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function AdminDashboard() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.DASHBOARD.title}
        description={ADMIN_PAGES_PROPERTIES.DASHBOARD.description}
        button={false}
      />
      <DashboardContent />
    </>
  );
}

export default AdminDashboard;
