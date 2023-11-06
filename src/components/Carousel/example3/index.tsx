// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// O codigo pode ser alterado para definir quais das propriedades abaixo sera utilizadas:
// - AutoplayTime: as imagens passam sozinhas apos a quantidade de segundos indicada (0 para nao utilizar)
// - Infinite: apos a ultima imagem volta para primeira
// - Arrows: define se as setas serao utilizadas ou nao
// - Swipe: define se as imagens podem ser passadas ao arrasta-las
// - Navgation: define se os botoes da navegacao irao aparecer embaixo das imagens

// O exemplo abaixo é um carrossel que as imagens passam sozinhas ou ao clicar nos botoes de navegacao

import React from "react";
import { Carousel } from "..";
import { images } from "./images";

export function CarouselExample() {
  return (
    <section className="h-screen w-full relative flex flex-col justify-center items-center bg-slate-50">
      <Carousel
        images={images}
        autoplayTime={5}
        infinite={true}
        arrows={false}
        navigation={true}
        swipe={false}
      />
    </section>
  );
}
