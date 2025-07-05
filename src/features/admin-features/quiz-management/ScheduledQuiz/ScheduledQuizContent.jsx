import { useState } from "react";
import Empty from "../../../../ui/amr/Empty";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Spinner from "../../../../ui/amr/Spinner";
import ScheduledQuizFilters from "./ScheduledQuizFilters";
import ScheduledQuizCardItem from "./ScheduledQuizCardItem";
import useGetLastQuizzes from "../LastQuiz/useGetLastQuizzes";

const ScheduledQuizContent = () => {
  const { data, isPending, error, refetch } = useGetLastQuizzes("scheduled");
  const [searchQuery, setSearchQuery] = useState("");

  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack
        message="خطأ في تحميل الاختبارات القادمة"
        onRetry={refetch}
      />
    );
  }
  const quizzes = data?.data || [];

  // Filter logic
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ScheduledQuizFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredQuizzes.length === 0 ? (
        <Empty resourceName="نتائج" />
      ) : (
        filteredQuizzes.map((quiz) => (
          <ScheduledQuizCardItem key={quiz.id} quiz={quiz} />
        ))
      )}
    </>
  );
};

export default ScheduledQuizContent;
