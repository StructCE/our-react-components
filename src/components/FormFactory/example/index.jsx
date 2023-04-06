// A proposta deste exemplo é uma página de cadastro e login de usuário
//  Você tem a opção de registrar um novo usuário e, caso já tenha registrado algum, você
//  pode ir para a sessão de login e logar com os devidos email e senha do usuário cadastrado
// obs.: a lista de usuários reseta ao reiniciar a página

import { useState } from "react";
import { FormStyled, PageLayout } from "./styles";
import { RegisterForm, LoginForm } from "./schemas";
import { useApiSimulator } from "./utils";

export function FormFactoryExample() {
  // simulando api
  const api = useApiSimulator();

  // estado para definir qual sessão (register ou login) será exibida na página
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <PageLayout>
      {isRegistering && (
        <section>
          <h1>Registre-se</h1>
          <FormStyled>
            <RegisterForm
              onValidSubmit={({ formInfo }) => {
                api
                  .post("/users/create", { user: formInfo })
                  // eslint-disable-next-line no-alert
                  .then(() => alert("registrado com sucesso"))
                  // eslint-disable-next-line no-alert
                  .catch((er) => alert(er));
              }}
              // eslint-disable-next-line no-alert
              onInvalidSubmit={({ errors }) => {
                // eslint-disable-next-line no-alert
                errors.map((error) => alert(error));
              }}
              buttonContent="Registrar"
            />
          </FormStyled>
          <button type="button" onClick={() => setIsRegistering(false)}>
            Já tenho registro
          </button>
        </section>
      )}

      {!isRegistering && (
        <section>
          <h1>Entrar</h1>
          <FormStyled>
            <LoginForm
              // eslint-disable-next-line no-alert
              onValidSubmit={({ formInfo }) => {
                api
                  .get("/users/login", { user: formInfo })
                  // eslint-disable-next-line no-alert
                  .then(() => alert("logado com sucesso"))
                  // eslint-disable-next-line no-alert
                  .catch((er) => alert(er));
              }}
              // eslint-disable-next-line no-alert
              onInvalidSubmit={({ errors }) => {
                // eslint-disable-next-line no-alert
                errors.map((error) => alert(error));
              }}
              buttonContent="Entrar"
            />
          </FormStyled>
          <button type="button" onClick={() => setIsRegistering(true)}>
            Ainda não sou registrado
          </button>
        </section>
      )}
    </PageLayout>
  );
}
