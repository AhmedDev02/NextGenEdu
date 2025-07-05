import { useState } from "react";
import Empty from "../../../../ui/amr/Empty";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Spinner from "../../../../ui/amr/Spinner";
import QuizFilters from "./QuizFilters";
import QuizCard from "./QuizCard";
import useGetLastQuizzes from "./useGetLastQuizzes";

const LastQuizContent = () => {
  const { data, isPending, error, refetch } = useGetLastQuizzes("finished");
  const [searchQuery, setSearchQuery] = useState("");
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message="خطأ في تحميل الاختبارات السابقه"
        onRetry={refetch}
      />
    );
  }
  const quizzes = data?.data || [];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <QuizFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {filteredQuizzes.length === 0 ? (
        <Empty resourceName="نتائج" />
      ) : (
        filteredQuizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
      )}
    </>
  );
};

export default LastQuizContent;
