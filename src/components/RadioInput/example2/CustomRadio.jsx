import styled, { css } from "styled-components";

const Container = styled.div`
  input {
    appearance: none;
  }
  label {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 6px;
  }
`;

const CustomRadioIcon = styled.div`
  width: 2rem;
  aspect-ratio: 1 / 1;
  border-radius: 100vmax;
  border: black solid 2px;
  align-self: center;

  ${({ checked }) =>
    checked &&
    css`
      background-color: green;
    `}
`;

// Copiando e modificando o RadioInput original:
export function CustomRadio({ children, checked, id, ...props }) {
  return (
    <Container>
      <input checked={checked} id={id} {...props} type="radio" />
      <label htmlFor={id}>
        <CustomRadioIcon checked={checked} />
        {/* rest of label */}
        {children}
      </label>
    </Container>
  );
}
