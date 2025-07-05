import { useState } from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import useGetResults from "./useGetResults";
import Spinner from "../../../../ui/amr/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import ErrorFallBack from "../../../../ui/amr/ErrorFallBack";
import Empty from "../../../../ui/amr/Empty";

const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  font-family: "Changa", sans-serif;
  /* direction: rtl;  */
`;

const HeaderBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const InfoText = styled.div`
  p {
    color: #6b7280;
  }
`;

const StudentCount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 450px;
`;
const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(-50%, -50%);
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px #c7d2fe;
  }
`;

const ResultsList = styled.div`
  margin-top: 30px;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 12px 24px;
  color: #6b7280;
  font-weight: 600;
  text-align: right;
`;

const StudentRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 24px;
  margin-bottom: 12px;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
  text-align: right;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    scale: 1.05;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const NameIdWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StudentName = styled.span`
  font-weight: 600;
  color: #111827;
`;

const StudentId = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Grade = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;

function QuizResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const { quizId } = useParams();
  const { results, isPending, error, refetch } = useGetResults(quizId);
  const navigate = useNavigate();
  if (isPending) return <Spinner />;
  if (error) {
    return (
      <ErrorFallBack message="خطأ في عرض نتائج الطلاب" onRetry={refetch} />
    );
  }
  if (!results || results.data.length === 0) {
    return <Empty resourceName="معلومات" />;
  }

  const filteredResults = results.data.students.filter(
    (student) =>
      student.student_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.student_id.toString().includes(searchQuery)
  );

  return (
    <PageContainer>
      <HeaderBox>
        <InfoText>
          <StudentCount>
            عدد الطلاب: {results.data.students.length}
          </StudentCount>
        </InfoText>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="ادخل اسم الطالب أو رقم هويته..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </HeaderBox>

      <ResultsList>
        <ListHeader>
          <div>الإسم</div>
          <div>الدرجة</div>
          <div>الدرجة النهائية</div>
        </ListHeader>

        {filteredResults.map((student) => (
          <StudentRow
            onClick={() => {
              navigate(`${student.student_id}`);
            }}
            key={student.student_id}
          >
            <UserInfo>
              <Avatar src={`https://${student.avatar}`} alt="Student Avatar" />
              <NameIdWrapper>
                <StudentName>{student.student_name}</StudentName>
                <StudentId>({student.student_id})</StudentId>
              </NameIdWrapper>
            </UserInfo>
            <Grade>{student.degree}</Grade>
            <Grade>{results.data.max_degree}</Grade>
          </StudentRow>
        ))}
      </ResultsList>
    </PageContainer>
  );
}

export default QuizResults;
