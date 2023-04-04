// Como foi usado ?
// O que foi modificado e por que?

import React from "react";
import styled from "styled-components";
import { Carousel } from "..";
import { data } from "./data";

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
