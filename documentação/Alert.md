# Documentação: Componente de Alert em ReactJS

O componente Alert permite que você crie caixas de alerta personalizadas para interações do usuário em aplicações React.Oferecendo controle sobre o conteúdo, títulos, botões de confirmação , cancelamento, e capacidade de definir o comportamento padrão da caixa de diálogo.

## Instalação

Lembre-se de instalar a biblioteca '@radix-ui/react-alert-dialog' pelo comando : `npm install @radix-ui/react-alert-dialog`

## Utilização 

Uso padrão:

```js

import React from 'react';
import { Alert, alertCall } from './alert/stylizedAlerts';

<Alert
  title=" "
  content=" "
  onConfirm={function}
  confirmText=" "
  onCancel={function}
  cancelText=" "
  defaultOpen=boolean
  canOpen=boolean
>
  <button>Botão</button>
</Alert>


```

### Atributos do componente Alert

-title: O título da caixa de alerta.

-content: O conteúdo da mensagem de alerta.

-cancelText: Texto para o botão de cancelamento (padrão: "Cancelar").

-confirmText: Texto para o botão de confirmação (padrão: "Confirmar").

-onCancel: Função a ser chamada quando o botão de cancelamento é clicado.

-onConfirm: Função a ser chamada quando o botão de confirmação é clicado.

-children: gatilho para abrir a caixa de diálogo.

-defaultOpen: Define se o componente deve iniciar aberto ou não (padrão: false).

-canOpen: Controla se o Alert pode ser aberto (padrão: true).

## Exemplo:

```js
    <Alert
      onConfirm={() => setResponse(true)}
      onCancel={() => setResponse(false)}
      title="Alert"
      content="Deseja prosseguir?"
    >
      <button
        type="button"
        className="px-4 py-2 mt-4 mb-6 w-32 shadow-md shadow-cyan-800 justify-center hover:bg-cyan-100 border border-cyan-400 font-medium rounded-lg text-sm inline-flex dark:bg-cyan-800 dark:border-cyan-700 dark:text-white dark:hover:bg-cyan-700"
      >
        Emitir status
      </button>
    </Alert>

```

Não é necessário utilizar todos os props do componente.