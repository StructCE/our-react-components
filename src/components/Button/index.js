import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5em 1em;
  border: none;

  /* when select with keyboard, for accessibility */
  &:focus-visible {
    outline: orangered solid 1px;
    outline-offset: 1px;
  }

  /* specific styling */

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus-visible {
    box-shadow: 0.5em 0.5em 10px 1px rgba(0, 0, 0, 0.5);
  }

  font-size: 1rem;
  /* pill shaped border: */
  border-radius: 100vmax;
`;
