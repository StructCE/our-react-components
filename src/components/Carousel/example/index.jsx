// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// Em síntese, a mudança de imagens se dá por meio setas ou por  meio de
// botões de navegação encontrados na parte inferior.

import React from "react";
import styled from "styled-components";
import { Carousel } from "..";
import { images } from "./images";

const PageLayout = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function CarouselExample() {
  return (
    <PageLayout>
      <Carousel images={images} />
    </PageLayout>
  );
}
