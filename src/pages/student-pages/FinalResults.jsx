import FinalResultsContent from "../../features/student-features/finalResults/FinalResultsContent";
import ContentHeader from "../../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../../utils/constants";

function FinalResults() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.FINAL_RESULTS.title}
        description={STUDENT_PAGES_PROPERTIES.FINAL_RESULTS.description}
        button={false}
      />
      <FinalResultsContent />
    </>
  );
}

export default FinalResults;
