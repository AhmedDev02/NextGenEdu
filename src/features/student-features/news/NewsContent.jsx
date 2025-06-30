import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Post from "./Post";
import useGetNews from "./useGetNews";
import Spinner from "../../../ui/amr/Spinner";
import { useSearchParams } from "react-router-dom";
import Empty from "../../../ui/amr/Empty";
import ErrorFallback from "../../../ui/amr/ErrorFallBack";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the posts container */
  gap: 2rem; /* Add a gap between posts */
  
`;

function NewsContent() {
  const { data: newsData, isPending, error, refetch } = useGetNews();
  const [searchParams] = useSearchParams();

  const selectedSubjects = searchParams
    .get("subjects")
    ?.split("-")
    .map(decodeURIComponent) || ["all"];

  if (isPending) return <Spinner />;
  if (error) {
    return <ErrorFallback message="خطأ في عرض الاخبار" onRetry={refetch} />;
  }
  if (!newsData || newsData.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }

  const subjectNames = Array.from(
    new Map(
      newsData?.data?.data?.map((post) => [
        post.course.id,
        { name: post.course.name, id: post.course.id },
      ])
    ).values()
  );

  const subjects = subjectNames.map((course) => ({
    label: course.name,
    value: course.id,
  }));

  const filteredPosts = selectedSubjects.includes("all")
    ? newsData.data.data
    : newsData.data.data.filter((post) =>
        selectedSubjects.includes(String(post.course.id))
      );

  return (
    <>
      <ListFilter
        items={[{ label: "الكل", value: "all" }, ...subjects]}
        param="subjects"
        defaultItem="all"
        multipleChoose={true}
      />
      <Div>
        {filteredPosts.map((post) => (
          <Post key={post.id} postInformation={post} />
        ))}
      </Div>
    </>
  );
}

export default NewsContent;
