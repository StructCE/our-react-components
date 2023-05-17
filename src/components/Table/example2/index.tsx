import { useState } from "react";
import { Table } from "..";
import type { GenericFields, GenericRowAction } from "..";
import { getUsers } from "../example/getUsers";
import { PageContainer } from "./styles";
import { EditIcon, ShowIcon, TrashIcon } from "../example/svgs";

export function TableExample2() {
  // api call, etc
  const users = getUsers();
  const [filterUsersByActiveStatus, setFilterUsersByActiveStatus] = useState({
    deactivated: false,
    active: true,
  });

  const shownUsers = users.filter(
    ({ status }) => filterUsersByActiveStatus[status]
  );

  // pode paginar, filtrar, etc

  const [selectedFields, setSelectedFields] = useState({
    id: true,
    user_name: true,
    age: false,
    status: false,
    role: false,
  });

  const mayShowFields: GenericFields<typeof users> = [
    { title: "Id", name: "id" },
    { title: "Usuário", name: "user_name" },
    { title: "Idade", name: "age" },
    { title: "Status", name: "status" },
    { title: "Cargo", name: "role" },
  ];

  // show only fields specified
  const shownFields = mayShowFields.filter(({ name }) => selectedFields[name]);

  const actions: GenericRowAction<typeof users>[] = [
    {
      title: "Visualizar",
      Icon: ShowIcon,
      onClick: (row) =>
        // eslint-disable-next-line no-alert
        alert(
          `VISUALIZANDO OS DADOS DE ${row.user_name}\n\n ${JSON.stringify(
            row,
            null,
            2
          )}`
        ), // chamar api
    },
    {
      title: "Editar",
      Icon: EditIcon,
      // eslint-disable-next-line no-alert
      onClick: (row) =>
        alert(
          `EDITANDO OS DADOS DE ${row.user_name}\n\n ${JSON.stringify(
            row,
            null,
            2
          )}`
        ), // chamar api
    },
    {
      title: "Deletar",
      Icon: TrashIcon,
      // eslint-disable-next-line no-alert
      onClick: (row) =>
        alert(
          `DELETANDO OS DADOS DE ${row.user_name}\n\n ${JSON.stringify(
            row,
            null,
            2
          )}`
        ), // chamar api
    },
  ];

  return (
    <PageContainer>
      <div>
        <form>
          <h2>Mostrar os seguintes campos:</h2>
          {mayShowFields.map(({ name, title }) => (
            <div>
              <input
                type="checkbox"
                name={name}
                value={name}
                checked={selectedFields[name]}
                onChange={(e) => {
                  setSelectedFields((prev) => ({
                    ...prev,
                    [name]: e.target.checked,
                  }));
                }}
                id={title}
                key={title}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          ))}
        </form>
        <form>
          <h2>Mostrar os usuários:</h2>

          {["active", "deactivated"].map((statusName) => (
            <div>
              <input
                type="checkbox"
                name={statusName}
                value={statusName}
                checked={
                  filterUsersByActiveStatus[
                    statusName as "active" | "deactivated"
                  ]
                }
                onChange={(e) => {
                  setFilterUsersByActiveStatus((prev) => ({
                    ...prev,
                    [statusName]: e.target.checked,
                  }));
                }}
                id={statusName}
                key={statusName}
              />
              <label htmlFor={statusName}>{statusName}</label>
            </div>
          ))}
        </form>
      </div>
      <Table
        title="Usuários"
        fields={shownFields}
        actions={actions}
        rows={shownUsers}
        breakPointWidth={(actions.length + shownFields.length) * 190 || 900}
      />
    </PageContainer>
  );
}
