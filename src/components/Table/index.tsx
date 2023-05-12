import { TableStyles } from "./styles";

export type GenericFields<Row extends object[]> = readonly {
  readonly title: string;
  // name deve ser o nome de uma propriedade do Row passado:
  readonly name: keyof Row[number];
}[];

export type GenericRowAction<Row extends object[]> = Readonly<{
  title: string;
  onClick: (row: Row[number]) => void;
  Icon: () => JSX.Element;
}>;

type GenericRow<
  Fields extends GenericFields<Row>,
  Row extends object[]
> = Readonly<
  {
    [key in Fields[number]["name"]]: string | number;
  } & { id: string | number }
>;

type TableProps<
  Fields extends GenericFields<Row>,
  Row extends GenericRow<Fields, Row>[]
> = Readonly<{
  fields: Fields;
  rows: Row;
  title: string;
  actions: GenericRowAction<Row>[];
  breakPointWidth: number;
}>;

// export function Table({
export function Table<
  Fields extends GenericFields<Row>,
  Row extends GenericRow<Fields, Row>[]
>({
  fields,
  rows,
  title,
  actions,
  breakPointWidth,
  ...props
}: TableProps<Fields, Row>) {
  return (
    <TableStyles.Container
      breakPointWidth={
        breakPointWidth || ((actions?.length ?? 0) + fields.length) * 190
      }
      {...props}
      role="table"
    >
      <caption role="caption">{title}</caption>
      <thead>
        <tr role="row">
          {fields.map(({ title: fieldTitle }) => (
            <th role="columnheader" key={fieldTitle}>
              {fieldTitle}
            </th>
          ))}
          {actions?.map(({ title: actionTitle }) => (
            <th role="columnheader" key={actionTitle}>
              {actionTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr role="row" key={row.id}>
            {fields.map(({ title: fieldTitle, name }) => (
              <td
                role="cell"
                key={`${fieldTitle} ${row.id}`}
                data-cell={fieldTitle}
              >
                {row[name]}
              </td>
            ))}
            {actions?.map(({ title: actionTitle, Icon, onClick }) => (
              <td role="cell" key={actionTitle} data-cell={actionTitle}>
                <TableStyles.ActionButton
                  name={actionTitle}
                  type="button"
                  onClick={() => onClick(row)}
                >
                  <Icon />
                </TableStyles.ActionButton>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyles.Container>
  );
}
