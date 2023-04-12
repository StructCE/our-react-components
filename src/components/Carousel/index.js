import React, {useEffect, useState} from "react";
import Carousel from 'react-elastic-carousel'
import { Container } from "./styles"

export const Carousel = () => {
    //mostra quantas imagens cabem na tela a partir do tamanho
    const Breakpoints = [
        {width: 550, itemsToShow: 1},
        {width: 768, itemsToShow: 2}
    ];

    const [items, setItems] = useState([]); //coloco uma lista no argumento ??

    return(
        <Container>
            <Carousel>
                breakpoint={Breakpoints}
                {items.map((item) => (
                    //faço uma componentização separada ??
                ))}
            </Carousel>
        </Container>
    )
}