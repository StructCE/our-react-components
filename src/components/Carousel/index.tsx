// Forma de uso:
// -> Construa um array de imagens para o Carousel, em que cada imagem contenha
// o endereço da imagem (url) e um texto alternativo(alt).
// -> Chame a função Carousel, passando como argumento seu array criado.
// -> Agora basta estilizar o carrosel do seu jeito.

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";

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
    <div className="flex w-[200px] flex-col justify-center items-center relative mb-4 text-black">
      <button
        className="border-none bg-transparent absolute top-1/2 -translate-y-2/4 right-[105%]"
        type="button"
        onClick={prevIndex}
      >
        <ArrowLeft />
      </button>
      <button
        className="border-none bg-transparent absolute top-1/2 -translate-y-2/4 left-[105%]"
        type="button"
        onClick={nextIndex}
      >
        <ArrowRight />
      </button>
      {images.map((image, index) => (
        <div key={image.id}>
          {index === currentPosition && <img src={image.url} alt={image.alt} />}
        </div>
      ))}
      <div className="absolute top-full h-4 flex">
        {images.map((image, index) => (
          <button
            onClick={() => moveDot(index)}
            className={`rounded-full border-solid border-[3px]
            ${currentPosition === index ? "bg-primary-100" : "bg-primary-500"}
             w-4 h-4 mx-[5px] cursor-pointer`}
            type="button"
            aria-label={`show ${image.alt}`}
            key={image.id}
          />
        ))}
      </div>
    </div>
  );
}
