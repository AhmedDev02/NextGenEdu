import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import studentsData from "./data";
import Row from "./Row";

const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 2rem;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 90rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Students = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 6rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 30rem;
    height: 5rem;

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 25rem;
    height: 4.5rem;

    p {
      font-size: 1.2rem;
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  height: 8rem;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 60rem;
    height: 7rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    height: 6rem;
    padding: 0 0.5rem;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 50%;
  padding: 0.8rem 3.5rem 0.8rem 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid gray;
  outline: none;
  font-size: 1.6rem;
  font-family: "Changa", sans-serif;

  &::placeholder {
    font-family: "Changa", sans-serif;
    font-size: 1.5rem;
    color: gray;
  }

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding-right: 3rem;

    &::placeholder {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding-right: 0.8rem;

    &::placeholder {
      font-size: 1.1rem;
    }
  }
`;

const Icon = styled(FaSearch)`
  position: absolute;
  right: 2.5rem;
  color: gray;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    right: 2rem;
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const SearchButton = styled.button`
  height: 50%;
  width: 9rem;
  background: var(--color-primary-green);
  color: white;
  border: none;
  font-family: "Changa", sans-serif;
  border-radius: 1.5rem;
  cursor: pointer;

  &:active {
    outline: none;
    transition: all 0.1s linear;
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  p {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    width: 8rem;

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    width: 7rem;

    p {
      font-size: 1.2rem;
    }
  }
`;

const Table = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 0 1rem;
`;

const TableHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 2fr 1fr;
    font-size: 1.2rem;
  }
`;

const HeaderCell = styled.div`
  p {
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.6rem;
    }

    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.4rem;
    }

    &:nth-child(3) {
      display: none;
    }
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
      </Info>
      <SearchContainer>
        <Input
          value={search}
          onChange={handleSearch}
          type="search"
          placeholder="ادخل اسم الطالب او رقم هويته لعرض بياناته واداءه......."
        />
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
            <Row key={student.id} data={student} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default StudentsManagementContent;
