import { useState } from "react";
import styled from "styled-components";
import { RadioInput } from "..";
import { ArrowUp, ArrowUpLeft, ArrowUpRight } from "./svgs";

const PageLayout = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function RadioInputExample() {
  const [direction, setDirection] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  function handleSubmitMove(e) {
    e.preventDefault();

    // eslint-disable-next-line no-console
    setCurrentPosition((prev) => prev + direction);
  }

  function handleChangeMove(e) {
    setDirection(Number(e.target.value));
  }

  return (
    <PageLayout>
      <form onSubmit={handleSubmitMove}>
        <RadioInput
          name="direction"
          id="left"
          value={-1}
          onChange={handleChangeMove}
        >
          <ArrowUpLeft
            style={{
              cursor: "pointer",
              background: direction === -1 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <RadioInput
          name="direction"
          id="up"
          value={0}
          onChange={handleChangeMove}
        >
          <ArrowUp
            style={{
              cursor: "pointer",
              background: direction === 0 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <RadioInput
          name="direction"
          id="down"
          value={1}
          onChange={handleChangeMove}
        >
          <ArrowUpRight
            style={{
              cursor: "pointer",
              background: direction === 1 ? "rgba(255, 255, 255, 0.8)" : "",
            }}
          />
        </RadioInput>
        <br />
        <button type="submit">Move</button>
      </form>

      <div
        style={{
          display: "block",
          zIndex: -1,
          background: "red",
          margin: "20px",
          width: "50px",
          height: "50px",
          transform: `translateX(${currentPosition * 200}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      />
    </PageLayout>
  );
}
