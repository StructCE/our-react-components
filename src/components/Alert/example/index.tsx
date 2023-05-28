/*
Este exemplo aborda a implementação do Alert para uma função de chamada da api,
já que tal método não foi abordado no exemplo 1

É uma página de criação de perfil numa plataforma fictícia de anime, onde
você irá preencher seus dados (anime favorito, gênero de anime favorito e
nome de usuário) e então irá solicitar a criação do seu perfil

Porém, a página foi implementada de foram que toda primeira tentativa de
post irá ser falha, por enviar uma requisição a uma rota errada, e então será
emitido um Alert para o usuário. Caso, pelo alert, ele deseje tentar novamente,
aí sim seu perfil irá ser criado

Obs.: também é emitido um possível segundo Alert, quando você não preenche um
dos campos do formulário
*/

import { useState, type FormEvent } from "react";
import backgroundSection from "./assets/backgroundSection.png";
import { useApiSimulator } from "./utils/api";
import { alertCall } from "./alert/stylizedAlerts";
import {
  ConcludedIcon,
  ErrorIcon,
  LoadingBar,
  RocketIcon,
} from "./assets/svgs";

export function AlertExample() {
  const api = useApiSimulator();
  const [user, setUser] = useState({
    username: "",
    favAnime: "",
    favGenre: "",
  });

  /*
  o estado statusRequest é para efeito de dinamicidade da página, podendo o usuário
  acompanhar o estado da sua requisição, por meio de um icon no botão
  */
  const [statusRequest, setStatusRequest] = useState("");

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    setStatusRequest("loading");
    api
      // aqui é passada uma rota errada (rota correta: "/users/create")
      .post("/user/create", user)
      .then(() => {
        // sabemos que nunca vai chegar aqui, mas coloquei por ser uma simulação de
        // requisição de uma api real e aí fica mais completinho
        setStatusRequest("concluded");
      })
      .catch(async (e: Error) => {
        // se o usuário confirmar nesse Alert, tentaremos fazer o post na api novamente
        if (
          await alertCall({
            title: e.message,
            content: "Deseja tentar novamente?",
          })
        ) {
          api
            .post("/users/create", user)
            .then(() => {
              setStatusRequest("concluded");
            })
            .catch(async (e: Error) => {
              await alertCall({
                title: e.message,
                content: "Deseja prosseguir?",
              });
              setStatusRequest("error");
            });
        } else {
          setStatusRequest("error");
        }
      });
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[url('./src/components/Alert/example/assets/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <section className="bg-amber-200/[0.75] w-10/12 h-5/6 flex rounded-lg shadow-lg">
        <img src={backgroundSection} alt="anime girl" />

        <div className="mt-20 ml-32">
          <h1 className="text-amber-800 font-extrabold text-3xl bg-clip-text bg-gradient-to-br from-orange-700 to-amber-900 mb-3 w-96">
            <span className="text-transparent">
              Crie seu perfil no AnimeCenter
            </span>
            <RocketIcon />
          </h1>

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col items-center"
          >
            <input
              value={user.favAnime}
              onChange={(ev) => setUser({ ...user, favAnime: ev.target.value })}
              className="mb-3 h-12 w-96 bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu anime favorito"
            />
            <input
              value={user.favGenre}
              onChange={(ev) => setUser({ ...user, favGenre: ev.target.value })}
              className="mb-3 h-12 w-96 bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu gênero favorito"
            />
            <input
              value={user.username}
              onChange={(ev) => setUser({ ...user, username: ev.target.value })}
              className="h-12 w-96 bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu nome de usuário"
            />
            <button
              type="submit"
              className="mt-4 text-white bg-amber-700 hover:bg-amber-800 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-semibold rounded-sm text-base px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-yellow-600 inline-flex items-center shadow-md shadow-yellow-600"
            >
              {statusRequest === "loading" && <LoadingBar />}
              {statusRequest === "concluded" && <ConcludedIcon />}
              {statusRequest === "error" && <ErrorIcon />}
              Criar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
