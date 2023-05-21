import { useState } from "react";
import backgroundSection from "./images/backgroundSection.png";
import { useApiSimulator } from "./utils/api";
import { AlertCall } from "./stylizedAlerts";

export function AlertExample() {
  const api = useApiSimulator();
  const [user, setUser] = useState({
    username: "",
    favAnime: "",
    favGenre: "",
  });

  async function handleSubmit(ev) {
    ev.preventDefault();

    let confirmToProceed = null;
    await api.post("/user/create", user).catch(async (e) => {
      confirmToProceed = await AlertCall({
        title: e.message,
        content: "Deseja tentar novamente?",
      });
    });
    if (confirmToProceed) {
      await api.post("/users/create", user);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[url('./src/components/Alert/example/images/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <section className="bg-amber-200/70 w-10/12 h-5/6 flex rounded-lg shadow-lg">
        <img src={backgroundSection} alt="anime girl" />

        <div className="mt-20 ml-28">
          <h1 className="text-white font-extrabold text-3xl underline mb-3 w-96">
            Crie seu perfil no AnimeCenter
          </h1>
          <form onSubmit={handleSubmit} className="relative">
            <input
              value={user.favAnime}
              onChange={(ev) => setUser({ ...user, favAnime: ev.target.value })}
              className="mb-2 h-12 w-96 bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
              placeholder="Digite seu anime favorito"
            />
            <input
              value={user.favGenre}
              onChange={(ev) => setUser({ ...user, favGenre: ev.target.value })}
              className="mb-2 h-12 w-96 bg-white shadow-md py-3 px-4 outline-none transition-all ease-in focus:shadow-lg"
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
              className="inline-block bg-amber-400 hover:bg-amber-500 active:shadow-inner p-2 ease-in transition-all cursor-pointer shadow-sm rounded-sm -ml-11 "
            >
              Criar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
