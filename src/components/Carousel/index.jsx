// Forma de uso:
// -> Construa um schema para o Carousel. Seu schema deve conter um Array de
// objetos em que cada objeto contenha uma image, a qual irá compor o seu
// carrosel.
// -> Chame a função Carousel passando como argumento seu schema criado, de
// forma que a propriedade image do seu objeto contenha a url da própria
// imagem.
// -> Agora basta estilizar o carrosel do seu jeito.

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";

export function Carousel({ schema }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  function changePosition(i) {
    if (i >= schema.length) {
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
    <div className="carousel-container">
      <ArrowLeft className="left-arrow" onClick={prevIndex} />
      <ArrowRight className="right-arrow" onClick={nextIndex} />
      {schema.map((item, index) => (
        <div
          className={index === currentPosition ? "item active" : "item"}
          key={item.index}
        >
          {index === currentPosition && (
            <img src={item.image} alt={item.title} />
          )}
        </div>
      ))}
      <div className="button-container" style={{ textAlign: "center" }}>
        {schema.map((item, index) => (
          <button
            onClick={() => moveDot(index)}
            className={currentPosition === index ? "button active" : "button"}
            type="button"
            aria-label="button navigation"
            style={{
              cursor: "pointer",
              width: "16px",
              height: "16px",
              margin: "5px 4px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
