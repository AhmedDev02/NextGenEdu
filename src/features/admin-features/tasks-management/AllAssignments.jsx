import styled from "styled-components";
import { MdAssignmentAdd } from "react-icons/md";
import { useReadAssignments } from "./useReadAssignments";
import { useParams } from "react-router-dom";
import Modal from "../../../ui/amr/Modal";
import { useFileDownloader } from "../../../hooks/useFileDownloader";
import AssignmentEditWindow from "./AssignmentEditWindow";
import AssignmentDeleteWindow from "./AssignmentDeleteWindow";
import { useDeleteAssignment } from "./useDeleteAssignment";
import { useState } from "react";
import { FaDownload, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import Spinner from "../../../ui/amr/Spinner";

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

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-auto-rows: auto;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
  gap: 4px; /* gap between items */
  width: fit-content; /* shrink container to content size */
  margin-right: auto;
`;

const ShowIcon = styled(FaEye)`
  cursor: pointer;
  font-size: 20px;
  /* margin-right: 12px; */

  &:hover {
    color: #007bff;
  }
`;

const EditIcon = styled(FaEdit)`
  cursor: ${({ isDisabled }) => (isDisabled ? "loading" : "pointer")};
  font-size: 20px;
  /* margin-right: 12px; */

  &:hover {
    color: ${({ isDisabled }) => (isDisabled ? "" : "#28a745")};
  }
`;

const DeleteIcon = styled(FaTrash)`
  cursor: ${({ isDisabled }) => (isDisabled ? "loading" : "pointer")};
  font-size: 20px;

  &:hover {
    color: ${({ isDisabled }) => (isDisabled ? "" : "#dc3545")};
  }
`;

const DownloadIcon = styled(FaDownload)`
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #17a2b8;
  }
`;
const IconButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  width: 32px; /* fixed width for icons */
  height: 32px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#2a3248")};
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  font-family: Changa, sans-serif;
  outline: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ffffff;
    color: ${({ hoverColor }) => hoverColor + "!important"};
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
function AllAssignments() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const downloadFile = useFileDownloader();
  const { assignments, isPending, error } = useReadAssignments();
  const { taskId: courseId } = useParams();
  const { mutate } = useDeleteAssignment();
  if (isPending) return <Spinner />;
  if (error) return toast.error("خطأ في تحميل الموارد يرجي المحاوله لاحقا");
  const filteredAssignmentsByCourseId = assignments?.data?.filter(
    (assignment) => {
      return +assignment.course.id === +courseId;
    }
  );

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
              <IconButton hoverColor={"blue"}>
                <ShowIcon
                  isDisabled={assignment.status === "finished"}
                  title="Show"
                />
              </IconButton>
              <IconButton hoverColor={"green"}>
                <DownloadIcon
                  title="Download"
                  isDisabled={assignment.status === "finished"}
                  onClick={(event) => handleDownloading(assignment.file, event)}
                />
              </IconButton>
              {/* <WindowContainer> */}
              <Modal>
                <Modal.Open opens="edit-assignment">
                  <IconButton
                    disabled={assignment.status === "finished"}
                    hoverColor={assignment.status !== "finished" && "green"}
                  >
                    <EditIcon
                      onClick={(e) => handleEdit(assignment, e)}
                      isDisabled={assignment.status === "finished"}
                      title="Edit"
                    />
                  </IconButton>
                </Modal.Open>

                <Modal.Open opens="delete-assignment">
                  <IconButton
                    hoverColor={assignment.status !== "finished" && "red"}
                    disabled={assignment.status === "finished"}
                  >
                    <DeleteIcon
                      isDisabled={assignment.status === "finished"}
                      onClick={handleDelete}
                    />
                  </IconButton>
                </Modal.Open>
                <Modal.Window name="edit-assignment">
                  <AssignmentEditWindow
                    selectedAssignment={selectedAssignment}
                  />
                </Modal.Window>
                <Modal.Window name="delete-assignment">
                  <AssignmentDeleteWindow
                    selectedAssignment={selectedAssignment}
                    onConfirm={() => mutate(assignment.id)}
                  />
                </Modal.Window>
              </Modal>
              {/* </WindowContainer> */}
            </Div>
          </StyledContainer>
        </TimeContainer>
      ))}
    </>
  );
}

export default AllAssignments;
