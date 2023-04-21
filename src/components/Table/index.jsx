import { TableContainer } from "./styles";

export function Table({ title, fields, rows, ...props }) {
  return (
    <TableContainer {...props} role="table">
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
              <td role="cell" data-cell={fieldTitle}>
                {row[name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
}
