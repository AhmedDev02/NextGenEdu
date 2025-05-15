import styled from "styled-components";
import { MdAssignmentAdd } from "react-icons/md";
import { useReadAssignments } from "./useReadAssignments";
import { useParams } from "react-router-dom";
import Modal from "../../../ui/amr/Modal";
import Button from "../../../ui/Button";
import { useFileDownloader } from "../../../hooks/useFileDownloader";
import AssignmentEditWindow from "./AssignmentEditWindow";
import AssignmentDeleteWindow from "./AssignmentDeleteWindow";
import { useDeleteAssignment } from "./useDeleteAssignment";
import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const assignmentData = [
  {
    assignmentDate: "السبت، 2 نوفمبر 2024",
    assignmentTime: "08:00 مساءً",
    assignmentNumber: "اسايمنت الاسبوع الرابع",
    assignmentSubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
  {
    assignmentDate: "الأحد، 3 نوفمبر 2024",
    assignmentTime: "08:00 مساءً",
    assignmentNumber: "اسايمنت الاسبوع الرابع",
    assignmentSubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
  {
    assignmentDate: "الإثنين،4 نوفمبر 2024",
    assignmentTime: "08:00 مساءً",
    assignmentNumber: "اسايمنت الاسبوع الرابع",
    assignmentSubject: "أسايمنت-البرمجة الشيئية(OOP)",
  },
];
const TimeContainer = styled.div`
  box-shadow: var(--shadow-primary);
  margin: auto;
  width: 70%;
  height: 75px;
  background-color: #fff;
  border-radius: 15px 15px 15px 15px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    width: 80%;
    justify-content: space-between;
  }
  @media (max-width: 1027px) and (min-width: 767px) {
    width: 75%;
  }
`;

const StyledContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(to bottom, #ff3d60, #b82d42);
  border-radius: 10px;
  color: white;

  @media (max-width: 1027px) and (min-width: 767px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 767px) {
    width: 45px;
    height: 45px;
  }
`;
const StyledIcon = styled(MdAssignmentAdd)`
  font-size: 40px;

  @media (max-width: 1027px) and (min-width: 767px) {
    font-size: 35px;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 10px;
`;
const StyledRightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 70px;
  gap: 10px;
`;
const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  text-align: center;
  line-height: 25px;
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 60px;
  @media (max-width: 1027px) and (min-width: 767px) {
    height: 50px;
  }

  @media (max-width: 767px) {
    height: 45px;
  }
`;
const StyledButton = styled.button`
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  background-color: ${({ bgColor }) => (!bgColor ? "#2a3248" : bgColor)};
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Changa;
  outline: none;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #2a3248;
    border: 1px solid #2a3248;
  }

  &:disabled {
    background-color: grey;
    color: #ffffff;
    cursor: not-allowed;
    border: 1px solid #2a3248;
  }

  @media (max-width: 767px) {
    transform: translate(20px, 0px);
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2px;
`;

const WindowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function AllAssignments() {
  const { assignments } = useReadAssignments();
  const { taskId: courseId } = useParams();
  const mutate = useDeleteAssignment();

  const filteredAssignmentsByCourseId = assignments?.data?.filter(
    (assignment) => {
      return +assignment.course.id === +courseId;
    }
  );

  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const downloadFile = useFileDownloader();

  const handleDownloading = (fileUrl, event) => {
    event.stopPropagation();
    downloadFile(fileUrl);
  };

  const handleDelete = (assignment, event) => {
    event.preventDefault();
    setSelectedAssignment(assignment);
  };
  const handleEdit = (assignment, event) => {
    event.preventDefault();
    setSelectedAssignment(assignment);
  };
  return (
    <>
      {filteredAssignmentsByCourseId?.map((assignment, index) => (
        <TimeContainer
          key={index}
          style={{ height: "auto", display: "inline-block" }}
        >
          <h1>{assignment.date}</h1>
          <StyledContainer>
            <StyledRightContainer>
              <StyledTime>
                <h4>التوقيت</h4>
                <h4>{assignment.time}</h4>
              </StyledTime>

              <StyledContainerBox>
                <StyledIcon />
              </StyledContainerBox>

              <StyledTitle>
                <h1>{assignment.title}</h1>
                <h1>{assignment.description}</h1>

                <h5
                  style={{
                    color: `${
                      assignment.status === "finished" ? "red" : "green"
                    }`,
                  }}
                >
                  {assignment.status}
                </h5>
              </StyledTitle>
            </StyledRightContainer>
            <Div>
              <StyledButton
                onClick={(event) => handleDownloading(assignment.file, event)}
              >
                تفاصيل الأسيمنت
              </StyledButton>
              <FaEye title="Show" style={{ cursor: "pointer" }} />
              <FaEdit title="Edit" style={{ cursor: "pointer" }} />
              <FaTrash title="Delete" style={{ cursor: "pointer" }} />
              <WindowContainer>
                <Modal>
                  <Modal.Open opens="edit-assignment">
                    <ButtonDiv>
                      <StyledButton
                        bgColor={"var(--color-green)"}
                        onClick={(e) => handleEdit(assignment, e)}
                        disabled={assignment.status === "finished"}
                      >
                        تعديل
                      </StyledButton>
                    </ButtonDiv>
                  </Modal.Open>

                  <Modal.Open opens="delete-assignment">
                    <ButtonDiv>
                      <StyledButton
                        bgColor={"var(--color-red)"}
                        onClick={handleDelete}
                        disabled={assignment.status === "finished"}
                      >
                        حذف
                      </StyledButton>
                    </ButtonDiv>
                  </Modal.Open>
                  <Modal.Window name="edit-assignment">
                    <AssignmentEditWindow
                      selectedAssignment={selectedAssignment}
                    />
                  </Modal.Window>
                  <Modal.Window name="delete-assignment">
                    <AssignmentDeleteWindow
                      //   id={assignment.id}
                      selectedAssignment={selectedAssignment}
                      onConfirm={() => mutate(assignment.id)}
                    />
                  </Modal.Window>
                </Modal>
              </WindowContainer>
            </Div>
          </StyledContainer>
        </TimeContainer>
      ))}
    </>
  );
}

export default AllAssignments;
