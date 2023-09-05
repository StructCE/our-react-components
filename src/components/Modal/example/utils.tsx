import { useState } from "react";
import type { z } from "zod";
import { userSchema } from "./users";

type User = z.output<typeof userSchema>;

const initialUsers = [
  {
    username: "Jessica",
    email: "teste@teste.com",
    role: "Membro",
    age: 18,
  },
] satisfies User[];

export function useApiSimulator() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const api = {
    post: (route: string, data: unknown) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/create") {
            const user = userSchema.parse(data);
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

    patch: (route: string, data: unknown) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (route === "/users/update/:email") {
            const user = userSchema.parse(data);
            if (users.find((u) => u.email === user.email)) {
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
