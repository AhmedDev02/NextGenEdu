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
    border-radius: var(--border-radius-md);
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

    &:active {
      background: transparent;
      color: var(--color-primary-green);
    }
  `,
  // darkblue = secondary

  secondary: css`
    color: var(--color-grey-0);
    background: var(--color-secondary-darkblue);

    &:active {
      background: transparent;
      color: var(--color-secondary-darkblue);
    }
  `,

  transparent: css`
    color: var(--color-secondary-darkblue);
    background: transparent;
    border: 2px solid var(--color-secondary-darkblue);
    /* &:active {
      background: var(--color-secondary-darkblue);
      color: var(--color-grey-0);
    } */
  `,
  // red = danger

  danger: css`
    color: var(--color-grey-0);
    background: var(--color-danger-red);

    &:active {
      background: transparent;
      color: var(--color-danger-red);
    }
  `,
};

/*
 */
const StyledButton = styled.button`
  font-family: "Changa", sans-serif;
  transition: all 0.2s;
  border: none;
  outline: none;
  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    scale: 0.95;
  }
  box-shadow: var(--shadow-primary);
  ${(props) => sizes[props.size]};
  ${(props) => variations[props.variation]};
  ${(props) =>
    props.isTransparent
      ? css`
          background: transparent;
          color: var(--color-secondary-darkblue);
          border: var(--color-secondary-darkblue) 2px solid;
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

function Button({
  children,
  variation = "primary",
  size = "medium",
  fontSize = "",
  paddingTopBottom = "",
  paddingLeftRight = "",
  margin = "",
  isTransparent = false,
  navigateTo, // New prop for navigation
  phonePadding,
  tabPadding,
  disabled,
  ...rest
}) {
  const navigate = useNavigate();

  //handling

  function handleClick() {
    if (navigateTo) {
      navigate(navigateTo); // Navigate to the provided link
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
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

// to create a button use one of these forms:
/*
you can choose different variation and sizes, if you chose the custom size, you have to add manually the font size and the paddings

1.
      <Button
        variation="primary"
        size="custom"
        fontSize="3rem"
        paddingTopBottom="1.3rem"
        paddingLeftRight="12rem"
      >
        login
      </Button>


2.     <Button variation="danger" size="large">
        login
      </Button>
*/
