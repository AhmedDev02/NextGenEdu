import AddMaterialContent from "../../features/admin-features/material-management/AddMaterialContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddMaterial = () => {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.MATERIAL_ADD.title}
        description={ADMIN_PAGES_PROPERTIES.MATERIAL_ADD.description}
        button={false}
      />
      <AddMaterialContent />
    </>
  );
};

export default AddMaterial;
