// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// O codigo pode ser alterado para definir quais das propriedades abaixo sera utilizadas:
// - autoplayTime: as imagens passam sozinhas apos a quantidade de segundos indicada, para nao utilizar basta nao passar o prop
// - infiniteLoop: apos a ultima imagem volta para primeira
// - showArrows: define se as setas serao utilizadas ou nao
// - showNavgation: define se os botoes da navegacao irao aparecer embaixo das imagens
// - enableSwipe: define se as imagens podem ser passadas ao arrasta-las

// O exemplo abaixo é um carrossel sem controle, as imagens passam sozinha
// e quando chegam a ultima volta para primeira

import React from "react";
import { Carousel } from "..";
import { images } from "./images";

export function CarouselExample() {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-center">
      <Carousel
        images={images}
        autoplayTime={5}
        infiniteLoop={true}
        showArrows={false}
        showNavigation={false}
        enableSwipe={false}
      />
    </section>
  );
}
