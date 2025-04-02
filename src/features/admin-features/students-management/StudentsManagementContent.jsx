import styled from "styled-components";
import FilterOptions from "./FilterOptions";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import studentsData from "./data";
import Row from "./Row";
const Container = styled.div`
  /* margin: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7rem;
  @media (max-width: 770px) {
    width: 100vw;
  }
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
const Info = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const Students = styled.div`
  width: 40rem;
  height: 7rem;
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 1.8rem !important;
    font-weight: bold;
  }
`;
const SearchContainer = styled.div`
  width: 900px;
  height: 10rem;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 500px;
    height: 8rem;
  }
  @media (max-width: 540px) {
    width: 450px;
    height: 5rem;
  }
`;
const Input = styled.input`
  width: 70%;
  height: 50%;
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid gray;
  outline: none;
  font-size: 1.6rem;
  padding-right: 4rem;
  font-family: "Changa", sans-serif;
  font-size: 1.6rem !important;
  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.6rem;
    color: gray;
  }
  &:focus {
    outline: none;
    &::placeholder {
      display: none;
    }
  }
  @media (max-width: 600px) {
    padding-right: 2rem;
    font-size: 1.2rem !important;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;
const Icon = styled(FaSearch)`
  position: absolute;
  right: 9rem;
  color: gray;
  @media (max-width: 1200px) {
    right: 6rem;
  }
  @media (max-width: 768px) {
    right: 4rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const SearchButton = styled.button`
  height: 50%;
  width: 10rem;
  background: var(--color-primary-green);
  color: white;
  border: none;
  font-family: "Changa", sans-serif;
  border-radius: 2rem;
  &:active {
    outline: none;
    transition: all 0.1s linear;
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
  p {
    font-size: 1.6rem !important;
  }
  @media (max-width: 600px) {
    width: 8rem;
    p {
      font-size: 1.2rem !important;
    }
  }
  @media (max-width: 540px) {
    width: 6rem;
    p {
      font-size: 1rem !important;
    }
  }
`;

const Table = styled.div`
  width: 100%;
`;
const TableHeader = styled.div`
  display: grid;
  width: 900px;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
  padding-right: 1rem;
`;
const HeaderCell = styled.div`
  p {
    font-size: 2rem !important;
    font-weight: bold;
  }
`;
const TableBody = styled.div`
  width: 100%;
`;
const StudentsManagementContent = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(studentsData);



  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (!query) {
      setData(studentsData);
      return;
    }

    const filteredData = studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.id.toString().includes(query)
    );
    setData(filteredData);
  };

  return (
    <Container>
      <Info>
        <Students>
          <p>عدد الطلاب المسجلين في الماده</p>
          <p>350</p>
        </Students>
        <FilterOptions />
      </Info>
      <SearchContainer>
        <Input
          value={search}
          onChange={handleSearch}
          type="search"
          placeholder="ادخل اسم الطالب او رقم هويته لعرض بياناته واداءه......."
        ></Input>
        <Icon size={20} />
        <SearchButton>
          <p>بحث</p>
        </SearchButton>
      </SearchContainer>
      <Table>
        <TableHeader>
          <HeaderCell>
            <p>الاسم</p>
          </HeaderCell>
          <HeaderCell>
            <p>الحضور</p>
          </HeaderCell>
          <HeaderCell>
            <p>التكاليف</p>
          </HeaderCell>
          <HeaderCell>
            <p>الميدترم</p>
          </HeaderCell>
          <HeaderCell>
            <p>أعمال السنة</p>
          </HeaderCell>
        </TableHeader>
        <TableBody>
          {data?.map((student) => (
            <Row
              key={student.id}
              data={student}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
export default StudentsManagementContent;
