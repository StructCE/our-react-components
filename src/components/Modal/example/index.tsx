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
    <Modal.Root>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <div className="max-w-md max-h-[85vh] p-6">
          <h1 className="m-0 font-medium text-base">Add User</h1>
          <h2 className="mt-2.5 mb-5 mx-0 text-base">
            Please enter the user's informations. Click add when you are done.
          </h2>
          <UsersForm
            onValidSubmit={({ formInfo }) => {
              api
                .post("/users/create", { user: formInfo })
                // eslint-disable-next-line no-alert
                .then(() => alert("Usuário criado com sucesso"))
                // eslint-disable-next-line no-alert
                .catch((er) => alert(er));
            }}
            onInvalidSubmit={({ errors }: { errors: string[] }) => {
              // eslint-disable-next-line no-alert
              errors.map((error) => alert(error));
            }}
          />
          <Modal.Close asChild>
            <button
              type="button"
              aria-label="Close"
              className="bg-transparent border-none inline-flex items-center content-center absolute top-3 right-3 cursor-pointer"
            >
              <CloseX />
            </button>
          </Modal.Close>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
