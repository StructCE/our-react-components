import React from "react";
import { users } from "../data";

type Users = (typeof users)[number];

interface Props {
  query: string;
}

export function FilterBySearch({ query }: Props) {
  const search = (data: Users[]) => {
    return data.filter(
      (item) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.sobrenome.toLowerCase().includes(query.toLowerCase()) ||
        item.diretoria.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <>
      {search(users).map((item) => (
        <div className="flex ml-[350px]" key={item.id}>
          <p className="flex-1">{item.nome}</p>
          <p className="flex-1">{item.sobrenome}</p>
          <p className="flex-1">{item.diretoria}</p>
        </div>
      ))}
    </>
  );
}
