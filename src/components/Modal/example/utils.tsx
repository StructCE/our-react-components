import { useState } from "react";

type User = {
  username: string;
  email: string;
  credit?: number;
  age?: number;
  status: string;
  role?: Text;
};

export function useApiSimulator() {
  const [users, setUsers] = useState([
    {
      username: "Jessica",
      email: "teste@teste",
      status: "active",
    },
  ]);
  const api = {
    post: (route: string, data: User) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            const user: User = data;
            if (users.find((u: User) => u.email === user.email)) {
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

    patch: (route: string, data: User) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/update/:email") {
            const user: User = data;
            if (users.find((u: User) => u.email === user.email)) {
              resolve(data);
            } else {
              reject(new Error("Usuário não existe"));
            }
          }
        }, 1000);
      }),
  };
  return api;
}
