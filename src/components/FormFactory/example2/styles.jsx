import styled from "styled-components";

export const FormLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -6px;
  h1 {
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
    }
    > div + div {
      margin-top: 0.3rem;
    }
    > button {
      align-self: center;
      margin: 0.8rem 0;
    }
  }
`;

export const AddFormLayout = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  h1 {
    font-size: 1.3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 50%;
    padding-left: 0.4rem;
  }
  form {
    margin-left: 0.8rem;
    > div {
      display: flex;
      flex-direction: column;
      width: 15rem;
      > input {
        border: none;
        outline: none;
        padding: 0.2rem 0.2rem;
        border-radius: 5px;
      }
    }
    > button {
      margin: 1rem 0;
    }
  }
`;

export const FormDataLayout = styled.section`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) -2px 8px 80px -6px;
  min-height: 8rem;
  h1 {
    font-size: 1.3rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    width: 60%;
    padding-left: 0.4rem;
  }
`;
