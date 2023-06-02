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
            if (!(data && data.username && data.favAnime && data.favGenre)) {
              if (!(Math.floor(Math.random() * 3) === 0)) {
                // Math.floor(Math.random() * n) gera um número aleatório de 0 a n
                reject(new Error("Erro na API"));
              } else {
                setUsers([...users, data]);
                resolve(data);
              }
            } else {
              reject(new Error("Dados incompletos"));
            }
          }
        }, 500);
      }),
  };
  return api;
}
