// Comentar como usar
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./svgs";

export function Carousel({ schema, style }) {
  const [currentPosition, setCurrentPosition] = useState(0);

  function changePosition(i) {
    if (i > schema.length) {
      return;
    }

    if (i < 0) {
      return;
    }

    setCurrentPosition(i);
  }

  const nextIndex = () => changePosition(currentPosition + 1);

  const prevIndex = () => changePosition(currentPosition - 1);

  return (
    <div className="Container" style={{ ...style }}>
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
    </div>
  );
}
