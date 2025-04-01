import AdminNewsContent from "../../features/admin-features/news-management/AdminNewsContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function NewsManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.NEWS_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.DASHBOARD.description}
        button={false}
      />
      <AdminNewsContent />
    </>
  );
}

export default NewsManagement;
