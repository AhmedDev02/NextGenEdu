import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_ITEMS } from "../../utils/constants";

function AdminDashboard() {
  return (
    <>
      <ContentHeader
        title={ADMIN_ITEMS.DASHBOARD}
        description={ADMIN_ITEMS.DASHBOARD}
        button={false}
      />
    </>
  );
}

export default AdminDashboard;
