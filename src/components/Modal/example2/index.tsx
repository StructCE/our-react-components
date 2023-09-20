// Proposta do exemplo: Mostrar o funcionamento de um modal controlado.
// Este modal possui o mesmo funcionamento básico do Exemplo 1, porém,
// com alguns diferenciais, tal qual, a possibilidade de verificar as
// validações de requisições antes de fechá-lo.
import React, { useState } from "react";
import { Modal } from "..";

export function ModalExample2() {
  // simulando api

  const [cookiePermitted, setCookiePermitted] = useState(false);

  return (
    <>
      {cookiePermitted ? (
        "Está sendo personalizada"
      ) : (
        <Modal.Root>
          <Modal.Trigger>Personalize sua experiência</Modal.Trigger>
          <Modal.Content className="bg-zinc-700 flex flex-col p-6 gap-2">
            <span className="text-xl font-semibold text-neutral-300">
              Gostaria de deixar a gente fazer as{" "}
              <strong className="text-neutral-200 underline">
                melhores ofertas
              </strong>
              ?
            </span>
            <div className="flex justify-between">
              <Modal.Close className="bg-red-400 p-4 w-max mx-auto rounded-sm">
                Não quero
              </Modal.Close>
              <button
                className="bg-green-400 p-4 w-max mx-auto rounded-sm"
                onClick={() => setCookiePermitted(true)}
              >
                Aceito ter meus dados coletados neste site
              </button>
            </div>
          </Modal.Content>
        </Modal.Root>
      )}
    </>
  );
}
