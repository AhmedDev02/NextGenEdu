import styled from "styled-components";
import {
  FaEdit,
  FaBook,
  FaInfoCircle,
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrash,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Modal from "../../../ui/amr/Modal";
import DeleteCourseContent from "./DeleteCourseContent";

const DisplayPageWrapper = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;
  direction: rtl;
`;

const CourseHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const TitleGroup = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0;
  }
  p {
    font-size: 1.2rem;
    color: #6b7280;
    margin: 0.25rem 0 0;
  }
`;

const EditButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const PanelTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f3f4f6;
`;

const DetailGroup = styled.div`
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const DetailHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
`;

const TeacherList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TeacherTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f0fdf4;
  color: #166534;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
`;
const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
const DeleteButton = styled.button`
  background: var(--color-danger-red);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const CourseDisplay = ({ course }) => {
  const {courseId}=useParams()
  return (
    <DisplayPageWrapper>
      <CourseHero>
        <TitleGroup>
          <h1>{course.name}</h1>
          <p>{course.code}</p>
        </TitleGroup>
        <ButtonsGroup>
          <Modal>
            <Modal.Open opens="delete-course">
              <DeleteButton>
                <FaTrash /> حذف المادة
              </DeleteButton>
            </Modal.Open>
            <Modal.Window name="delete-course">
              <DeleteCourseContent courseId={courseId} onCloseModal />
            </Modal.Window>
          </Modal>
          <EditButton to={`/super-admin/materials/update-course/${course.id}`}>
            <FaEdit /> تعديل
          </EditButton>
        </ButtonsGroup>
      </CourseHero>

      <ContentGrid>
        <Panel>
          <PanelTitle>
            <FaBook /> تفاصيل المادة
          </PanelTitle>
          {course.details.map((detail, index) => (
            <DetailGroup key={index}>
              <DetailHeader>
                <FaUniversity style={{ marginLeft: "8px", color: "#6b7280" }} />
                {detail.department_name}
                <span style={{ color: "#9ca3af", margin: "0 10px" }}>•</span>
                <FaUserGraduate
                  style={{ marginLeft: "8px", color: "#6b7280" }}
                />
                {detail.semester_name}
              </DetailHeader>
              <TeacherList>
                {detail.teachers.map((teacher) => (
                  <TeacherTag key={teacher.id}>
                    <FaChalkboardTeacher />
                    {teacher.name}
                  </TeacherTag>
                ))}
              </TeacherList>
            </DetailGroup>
          ))}
        </Panel>

        <Panel>
          <PanelTitle>
            <FaInfoCircle /> الوصف
          </PanelTitle>
          <p>{course.description}</p>
        </Panel>
      </ContentGrid>
    </DisplayPageWrapper>
  );
};

export default CourseDisplay;
