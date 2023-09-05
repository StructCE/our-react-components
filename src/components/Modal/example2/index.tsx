// Proposta do exemplo: Mostrar o funcionamento de um modal controlado.
// Este modal possui o mesmo funcionamento básico do Exemplo 1, porém,
// com alguns diferenciais, tal qual, a possibilidade de verificar as
// validações de requisições antes de fechá-lo.
import React, { useState } from "react";
import { Modal } from "..";
import { ModalStyled } from "../example/styles";
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
        <ModalStyled>
          <h1>Edit Profile</h1>
          <h2>
            Make changes to your profile here. Click save when you are done.
          </h2>
          <UsersForm
            onValidSubmit={(user) => {
              api
                .patch("/users/update/:email", { user })
                // eslint-disable-next-line no-alert
                .then(() => {
                  setOpen(false);
                  alert("Usuário atualizado com sucesso");
                })
                .catch((e) => alert(e));
            }}
            onInvalidSubmit={({ errors }) => {
              // eslint-disable-next-line no-alert
              errors.map((error) => alert(error));
            }}
            buttonContent="Save"
          />
          <Modal.Close asChild>
            <button type="button" aria-label="Close" className="IconButton">
              <CloseX />
            </button>
          </Modal.Close>
        </ModalStyled>
      </Modal.Content>
    </Modal.Root>
  );
}
