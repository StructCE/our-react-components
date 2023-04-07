// Proposta do exemplo: Mostrar o clássico funcionamento de um carrosel.
// Em síntese, a mudança de imagens se dá por meio setas ou por  meio de
// botões de navegação encontrados na parte inferior.

import React from "react";
import styled from "styled-components";
import { Carousel } from "..";
import { data } from "./schema";

const PageLayout = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 200px;
  display: flex;

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 45%;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
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

export function CarouselExample() {
  return (
    <PageLayout>
      <Container>
        <Carousel schema={data} />
      </Container>
    </PageLayout>
  );
}
