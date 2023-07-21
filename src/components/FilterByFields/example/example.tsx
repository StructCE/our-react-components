import React, { useState, type ChangeEvent } from "react";
import { FilterBySearch } from "./index";

export function FilterExample() {
  const [query, setQuery] = useState<string>("");

  const InputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input
        className="m-auto mt-11 flex text-center"
        placeholder="Busca"
        onChange={InputChange}
        value={query}
      />
      <br />
      <div className="ml-[350px] flex flex-row text-[30px] font-bold">
        <p className="flex-1">Nome</p>
        <p className="flex-1">Sobrenome</p>
        <p className="flex-1">Diretoria</p>
      </div>
      <br />
      <div className="flex flex-col text-[20px]">
        <FilterBySearch query={query} />
      </div>
    </>
  );
}
