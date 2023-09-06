# Nossa Biblioteca de Componentes React

## Como usar

Copiar e colar os arquivos desejados para o seu projeto.

Talvez seja necessário instalar as bibliotecas do RadixUI ou react-aria para os seus componentes.

## Como contribuir

1. Dê um git clone no projeto
2. Instale as dependências com `yarn`
3. Rode o projeto com `yarn dev`
4. Crie uma branch com o nome da sua feature (`feature/nome-da-feature`)
5. Dê um exemplo de como usar o seu componente.
6. Faça um pull request

### Observações

#### Começar pelo exemplo

Quando se está fazendo features mais complexas, vale a pena começar por como se usa o componente. Por exemplo, você pode idealizar uma fábrica de formulário da seguinte maneira (já foi alterado/melhorado):

```js
import { FormFactory } from "";

const userSchema = {
  name: {
    type: "text", // input type, could be image, etc
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
  email: {
    type: "email",
    required: true,
  },
  password: {
    type: "password",
    required: true,
    customValidation: (formInfo) => formInfo.password.length > 6,
  },
  passwordConfirmation: {
    type: "password",
    required: true,
    customValidation: (formInfo) =>
      formInfo.password === formInfo.passwordConfirmation,
  },
};

export const UserForm = FormFactory(userSchema);
```

E agora a parte mais chata de criar formulários está escondida atrás de uma fábrica de formulário.

É bom lembrar que funcionalidades demais em um componente acabam dificultando seu uso. Poderíamos ter passado também um onSubmit para a Factory, mas isso está facilitando algo? Não. Então, vamos deixar para o usuário do componente decidir o que fazer com o onSubmit.

Também não vale a pena complicar o uso para deixar genérico demais. A gente tem o código aberto pra nós, então podemos alterá-lo para encaixar no projeto que for.

#### Prettier e ESLint

- O projeto está configurado para usar o [Prettier](https://prettier.io/) para formatar o código.
- O projeto está configurado para usar o [ESLint](https://eslint.org/) para verificar se o código está de acordo com as regras do projeto.

Sendo assim, é recomendado instalar essas extensões no seu editor de código.
