// Forma de uso:
// -> Construa um array de imagens para o Carousel, em que cada imagem contenha
// o endereço da imagem (url) e um texto alternativo(alt).
// -> Chame a função Carousel, passando como argumento seu array criado.
// -> Agora basta estilizar o carrosel do seu jeito.

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";

type Image = {
  id: number;
  url: string;
  alt: string;
  link: string;
};

type Props = {
  images: Image[];
  autoplayTime: number; // Define a quantidade de segundos para as imagens passarem sozinhas (0 para nao passarem)
  infiniteLoop: boolean; // Define se o ciclo infinito sera utilizado ou nao (volta para primeira imagem, apos a ultima)
  showArrows: boolean; // Define se as setas serao utilizadas ou nao
  showNavigation: boolean; // Define se os botoes da navegacao irao aparecer embaixo das imagens
  enableSwipe: boolean; // Define se as imagens podem ser passadas ao arrasta-las
};

export function Carousel({
  images,
  autoplayTime,
  infiniteLoop,
  showArrows,
  showNavigation,
  enableSwipe,
}: Props) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [mouseStartX, setMouseStartX] = useState(0);
  let interval: NodeJS.Timeout;

  useEffect(() => {
    if (autoplayTime > 0) {
      interval = setInterval(() => {
        nextIndex();
      }, autoplayTime * 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplayTime, currentPosition]);

  function changePosition(nextPosition: number) {
    if (nextPosition >= images.length) {
      return infiniteLoop ? 0 : currentPosition;
    }

    if (nextPosition < 0) {
      return infiniteLoop ? images.length - 1 : currentPosition;
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

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="flex w-[200px] flex-col justify-center items-center relative mb-4 text-black"
      onTouchStart={(event) => {
        if (enableSwipe && event.touches[0]) {
          setTouchStartX(event.touches[0].clientX);
        }
      }}
      onTouchMove={(event) => {
        if (enableSwipe) {
          event.preventDefault();
        }
      }}
      onTouchEnd={(event) => {
        if (enableSwipe && event.changedTouches[0]) {
          const touchEndX = event.changedTouches[0].clientX;
          if (touchEndX < touchStartX) {
            nextIndex();
          } else if (touchEndX > touchStartX) {
            prevIndex();
          }
        }
      }}
      onMouseDown={(event) => {
        if (enableSwipe) {
          setMouseStartX(event.clientX);
        }
      }}
      onMouseMove={(event) => {
        if (enableSwipe) {
          event.preventDefault();
        }
      }}
      onMouseUp={(event) => {
        if (enableSwipe) {
          let mouseEndX = event.clientX;
          const diff = mouseEndX - mouseStartX;
          const threshold = 50; // Define o intervalo entre a posicao inicial e final do mouse para arrastar

          if (Math.abs(diff) > threshold) {
            if (diff < 0) {
              nextIndex();
            } else {
              prevIndex();
            }
          }

          setMouseStartX(0);
          mouseEndX = 0;
        }
      }}
    >
      {showArrows ? (
        <>
          <button
            className="border-none bg-transparent absolute top-1/2 -translate-y-2/4 right-[105%]"
            onClick={prevIndex}
          >
            <ArrowLeft />
          </button>
          <button
            className="border-none bg-transparent absolute top-1/2 -translate-y-2/4 left-[105%]"
            onClick={nextIndex}
          >
            <ArrowRight />
          </button>
        </>
      ) : (
        <></>
      )}
      {images.map((image, index) => (
        <div key={image.id}>
          {index === currentPosition && (
            <img
              draggable={false}
              src={image.url}
              alt={image.alt}
              onClick={() => image.link && handleClick(image.link)}
              style={{ cursor: image.link ? "pointer" : "default" }}
              className="select-none"
            />
          )}
        </div>
      ))}
      {showNavigation ? (
        <div className="absolute top-full h-4 flex">
          {images.map((image, index) => (
            <button
              onClick={() => moveDot(index)}
              className={`rounded-full border-solid border-[3px] bg-opacity-90
            ${currentPosition === index ? "bg-black" : "bg-white"}
             w-4 h-4 mx-[5px] cursor-pointer`}
              aria-label={`show ${image.alt}`}
              key={image.id}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
