import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.7rem 2rem;
    font-weight: var(--font-weight-medium);
    border-radius: var(--border-radius-sm);

    text-align: center;
    text-transform: capitalize;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1rem 5rem;
    font-weight: var(--font-weight-semibold);
    border-radius: 1rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.3rem 7rem;
    font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius-lg);
  `,
  custom: css`
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => {
      return `${props.paddingTopBottom} ${props.paddingLeftRight}`;
    }};
    font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius-md);
    margin: ${(props) => {
      return `${props.margin}`;
    }};
  `,
};
const variations = {
  // green = primary
  primary: css`
    color: var(--color-grey-0);
    background: var(--color-primary-green);
  `,
  // darkblue = secondary

  secondary: css`
    color: var(--color-grey-0);
    background: var(--color-secondary-darkblue);
  `,

  transparent: css`
    color: var(--color-secondary-darkblue);
    background: transparent;
    border: 2px solid var(--color-secondary-darkblue);
  `,
  // red = danger
  danger: css`
    color: var(--color-grey-0);
    background: var(--color-danger-red);
  `,
};

/*
 */
const StyledButton = styled.button`
  font-family: "Changa", sans-serif;
  height: 45px;
  margin-top: 5px;
  transition: all 0.2s;
  &:active {
    scale: 0.95;
  }
  &:focus {
    outline: none;
  }

  border: none;
  box-shadow: var(--shadow-primary);
  ${(props) => sizes[props.size]};
  ${(props) => variations[props.variation]};
  ${(props) =>
    props.isTransparent
      ? css`
          background: transparent;
          color: var(--color-secondary-darkblue);
          border: var(--color-secondary-darkblue) 2px solid;

          &:focus {
            background: var(--color-secondary-darkblue);
            color: var(--color-grey-0);
          }
        `
      : css``}
  @media (max-width: 768px) {
    padding: ${(props) => props.phonePadding};
  }
  /* this is for mobile */
  @media (max-width: 1024px) and (min-width: 769px) {
    padding: ${(props) => props.tabPadding};
  }
`;

function SuperButton({
  children,
  state,
  variation = "primary",
  size = "medium",
  fontSize = "",
  paddingTopBottom = "",
  paddingLeftRight = "",
  margin = "",
  isTransparent = false,
  phonePadding,
  id,
  tabPadding,
  path,
  ...rest
}) {
  const navigate = useNavigate();

  function handleClick() {
    if (state === "page with id" && path) {
      navigate(`${path}/${id}`);
    } else if (state === "page no id") {
      navigate(`${path}`);
    }
  }

  return (
    <StyledButton
      variation={variation}
      size={size}
      fontSize={fontSize}
      paddingTopBottom={paddingTopBottom}
      paddingLeftRight={paddingLeftRight}
      margin={margin}
      isTransparent={isTransparent}
      onClick={handleClick}
      phonePadding={phonePadding}
      tabPadding={tabPadding}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default SuperButton;
