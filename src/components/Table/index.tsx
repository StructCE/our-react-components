import styles from "./styles.module.scss";
import { useWindowWidth } from "./example2/utils/useWindowWidth";

export type GenericFields<Rows extends object[]> = readonly {
  readonly title: string;
  // name deve ser o nome de uma propriedade do Rows passado:
  readonly name: keyof Rows[number];
}[];

export type GenericRowAction<Rows extends object[]> = Readonly<{
  title: string;
  onClick: (row: Rows[number]) => void;
  Icon: () => JSX.Element;
}>;

type GenericRow<
  Fields extends GenericFields<Rows>,
  Rows extends object[]
> = Readonly<
  {
    [key in Fields[number]["name"]]: string | number;
  } & { id: string | number }
>;

type TableProps<
  Fields extends GenericFields<Rows>,
  Rows extends GenericRow<Fields, Rows>[]
> = Readonly<{
  fields: Fields;
  rows: Rows;
  title: string;
  actions: GenericRowAction<Rows>[];
  breakPointWidth: number;
}>;

export function Table<
  Fields extends GenericFields<Rows>,
  Rows extends GenericRow<Fields, Rows>[]
>({
  fields,
  rows,
  title,
  actions,
  breakPointWidth,
  ...props
}: TableProps<Fields, Rows>) {
  const windowWidth = useWindowWidth();

  return (
    <table
      className={
        (styles["table"] || "") +
        " " +
        (windowWidth > breakPointWidth ? "" : styles["responsive-table"] || "")
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
                <button
                  className={styles["action-button"]}
                  name={actionTitle}
                  type="button"
                  onClick={() => onClick(row)}
                >
                  <Icon />
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
