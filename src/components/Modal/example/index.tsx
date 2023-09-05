// Proposta do exemplo: Mostrar o funcionamento de um modal não-controlado (padrão).
// Em síntese, o modal é aberto e colocado em foco ao se apertar o botão "Open Modal".
// Dentro do modal, há exemplos de textos e inputs que podem ser inseridos.
// Por fim, para fechar o modal, basta clicar nos botões "Save", "X" ou fora do modal.
import { Modal } from "../index";
import { CloseX } from "./svgs";
import { UsersForm } from "./users";
import { useApiSimulator } from "./utils";

export function ModalExample() {
  // simulando api
  const api = useApiSimulator();

  return (
    <section className="flex flex-col h-[200vh]">
      <h1 className="text-4xl p-2">Usuários</h1>
      <Modal.Root>
        <Modal.Trigger className="mx-auto px-8 py-4 mt-[40vh] bg-green-400 rounded-full">
          Adicionar (+)
        </Modal.Trigger>
        <Modal.Content className="text-neutral-100 bg-neutral-600 py-10 px-4 rounded-md flex flex-col">
          <Modal.Close asChild>
            <button type="button" aria-label="Close" className="ml-auto">
              <CloseX />
            </button>
          </Modal.Close>
          <h2 className="text-xl font-semibold">Adicione Usuário</h2>
          <h3 className="text-lg">
            Coloque as informações de usuário. Clique no botão de Adicionar após
            preencher.
          </h3>
          <UsersForm
            onValidSubmit={(user) => {
              api
                .post("/users/create", { user })
                // eslint-disable-next-line no-alert
                .then(() => alert("Usuário criado com sucesso"))
                // eslint-disable-next-line no-alert
                .catch((er) => alert(er));
            }}
            onInvalidSubmit={() => {
              // eslint-disable-next-line no-alert
              // errors.map((error) => alert(error));
            }}
            buttonContent="Adicionar"
          />
        </Modal.Content>
      </Modal.Root>
    </section>
  );
}
