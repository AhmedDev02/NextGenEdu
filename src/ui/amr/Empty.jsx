import styled from "styled-components";
import PropTypes from "prop-types";

const StyledEmpty = styled.div`
  font-size: 1.6rem;
  padding: 4rem;
  text-align: center;
  margin-bottom: 10rem;

  background-color: #fff;
  border: 1px solid var(--color-grey-100, #e5e7eb);
  border-radius: var(--border-radius-md, 7px);
  box-shadow: var(--shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.04));
`;

function Empty({ resourceName }) {
  return <StyledEmpty>لا توجد {resourceName} لعرضها</StyledEmpty>;
}

Empty.propTypes = {
  resourceName: PropTypes.string.isRequired,
};

export default Empty;
