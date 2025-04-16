import FinalResultManagementsContent from "../../features/admin-features/final-result-management/FinalResultManagementsContent";
import ContentHeader from "../../ui/ContentHeader";
import { ADMIN_PAGES_PROPERTIES } from "../../utils/constants";

function FinalResults() {
  return (
    <>
      <ContentHeader
        title={ADMIN_PAGES_PROPERTIES.FINAL_RESULTS_ADMIN.title}
        description={ADMIN_PAGES_PROPERTIES.FINAL_RESULTS_ADMIN.description}
        button={false}
      />
      <FinalResultManagementsContent />
    </>
  );
}

export default FinalResults;
