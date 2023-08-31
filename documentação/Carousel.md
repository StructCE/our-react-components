# Documentação: Componente de Carousel em ReactJS

O componente Carousel permite que você crie um carrossel de imagens com controles de navegação e indicadores. Ele permite que os usuários naveguem pelas imagens e fornece indicadores para mostrar a posição atual.

## Utilização 

1 - Crie um array de imagens para o Carousel, no qual cada imagem contenha o endereço da imagem (url) e um texto alternativo(alt).

2 - Chame a função Carousel, passando como argumento seu array criado.

3 - Estilize o carrosel de acordo com suas preferências de design.

## Exemplo:

```js

import { Carousel } from "..";

const images = [
  {
    id: 0,
    url: "./Images/Cavalinho1.jpg",
    alt: "Cavalinho 1",
  },
  {
    id: 1,
    url: "./Images/Cavalinho2.jpeg",
    alt: "Cavalinho 2",
  },
  {
    id: 2,
    url: "./Images/Cavalinho3.png",
    alt: "Cavalinho 3",
  },
];

<section className="h-screen w-full relative flex flex-col justify-center items-center">
    <Carousel images={images} />
</section>

```




