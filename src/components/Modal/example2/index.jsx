// Configuração quando tem mais de um input fica estranha
import React, { useState } from "react";
import { Modal } from "..";
import { ModalStyled } from "../example/styles";

export function ModalExample2() {
  const wait = () =>
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    wait().then(() => setOpen(false));
    event.preventDefault();
  };

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal>
        <ModalStyled>
          <h1>Edit Profile</h1>
          <h2>
            Make changes to your profile here. Click save when you are done
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <button type="submit" className="SaveButton">
              Save
            </button>
          </form>
        </ModalStyled>
      </Modal>
    </Modal.Root>
  );
}
