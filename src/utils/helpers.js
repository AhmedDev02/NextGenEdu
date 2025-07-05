export function getTimeFormatted(time) {
  const datetime = time;
  const dateObj = new Date(datetime);
  const datePart = dateObj.toISOString().split("T")[0];
  let hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0"); // Add leading zero if needed
  const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
  hours = hours % 12; // Convert 24-hour format to 12-hour format
  hours = hours ? hours : 12; // Handle the case for midnight (0 hours)
  const formattedDateTime = `${datePart} ${hours}:${minutes} ${ampm}`;
  return formattedDateTime;
}

export function getStudentYear(semester) {
  if (!semester) return null;
  if (semester >= 1 && semester <= 2) {
    return "طالب سنة أولى"; // First Year
  } else if (semester >= 3 && semester <= 4) {
    return "طالب سنة ثانية"; // Second Year
  } else if (semester >= 5 && semester <= 6) {
    return "طالب سنة ثالثة"; // Third Year or higher
  } else if (semester >= 7 && semester <= 8) {
    return "طالب سنة رابعة"; // Third Year or higher
  } else if (semester >= 9 && semester <= 10) {
    return "طالب سنة خامسة"; // Third Year or higher
  } else {
    return "Invalid semester"; // If semester number is outside the valid range
  }
}

export function groupExamsByCourse(exams) {
  const grouped = {};

  exams.forEach((exam) => {
    const courseId = exam.course?.id;

    if (!courseId) return;

    if (!grouped[courseId]) {
      grouped[courseId] = {
        course: exam.course,
        teacher: exam.teacher, // ✅ add teacher
        exams: [],
      };
    }

    grouped[courseId].exams.push(exam);
  });

  return Object.values(grouped);
}
