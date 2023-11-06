// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// O codigo pode ser alterado para definir quais das propriedades abaixo sera utilizadas:
// - AutoplayTime: as imagens passam sozinhas apos a quantidade de segundos indicada (0 para nao utilizar)
// - Infinite: apos a ultima imagem volta para primeira
// - Arrows: define se as setas serao utilizadas ou nao
// - Navgation: define se os botoes da navegacao irao aparecer embaixo das imagens
// - Swipe: define se as imagens podem ser passadas ao arrasta-las

// O exemplo abaixo é um carrossel tradicional com as setas e os botoes de navegacao

import React from "react";
import { Carousel } from "..";
import { images } from "./images";

export function CarouselExample() {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-center">
      <Carousel
        images={images}
        autoplayTime={0}
        infinite={false}
        arrows={true}
        navigation={true}
        swipe={false}
      />
    </section>
  );
}
