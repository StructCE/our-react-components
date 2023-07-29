// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// Em síntese, a mudança de imagens se dá por meio setas ou por  meio de
// botões de navegação encontrados na parte inferior.

import React from "react";
import { Carousel } from "..";
import { images } from "./images";

export function CarouselExample() {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-center">
      <Carousel images={images} />
    </section>
  );
}
