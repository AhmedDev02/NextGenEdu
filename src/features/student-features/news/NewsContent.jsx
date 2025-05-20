import styled from "styled-components";
import ListFilter from "../../../ui/ListFilter";
import Post from "./Post";
import useGetNews from "./useGetNews";
import Spinner from "../../../ui/amr/Spinner";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

function NewsContent() {
  const { data: newsData, isLoading, error } = useGetNews();
  const [searchParams] = useSearchParams();
  const selectedSubjects = searchParams
    .get("subjects")
    ?.split("-")
    .map(decodeURIComponent) || ["all"];

  if (isLoading) return <Spinner />;
  if (error) return toast.error("حدث خطأ في تحميل الاخبار");
  console.log(newsData?.data?.data);

  const subjectNames = Array.from(
    new Set(newsData?.data?.data?.map((post) => post.course.name))
  );
  const subjects = subjectNames.map((name) => ({
    label: name,
    value: name.toLowerCase(),
  }));

  const filteredPosts = selectedSubjects.includes("all")
    ? newsData.data.data
    : newsData.data.data.filter((post) =>
        selectedSubjects.includes(post.course.name.toLowerCase())
      );

  return (
    <>
      <ListFilter
        items={[{ label: "All", value: "all" }, ...subjects]}
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
