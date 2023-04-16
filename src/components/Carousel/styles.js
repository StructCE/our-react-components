import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5px;

  --arrow-offset: 5%;
  margin-left: var(--arrow-offset);
  margin-right: var(--arrow-offset);

  .right-arrow,
  .left-arrow {
    background: transparent;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .right-arrow {
    left: calc(100% + var(--arrow-offset)); // 105%
  }
  .left-arrow {
    right: calc(100% + var(--arrow-offset)); // 105%
  }

  .button-container {
    position: absolute;
    top: 100%;
  }
  .button {
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .button.active {
    background: rgb(32, 32, 32);
  }
`;
