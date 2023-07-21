import React, { useState } from "react";
import { FilterByFields } from ".";
import { medias } from "../data";

export function FilterExample2() {
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilterTags([...filterTags, value]);
    } else {
      setFilterTags(filterTags.filter((filterTag) => filterTag != value));
    }
  };

  return (
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
        <label htmlFor="Jogo">
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
      <div className="flex justify-center gap-10">
        <label htmlFor="Jogo">
          <input
            className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
            type="checkbox"
            onChange={filterHandler}
            value={"Terror"}
          />
          <span>Terror</span>
        </label>
        <label htmlFor="Jogo">
          <input
            className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
            type="checkbox"
            onChange={filterHandler}
            value={"Acao"}
          />
          <span>Ação</span>
        </label>
        <label htmlFor="Jogo">
          <input
            className="w-4 h-4 border border-black rounded-full cursor-pointer appearance-none bg-white checked:bg-red-600"
            type="checkbox"
            onChange={filterHandler}
            value={"Comedia"}
          />
          <span>Comédia</span>
        </label>
      </div>
      <FilterByFields
        items={medias}
        filterTags={filterTags}
        setFilterTags={setFilterTags}
      />
    </div>
  );
}
