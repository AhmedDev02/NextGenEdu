import ContentHeader from "../../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../../utils/constants";
import AddNewsContent from "./AddNewsContent";

function AddNews() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.NEWS_ADD.title}
        description={ADMIN_PAGES_PROPERTIES.NEWS_ADD.description}
        button={true}
      />
      <AddNewsContent />
    </>
  );
}

export default AddNews;
