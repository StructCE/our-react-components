// Forma de uso:
// -> Construa um array de imagens para o Carousel, em que cada imagem contenha
// o endereço da imagem (url) e um texto alternativo(alt).
// -> Chame a função Carousel, passando como argumento seu array criado.
// -> Agora basta estilizar o carrosel do seu jeito.

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";

type Image = {
  id: number;
  url: string;
  alt: string;
};

type Props = {
  images: Image[];
  autoplay: boolean;
  infinite: boolean;
};

export function Carousel({ images, autoplay, infinite }: Props) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  let interval: NodeJS.Timeout;

  infinite = true; // Define se o ciclo infinito sera utilizado ou nao (volta para primeira imagem, apos a ultima)

  useEffect(() => {
    setIsAutoplay(true); // Define se o autoplay sera utilizado ou nao

    if (isAutoplay) {
      interval = setInterval(() => {
        nextIndex();
      }, 5000); // Define o intervalo entre as imagens (em ms)
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isAutoplay, currentPosition]);

  function changePosition(nextPosition: number) {
    if (nextPosition >= images.length) {
      return infinite ? 0 : currentPosition;
    }

    if (nextPosition < 0) {
      return infinite ? images.length - 1 : currentPosition;
    }

    return nextPosition;
  }

  const nextIndex = () => {
    setCurrentPosition(changePosition(currentPosition + 1));
  };

  const prevIndex = () => {
    setCurrentPosition(changePosition(currentPosition - 1));
  };

  const moveDot = (toPosition: number) => {
    setCurrentPosition(changePosition(toPosition));
  };

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
          {index === currentPosition && (
            <img draggable={false} src={image.url} alt={image.alt} />
          )}
        </div>
      ))}
      <div className="absolute top-full h-4 flex">
        {images.map((image, index) => (
          <button
            onClick={() => moveDot(index)}
            className={`rounded-full border-solid border-[3px] bg-opacity-90
            ${currentPosition === index ? "bg-black" : "bg-white"}
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
