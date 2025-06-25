import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import Modal from "../../../ui/amr/Modal";
import ModalContent from "./ModalContent";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useEffect, useState } from "react";

// Responsive Details Grid
const Details = styled.div`
  display: grid;
  width: 100%;
  max-width: 80rem; /* Align with TableHeader's max-width */
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1.5rem;
  padding-right: 0.5rem;
  background-color: white;
  height: 7rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1.5fr 1fr 1fr; /* Hide Midterm and Year Work */
    height: 6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 2fr 1fr; /* Hide Tasks */
    height: 5rem;
  }
`;

// Responsive Row Cell
const RowCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 0.8rem;

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
      display: none; /* Hide Midterm and Year Work */
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 1.4rem;
    }

    &:nth-child(3) {
      display: none; /* Hide Tasks */
    }
  }
`;

// Responsive Change Container
const Change = styled.div`
  width: 8rem;
  max-width: 100%;
  background-color: white;
  height: 7rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 7rem;
    height: 6rem;
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 5rem;
  }
`;

// Responsive Number
const Number = styled.p`
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

// Responsive Buttons Container
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

// Responsive Increase/Decrease Icons
const Increase = styled(IoIosArrowUp)`
  cursor: pointer;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Decrease = styled(IoIosArrowDown)`
  cursor: pointer;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Responsive Save_regularizer

const Save = styled.button`
  width: 8rem;
  height: 7rem;
  background: var(--color-danger-red);
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    font-family: "Changa", sans-serif;
  }

  &:active {
    outline: none;
    transition: all 0.1s linear;
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 7rem;
    height: 6rem;

    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    width: 6rem;
    height: 5rem;

    p {
      font-size: 1.4rem;
    }
  }
`;

// Responsive Edit Button
const Edit = styled(Save)`
  background: var(--color-primary-green);
`;

// Responsive Table Row
const TableRow = styled.div`
  width: 100%;
  max-width: 90rem; /* Align with Table in StudentsManagementContent */
  display: grid;
  gap: 0.8rem;
  grid-template-columns: 9fr 1fr 1fr;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const Row = ({ data }) => {
  const { name, attendance, assignments, midterm, yearlyWork, id } = data;
  const [currentDegree, setCurrentDegree] = useState(0);
  const { handleEdit, editDegree } = useStudentProgressContext();
  const [isChanged, setIsChanged] = useState(false);
  const [activeRows, setActiveRows] = useState({});

  const isActive = !!activeRows[id];
  const handleSelectRow = (id) => {
    setActiveRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResetRow = (id) => {
    setActiveRows((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  useEffect(() => {
    if (currentDegree !== yearlyWork) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [currentDegree, yearlyWork]);

  useEffect(() => {
    setCurrentDegree(yearlyWork);
  }, [yearlyWork]);

  const handleResetDegree = () => {
    setCurrentDegree(currentDegree);
  };

  const handleIncrease = () => {
    if (!isActive) return;
    setCurrentDegree((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (!isActive) return;
    setCurrentDegree((prev) => prev - 1);
  };

  const handleSave = () => {
    handleEdit(id);
    handleResetRow(id);
  };

  return (
    <TableRow>
      <Details>
        <RowCell>
          <p>{name}</p>
        </RowCell>
        <RowCell>
          <p>{attendance}/10</p>
        </RowCell>
        <RowCell>
          <p>{assignments}/10</p>
        </RowCell>
        <RowCell>
          <p>{midterm}/10</p>
        </RowCell>
        <RowCell>
          <p>{currentDegree}/40</p>
        </RowCell>
      </Details>
      <Change>
        <Number>{currentDegree}</Number>
        <Buttons>
          {isActive ? (
            <>
              <Increase onClick={handleIncrease} size={30} />
              <Decrease onClick={handleDecrease} size={30} />
            </>
          ) : null}
        </Buttons>
      </Change>
      {editDegree[id] ? (
        <Modal>
          <Modal.Open opens="save-degree">
            <Save onClick={handleSave}>
              <p>حفظ</p>
            </Save>
          </Modal.Open>
          <Modal.Window name="save-degree">
            <ModalContent
              isChanged={isChanged}
              handleResetDegree={handleResetDegree}
              id={id}
              onCloseModal
              onSelectRow={handleSelectRow}
            />
          </Modal.Window>
        </Modal>
      ) : (
        <Edit
          onClick={() => {
            handleSelectRow(id);
            handleEdit(id);
          }}
        >
          <p>تعديل</p>
        </Edit>
      )}
    </TableRow>
  );
};

export default Row;
