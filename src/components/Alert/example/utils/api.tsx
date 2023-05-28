// simulação de api para funcionamento da página exemplo

import { useState } from "react";

export function useApiSimulator() {
  const [users, setUsers] = useState([{}]);

  const api = {
    post: (
      route: string,
      data: { username: string; favAnime: string; favGenre: string }
    ) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            if (data && data.username && data.favAnime && data.favGenre) {
              setUsers([...users, data]);
              resolve(data);
            } else {
              reject(new Error("Dados incompletos"));
            }
          } else {
            reject(new Error("Rota não encontrada"));
          }
        }, 500);
      }),
  };
  return api;
}
