// A proposta deste exemplo é uma página de cadastro e login de usuário
//  Você tem a opção de registrar um novo usuário e, caso já tenha registrado algum, você
//  pode ir para a sessão de login e logar com os devidos email e senha do usuário cadastrado
// obs.: a lista de usuários reseta ao reiniciar a página

import { useState } from "react";
import { RegisterForm, LoginForm } from "./forms";
import { useApiSimulator } from "./utils";

export function FormFactoryExample() {
  // simulando api
  const api = useApiSimulator();

  // estado para definir qual sessão (register ou login) será exibida na página
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center align-center">
      {isRegistering && (
        <section className="w-max block">
          <h1>Registre-se</h1>
          <div className="w-max">
            <RegisterForm
              onValidSubmit={(user) => {
                api
                  .post("/users/create", user)
                  // eslint-disable-next-line no-alert
                  .then(() => alert("registrado com sucesso"))
                  // eslint-disable-next-line no-alert
                  .catch((er) => alert(er));
              }}
              onInvalidSubmit={(error) => {
                // eslint-disable-next-line no-alert
                // error.issues.map((error) => alert(error.message)); // pode-se personalizar a msg de erro no schema
                alert(error);
              }}
              buttonContent="Registrar"
            />
          </div>
          <button type="button" onClick={() => setIsRegistering(false)}>
            Já tenho registro
          </button>
        </section>
      )}

      {!isRegistering && (
        <section className="w-max block">
          <h1>Entrar</h1>
          <div className="w-max">
            <LoginForm
              onValidSubmit={(user) => {
                api
                  .get("/users/login", user)
                  // eslint-disable-next-line no-alert
                  .then(() => alert("logado com sucesso"))
                  // eslint-disable-next-line no-alert
                  .catch((er) => alert(er));
              }}
              onInvalidSubmit={(error) => {
                // eslint-disable-next-line no-alert
                // error.issues.map((error) => alert(error.message)); // pode-se personalizar a msg de erro no schema
                alert(error);
              }}
              buttonContent="Entrar"
            />
          </div>
          <button type="button" onClick={() => setIsRegistering(true)}>
            Ainda não sou registrado
          </button>
        </section>
      )}
    </div>
  );
}
