import AddHallContent from "../../features/super-admin-features/super-buildings/AddHallContent";
import ContentHeader from "../../ui/ContentHeader";
import { SUPER_ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

const AddHallPage = () => {
  <>
    <ContentHeader
      title={SUPER_ADMIN_PAGES_PROPERTIES.ADD_HALL.title}
      description={SUPER_ADMIN_PAGES_PROPERTIES.ADD_HALL.description}
      button={true}
    />
    <AddHallContent />
  </>;
};

export default AddHallPage;
