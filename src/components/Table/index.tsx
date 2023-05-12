import { TableStyles } from "./styles";

type FieldsGeneric = readonly {
  readonly title: string;
  readonly name: string;
}[];

type Row<T extends FieldsGeneric> = Readonly<
  {
    [key in T[number]["name"]]: string | number;
  } & { id: string | number }
>;

export type RowAction<RS extends object[]> = Readonly<{
  title: string;
  onClick: (row: RS[number]) => void;
  Icon: () => JSX.Element;
}>;

type TableProps<T extends FieldsGeneric, RS extends Row<T>[]> = Readonly<{
  fields: T;
  rows: RS;
  title: string;
  actions: RowAction<RS>[];
  breakPointWidth: number;
}>;

// export function Table({
export function Table<T extends FieldsGeneric, RS extends Row<T>[]>({
  fields,
  rows,
  title,
  actions,
  breakPointWidth,
  ...props
}: TableProps<T, RS>) {
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
                {/* Cuidado com a tipagem aqui: */}
                {row[name as T[number]["name"]]}
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
