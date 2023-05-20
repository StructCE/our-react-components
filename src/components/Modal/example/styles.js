import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 17px;
  }

  h2 {
    margin: 10px 0 20px;
    font-size: 15px;
    line-height: 1.5;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 15px;
    > label {
      text-align: left;
    }
    > button {
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
    }
  }

  input {
    width: 25rem;
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    font-size: 15px;
    line-height: 1;
    box-shadow: 0 0 0 1px;
    height: 35px;
  }
  input:focus {
    box-shadow: 0 0 0 2px;
  }

  .IconButton {
    background: transparent;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
  }
`;
