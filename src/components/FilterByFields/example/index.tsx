import React, { useState } from "react";
import { Users } from "../data";

type Props = {
  nome: string;
  sobrenome: string;
  diretoria: string;
  id: number;
};

export function FilterBySearch() {
  const [query, setQuery] = useState("");

  const search = (data: Props[]): Props[] => {
    return data.filter(
      (item: Props) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.sobrenome.toLowerCase().includes(query.toLowerCase()) ||
        item.diretoria.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <>
      <input
        className="m-auto mt-11 flex text-center"
        placeholder="Busca"
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <table className="flex flex-col items-center m-auto">
        <thead className="w-[80%]">
          <tr className="flex text-[30px]">
            <th className="flex flex-1">Nome</th>
            <th className="flex flex-1">Sobrenome</th>
            <th className="flex flex-1">Diretoria</th>
          </tr>
        </thead>
        <tbody className="w-[80%]">
          {search(Users).map((item) => (
            <tr className="flex text-[20px]" key={item.id}>
              <td className="flex-1">{item.nome}</td>
              <td className="flex-1">{item.sobrenome}</td>
              <td className="flex-1">{item.diretoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
