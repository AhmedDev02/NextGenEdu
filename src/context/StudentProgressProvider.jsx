import { createContext, useContext, useRef, useState } from "react";

const StudentProgressContext = createContext();

function StudentProgressProvider({ children }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [SelectedCourse, setSelectedCourse] = useState([]);
  const [term, setTerm] = useState("Term1");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("الفصل الدراسي الأول");
  const [lectureStatuses, setLectureStatuses] = useState({});
  const [editDegree, setEditDegree] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentDegree, setCurrentDegree] = useState(0);

  const setLectureStatus = (lectureId, status) => {
    setLectureStatuses((prev) => {
      const updatedStatuses = { ...prev, [lectureId]: status };
      console.log("Updated Lecture Statuses:", updatedStatuses);
      return updatedStatuses;
    });
  };
  const handleTerm = (option) => {
    setSelectedOption(option);
    if (option === "الفصل الدراسي الأول") {
      setTerm("Term1");
    } else if (option === "الفصل الدراسي الثاني") {
      setTerm("Term2");
    }
    setIsOpen(false);
  };
  const handleEdit = (id) => {
    setEditDegree((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setIsActive((prev) => !prev);
  };

  return (
    <StudentProgressContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        dropdownRef,
        term,
        setTerm,
        handleTerm,
        selectedDays,
        setSelectedDays,
        lectureStatuses,
        setLectureStatuses,
        setLectureStatus,
        editDegree,
        setEditDegree,
        handleEdit,
        isActive,
        setIsActive,
        currentDegree,
        setCurrentDegree,
        SelectedCourse,
        setSelectedCourse,

      }}
    >
      {children}
    </StudentProgressContext.Provider>
  );
}
function useStudentProgressContext() {
  const context = useContext(StudentProgressContext);
  if (context === undefined)
    throw new Error("DarkMode context was used outside DarkModeProvider");
  return context;
}
export { StudentProgressProvider, useStudentProgressContext };
