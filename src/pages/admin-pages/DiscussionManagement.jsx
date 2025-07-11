import AdminDiscussionContent from "../../features/admin-features/discussion-management/AdminDiscussionContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function DiscussionManagement() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.DISCUSSION_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.DISCUSSION_ADMIN.description}
        button={false}
      />
      <AdminDiscussionContent />
    </>
  );
}

export default DiscussionManagement;
