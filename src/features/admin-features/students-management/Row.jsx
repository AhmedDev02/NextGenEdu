import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import Modal from "../../../ui/amr/Modal";
import ModalContent from "./ModalContent";
import { useStudentProgressContext } from "../../../context/StudentProgressProvider";
import { useEffect, useState } from "react";

const Details = styled.div`
  display: grid;
  width: 900px;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
  padding-right: 1rem;
  background-color: white;
  height: 8rem;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
`;
const RowCell = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 1rem;
  p {
    font-size: 2rem !important;
    font-weight: bold;
  }
`;

const Change = styled.div`
  width: 9rem;
  background-color: white;
  height: 8rem;
  border-radius: 2rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Number = styled.p`
  font-size: 2rem !important;
  font-weight: bold;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
const Increase = styled(IoIosArrowUp)`
  cursor: pointer;
`;
const Decrease = styled(IoIosArrowDown)`
  cursor: pointer;
`;
const Save = styled.button`
  width: 9rem;
  height: 8rem;
  background: var(--color-danger-red);
  border: none;
  border-radius: 2rem;
  p {
    font-size: 2rem !important;
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
`;
const Edit = styled(Save)`
  background: var(--color-primary-green);
`;
const TableRow = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 9fr 1fr 1fr;
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
