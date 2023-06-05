// Proposta do exemplo: Mostrar o funcionamento de um modal controlado.
// Este modal possui o mesmo funcionamento básico do Exemplo 1, porém,
// com alguns diferenciais, tal qual, a possibilidade de verificar as
// validações de requisições antes de fechá-lo.
import React, { useState } from "react";
import { Modal } from "..";
import { CloseX } from "../example/svgs";
import { UsersForm } from "../example/users";
import { useApiSimulator } from "../example/utils";

export function ModalExample2() {
  // simulando api
  const api = useApiSimulator();

  const [open, setOpen] = useState(false);

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <div className="max-w-md max-h-[85vh] p-6">
          <h1 className="m-0 font-medium text-base">Edit Profile</h1>
          <h2 className="mt-2.5 mb-5 mx-0 text-base">
            Make changes to your profile here. Click save when you are done.
          </h2>
          <UsersForm
            onValidSubmit={({ formInfo }) => {
              api
                .patch("/users/update/:email", { user: formInfo })
                // eslint-disable-next-line no-alert
                .then(() => {
                  setOpen(false);
                  alert("Usuário atualizado com sucesso");
                })
                .catch((e) => alert(e));
            }}
            onInvalidSubmit={({ errors }: { errors: string[] }) => {
              // eslint-disable-next-line no-alert
              errors.map((error) => alert(error));
            }}
            buttonContent="Save"
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
