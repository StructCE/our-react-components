// Forma de uso:
// -> Construa um array de imagens para o Carousel, em que cada imagem contenha
// o endereço da imagem (url) e um texto alternativo(alt).
// -> Chame a função Carousel, passando como argumento seu array criado.
// -> Agora basta estilizar o carrosel do seu jeito.

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";
import { Container } from "./styles";

type Image = {
  id: number;
  url: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentPosition, setCurrentPosition] = useState(0);

  function changePosition(nextPosition: number) {
    if (nextPosition >= images.length) {
      return;
    }

    if (nextPosition < 0) {
      return;
    }

    setCurrentPosition(nextPosition);
  }

  const nextIndex = () => changePosition(currentPosition + 1);

  const prevIndex = () => changePosition(currentPosition - 1);

  const moveDot = (toPosition: number) => changePosition(toPosition);

  return (
    <Container>
      <button type="button" className="left-arrow" onClick={prevIndex}>
        <ArrowLeft />
      </button>
      <button type="button" className="right-arrow" onClick={nextIndex}>
        <ArrowRight />
      </button>
      {images.map((image, index) => (
        <div
          className={index === currentPosition ? "image active" : "image"}
          key={image.id}
        >
          {index === currentPosition && <img src={image.url} alt={image.alt} />}
        </div>
      ))}
      <div className="button-container">
        {images.map((image, index) => (
          <button
            onClick={() => moveDot(index)}
            className={currentPosition === index ? "button active" : "button"}
            type="button"
            aria-label={`show ${image.alt}`}
            key={image.id}
          />
        ))}
      </div>
    </Container>
  );
}
