import React, { useState } from "react";
import { Media } from "../data";

type Props = {
  nome: string;
  id: number;
  tags: {
    tipo: string;
  }[];
};

export function FilterByFields() {
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const filteredData: Props[] = Media.filter((node: Props) =>
    filterTags.length > 0
      ? filterTags.every((filterTag: string) =>
          node.tags.map((tag) => tag.tipo).includes(filterTag)
        )
      : true
  );

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilterTags([...filterTags, e.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  return (
    <>
      <div className="text-[25px]">
        <p className="flex justify-center">Filtrar por: Tipo</p>
        <div className="flex justify-center gap-10">
          <label htmlFor="Anime">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Anime"}
            />
            <span>Anime</span>
          </label>
          <label htmlFor="Jogo">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Jogo"}
            />
            <span>Jogo</span>
          </label>
          <label htmlFor="Filme">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Filme"}
            />
            <span>Filme</span>
          </label>
        </div>
        <p className="flex justify-center">Filtrar por: Gênero</p>
        <div className="flex justify-center gap-5">
          <label htmlFor="Terror">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Terror"}
            />
            <span>Terror</span>
          </label>
          <label htmlFor="Acao">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Acao"}
            />
            <span>Ação</span>
          </label>
          <label htmlFor="Comedia">
            <input
              className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
              type="checkbox"
              onChange={filterHandler}
              value={"Comedia"}
            />
            <span>Comédia</span>
          </label>
        </div>
      </div>
      <ul className="flex items-center flex-col mt-10 text-[20px]">
        {filteredData.map((node) => (
          <li key={node.id}>{node.nome}</li>
        ))}
      </ul>
    </>
  );
}
