import { useState } from "react";

export function useApiSimulator() {
  const [users, setUsers] = useState({});

  const api = {
    post: (route, data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            if (data && data.username && data.favAnime && data.favGenre) {
              setUsers(...users, data);
              resolve(data);
            }
          } else {
            reject(new Error("Rota não encontrada"));
          }
        }, 500);
      }),
  };
  return api;
}
