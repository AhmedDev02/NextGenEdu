import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { data } from "./data";

const Container = styled.div`
  width: 100%;
  position: relative;
`;
const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: none;
  padding: 1.5rem;
  background: var(--color-primary-green);
  border-radius: 2rem;
  outline: none;
  position: absolute;
  top: 0;
  &:active {
    outline: none;
    border: none;
    transform: translateY(5%);
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
const P = styled.p`
  color: white;
  font-weight: 500;
  font-size: 2rem !important;
`;
const Icon = styled(FaDownload)`
  color: white;
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
  console.log(TransferedData);
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
        <Icon size={22} />
        <P>اصدار تقرير</P>
      </Button>
    </Container>
  );
};

export default ExportButton;
