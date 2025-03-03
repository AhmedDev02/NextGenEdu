import NewsContent from "../features/news/NewsContent";
import ContentHeader from "../ui/ContentHeader";
import { STUDENT_PAGES_PROPERTIES } from "../utils/constants";

function News() {
  return (
    <>
      <ContentHeader
        title={STUDENT_PAGES_PROPERTIES.NEWS.title}
        description={STUDENT_PAGES_PROPERTIES.NEWS.description}
        button={false}
      />
      <NewsContent />;
    </>
  );
}

export default News;
