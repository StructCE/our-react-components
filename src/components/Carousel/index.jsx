// Forma de uso:
// -> Construa um array de imagens para o Carousel, em que cada imagem contenha
// o endereço da imagem (url) e um texto alternativo(alt).
// -> Chame a função Carousel, passando como argumento seu array criado.
// -> Agora basta estilizar o carrosel do seu jeito.

import { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "./svgs";

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .right-arrow {
    position: absolute;
    top: 48%;
    right: 45%;
  }

  .left-arrow {
    position: absolute;
    top: 48%;
    left: 45%;
  }

  .button {
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
  }
  .button.active {
    background: rgb(32, 32, 32);
  }
`;

export function Carousel({ images }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  function changePosition(i) {
    if (i >= images.length) {
      return;
    }

    if (i < 0) {
      return;
    }

    setCurrentPosition(i);
  }

  const nextIndex = () => changePosition(currentPosition + 1);

  const prevIndex = () => changePosition(currentPosition - 1);

  const moveDot = (index) => changePosition(index);

  return (
    <Container>
      <ArrowLeft className="left-arrow" onClick={prevIndex} />
      <ArrowRight className="right-arrow" onClick={nextIndex} />
      {images.map((image, index) => (
        <div
          className={index === currentPosition ? "image active" : "image"}
          key={image.index}
        >
          {index === currentPosition && <img src={image.url} alt={image.alt} />}
        </div>
      ))}
      <div className="button-container" style={{ textAlign: "center" }}>
        {images.map((image, index) => (
          <button
            onClick={() => moveDot(index)}
            className={currentPosition === index ? "button active" : "button"}
            type="button"
            aria-label={`show ${image.alt}`}
            style={{
              cursor: "pointer",
              width: "16px",
              height: "16px",
              margin: "5px 4px",
            }}
          />
        ))}
      </div>
    </Container>
  );
}
