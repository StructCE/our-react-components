# Documentação: Componente de Button em ReactJS

O componente Button é uma forma rápida de criar botões estilizados em suas aplicações React. Ele aceita várias propriedades, permitindo que você personalize facilmente a aparência e o comportamento do botão.

## Utilização 

Uso padrão:

```js

import { Button } from "./index";

<Button onClick={() => alert("Olá mundo")}>Olá mundo</Button>;


```
### Atributos do componente

Os atributos do componente 'Button', foram implementados em uma forma padrão : `bg-gray-300 border-none py-[0.5em] px-[1em] hover:shadow-lg focus-visible:shadow-lg focus-visible:outline focus-visible:outline-orange-600 focus-visible:outline-offset-1 cursor-pointer rounded-md`
Porém podem ser alterados com uma 'Classname' durante a implementação do mesmo.



