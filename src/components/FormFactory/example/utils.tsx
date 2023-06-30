import { useState } from "react";
import { type registerSchema } from "./forms";
import { type z } from "zod";

type current_user = z.infer<typeof registerSchema>;

export function useApiSimulator() {
  const [users, setUsers] = useState<current_user[]>([] as current_user[]);
  const api = {
    post: (route: string, data: current_user) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            const user: current_user = data;
            if (users.find((u: current_user) => u.email === user.email)) {
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

    get: (route: string, data: current_user) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/login") {
            const user: current_user = data;
            if (
              users.find(
                (u: current_user) =>
                  u.email === user.email && u.password === user.password
              )
            ) {
              resolve(data);
            } else if (
              users.find((u: current_user) => u.email === user.email)
            ) {
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
