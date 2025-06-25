import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { data } from "./data";

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  padding: 1.2rem;
  background: var(--color-primary-green);
  border-radius: 1.5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95); /* Slightly smaller scale for better UX */
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.6rem;
  }
`;

// Responsive Paragraph
export const P = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

// Responsive Icon
export const Icon = styled(FaDownload)`
  color: white;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ExportButton = () => {
  const TransferedData = data.map((student) => {
    const { id, name, scores } = student;
    const { Physics, Geography, Date, Subject, Test, FinalResult } = scores;
    return {
      id,
      name,
      Physics,
      Geography,
      Date,
      Subject,
      Test,
      FinalResult,
    };
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(TransferedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "students.xlsx");
  };

  return (
    <Container>
      <Button onClick={exportToExcel}>
        <Icon />
        <P>اصدار تقرير</P>
      </Button>
    </Container>
  );
};

export default ExportButton;
