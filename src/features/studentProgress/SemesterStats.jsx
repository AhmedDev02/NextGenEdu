import styled from "styled-components";
import SemesterPicker from "./SemesterPicker";
import CoursesNumber from "./CoursesNumber";
import ProgressChart from "./ProgressChart";
import { useStudentProgress } from "./useStudentProgress";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Spinner from "../../ui/amr/Spinner";
import { useStudentProgressContext } from "../../context/StudentProgressProvider";

const StyledSemesterStats = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
function SemesterStats() {
  const [totalPercentage, setTotalPercentage] = useState(0);
  const { term, setTerm } = useStudentProgressContext();
  const [termData, setTermData] = useState([]);
  const { data, isPending, error } = useStudentProgress();
  const { semesters } = data || {};
  const { Term1, Term2 } = semesters || {};

  useEffect(() => {
    if (!semesters) return;

    if (term === "Term1") {
      setTermData(Term1);
    } else if (term === "Term2") {
      setTermData(Term2);
    }
  }, [term, Term1, Term2, semesters]);

  useEffect(() => {
    if (termData?.courses) {
      const percentage = calculateAveragePercentage(termData.courses);
      setTotalPercentage(percentage);
    }
  }, [termData]);
  if (isPending) return <Spinner />;
  if (error) {
    toast.error("error loading data");
    return null;
  }
  if (!termData?.courses) return null;
  const { courses } = termData;

  const extractScore = (scoreString) => {
    if (!scoreString || typeof scoreString !== "string") return 0;
    const match = scoreString.match(/(\d+)\/\d+/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const calculateTotalDegrees = (courses) => {
    if (!courses || !Array.isArray(courses)) return 0;

    return courses.reduce((total, course) => {
      const scoresToSum = [
        course.projectScore,
        course.assignmentScore,
        course.midtermScore,
        course.semesterWorks,
        course.finalExamScore,
      ];

      const courseTotal = scoresToSum.reduce((sum, score) => {
        return sum + extractScore(score);
      }, 0);

      return total + courseTotal;
    }, 0);
  };

  const totalDegrees = calculateTotalDegrees(termData.courses);
  console.log(totalDegrees);

  const calculateAveragePercentage = (courses) => {
    if (!courses || !Array.isArray(courses) || courses.length === 0) return 0;

    const scoresToConsider = [
      "projectScore",
      "assignmentScore",
      "midtermScore",
      "semesterWorks",
      "finalExamScore",
    ];

    let totalAchieved = 0;
    let totalPossible = 0;

    courses.forEach((course) => {
      scoresToConsider.forEach((field) => {
        const { score, total } = extractScoreAndTotal(course[field]);
        totalAchieved += score;
        totalPossible += total;
      });
    });

    // Calculate the overall percentage (avoid division by zero)
    return totalPossible > 0
      ? Math.round((totalAchieved / totalPossible) * 100)
      : 0;
  };

  // Helper function to extract score and total from a string like "17/20"
  const extractScoreAndTotal = (scoreString) => {
    if (!scoreString || typeof scoreString !== "string")
      return { score: 0, total: 0 };
    const match = scoreString.match(/(\d+)\/(\d+)/);
    if (match) {
      return {
        score: parseInt(match[1], 10), // Achieved score
        total: parseInt(match[2], 10), // Total possible score
      };
    }
    return { score: 0, total: 0 };
  };
  return (
    <StyledSemesterStats>
      <Container>
        <SemesterPicker term={term} setTerm={setTerm} />
        <CoursesNumber totalDegrees={totalDegrees} courses={courses} />
      </Container>
      <ProgressChart totalPercentage={totalPercentage} />
    </StyledSemesterStats>
  );
}

export default SemesterStats;
