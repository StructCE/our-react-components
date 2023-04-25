import { TableStyles } from "./styles";

export function Table({ title, fields, rows, actions, ...props }) {
  return (
    <TableStyles.Container {...props} role="table">
      <caption role="caption">{title}</caption>
      <thead>
        <tr role="row">
          {fields.map(({ title: fieldTitle }) => (
            <th role="columnheader" key={fieldTitle}>
              {fieldTitle}
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
            {actions?.map(({ name, Icon, onClick }) => (
              <td role="cell" key={name}>
                <TableStyles.ActionButton
                  name={name}
                  type="button"
                  onClick={() => onClick(row)}
                >
                  {Icon && <Icon />}
                </TableStyles.ActionButton>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyles.Container>
  );
}
