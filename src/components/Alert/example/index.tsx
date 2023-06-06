/*
Este exemplo aborda a implementação do Alert para uma função de chamada da api,
já que tal método não foi abordado no exemplo 1

É uma página de criação de perfil numa plataforma fictícia de anime, onde
você irá preencher seus dados (anime favorito, gênero de anime favorito e
nome de usuário) e então irá solicitar a criação do seu perfil

Porém, a página foi implementada com uma api "defeituosa", onde apenas 1 a cada 3
tentativas de post são bem sucedidas, e, para o caso de falha, será
emitido um Alert para o usuário, onde ele poderá tentar a requisição
novamente, quantas vezes desejar, até conseguir criar o perfil com sucesso.

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

  /*
  para este exemplo, a api está "quebrada", e ela só responde adequadamente ao post
  em 1/3 dos casos (ou seja, ha uma chande de 33% de dar certo). Portanto, a função
  abaixo tenta realizar o post do usuário recursivamente
  */
  function tryPostUserRecursively() {
    api
      .post("/users/create", user)
      .then(() => {
        setStatusRequest("concluded");
      })
      .catch(async (e: Error) => {
        if (
          await alertCall({
            title: e.message,
            content: "Deseja tentar novamente?",
          })
        ) {
          tryPostUserRecursively();
        } else {
          setStatusRequest("error");
        }
      });
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setStatusRequest("loading");
    tryPostUserRecursively();
  }

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-auto bg-[url('/src/components/Alert/example/assets/background.jpg')] bg-center bg-no-repeat bg-fixed bg-cover">
      <section className="bg-amber-200/[0.75] w-10/12 h-5/6 flex rounded-lg shadow-lg justify-around">
        <img
          src={backgroundSection}
          alt="anime girl"
          className="hidden md:block"
        />

        <div className="mt-20 md:mr-10 max-w-[80%] md:min-w-[40%] flex flex-col">
          <h1 className="relative mx-auto w-full px-4 text-amber-800 font-extrabold text-2xl md:text-3xl bg-clip-text bg-gradient-to-br from-orange-700 to-amber-900 mb-3">
            <span className="text-transparent">
              Crie seu perfil no AnimeCenter
            </span>
            <RocketIcon />
          </h1>

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col items-center px-4"
          >
            <input
              value={user.favAnime}
              onChange={(ev) => setUser({ ...user, favAnime: ev.target.value })}
              className="mb-3 h-12 w-full relative bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu anime favorito"
            />
            <input
              value={user.favGenre}
              onChange={(ev) => setUser({ ...user, favGenre: ev.target.value })}
              className="mb-3 h-12 w-full bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu gênero favorito"
            />
            <input
              value={user.username}
              onChange={(ev) => setUser({ ...user, username: ev.target.value })}
              className="h-12 w-full bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
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
