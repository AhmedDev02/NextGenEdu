import ShowMaterialsContent from "../../features/admin-features/material-management/ShowMaterialsContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const Attendance = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.SHOW_MATERIALS_ADMIN.title}
        button={false}
        description={ADMIN_PAGES_PROPERTIES.SHOW_MATERIALS_ADMIN.description}
      />
      <ShowMaterialsContent />
    </>
  );
};

export default Attendance;
