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
    gap: 20px;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;
  }

  label {
    font-size: 15px;
    width: 70px;
    text-align: right;
  }

  input {
    width: 100%;
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

  div {
    display: flex;
    margin-top: 25px;
    justify-content: flex-end;
  }

  .SaveButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    line-height: 1;
    font-weight: 500;
    height: 35px;
    cursor: pointer;
  }

  .IconButton {
    background: transparent;
    border: none;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
