import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useStudentProgress } from "../features/studentProgress/useStudentProgress";

const StudentProgressContext = createContext();

function StudentProgressProvider({ children }) {
  const [term, setTerm] = useState("Term1");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("الفصل الدراسي الأول");
  const dropdownRef = useRef(null);

  const handleTerm = (option) => {
    // Changed from object destructuring
    setSelectedOption(option);
    if (option === "الفصل الدراسي الأول") {
      setTerm("Term1");
    } else if (option === "الفصل الدراسي الثاني") {
      setTerm("Term2");
    }
    setIsOpen(false);
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
