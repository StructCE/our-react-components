import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "..";
import { ArrowLeft } from "./svgs";

const PageLayout = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function CarouselExample() {
  // current value index and a callback for changing it
  const [currentPosition, setCurrentPosition] = useState(0);

  const changePosition = (_e, newCurrentPosition) => {
    setCurrentPosition(newCurrentPosition);
  };

  const data = [
    {
      id: 1,
      image: "./public/Images/Cavalinho1.jpg",
      title: "Cavalinho 1",
    },
    {
      id: 2,
      image: "./public/Images/Cavalinho2.jpg",
      title: "Cavalinho 2",
    },
  ];

  return (
    <PageLayout>
      <Carousel
        name="arrow left"
        id="back"
        onClick={() => {
          const change = currentPosition === 0 ? 0 : 1;
          changePosition(1, currentPosition - change);
        }}
      >
        <ArrowLeft/>
        {data.map(({ id, image, title }) => (
          <div className="box_image" key={id}>
            <img src={image} alt={title} width={200} />
          </div>
        ))}
      </Carousel>
    </PageLayout>
  );
}
