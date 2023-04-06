import { useState } from "react";

export function useApiSimulator() {
  const [users, setUsers] = useState([]);
  const api = {
    post: (route, data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            const { user } = data;
            if (users.find((u) => u.email === user.email)) {
              reject(new Error("Este email já está cadastrado"));
            } else {
              setUsers([...users, user]);
              resolve(data);
            }
          } else {
            reject(new Error("Rota não encontrada"));
          }
        }, 1000);
      }),
    get: (route, data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/login") {
            const { user } = data;
            if (
              users.find(
                (u) => u.email === user.email && u.password === user.password
              )
            ) {
              resolve(data);
            } else if (users.find((u) => u.email === user.email)) {
              reject(new Error("Senha incorreta"));
            } else {
              reject(new Error("Usuário não registrado"));
            }
          }
        }, 1000);
      }),
  };
  return api;
}
