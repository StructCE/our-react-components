import React from "react";
import { PageLayout, StyledPokeTable } from "./styles";
import { getPokemons } from "./getPokemons";

const usedFields = [
  { title: "Nome", name: "name" },
  { title: "Imagem (url)", name: "url" },
];

export function TableExample2() {
  const pokemons = getPokemons();

  return (
    <PageLayout>
      <StyledPokeTable
        title="Pokemons"
        fields={usedFields}
        rows={pokemons}
        breakPointWidth={715}
      />
    </PageLayout>
  );
}
