import styled from "styled-components";

export const FormStyled = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > input {
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 5px;
      outline: none;
      padding: 0.5rem;
    }
    > input + input {
      margin-top: 0.5rem;
    }
    > button {
      width: 4rem;
      height: 2rem;
      margin: 1rem;
    }
  }
`;

export const PageLayout = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: white;

  .validSection {
    display: flex;
  }

  section {
    margin: auto;
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 0 3.5rem 1.5rem 3.5rem;
    background-color: rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    > h1 {
      margin: 0.75rem 0;
    }
  }
`;
