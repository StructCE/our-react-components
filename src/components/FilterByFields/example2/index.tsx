type Props = {
  nome: string;
  id: number;
  tags: {
    tipo: string;
  }[];
};

type FilterProps = {
  items: Props[];
  filterTags: string[];
  setFilterTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export function FilterByFields({ items, filterTags }: FilterProps) {
  const filteredData: Props[] = items.filter((node: Props) =>
    filterTags.length > 0
      ? filterTags.every((filterTag: string) =>
          node.tags.map((tag) => tag.tipo).includes(filterTag)
        )
      : true
  );

  return (
    <>
      <ul className="flex items-center flex-col mt-10 text-[20px]">
        {filteredData.map((node) => (
          <li key={node.id}>{node.nome}</li>
        ))}
      </ul>
    </>
  );
}
