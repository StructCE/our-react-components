import type { GenericRowAction, GenericFields } from "..";
import { Table } from "..";

import { getUsers } from "./getUsers";
import type { User } from "./getUsers";
import { PageContainer } from "./styles";
import { EditIcon, ShowIcon, TrashIcon } from "./svgs";

// como não é dinâmico, pode ser colocado fora do componente:
const shownFields: GenericFields<User[]> = [
  // { title: "Id", name: "id" },
  { title: "Usuário", name: "user_name" },
  // { title: "Idade", name: "age" },
  // { title: "Status", name: "status" },
  { title: "Cargo", name: "role" },
];

export function TableExample() {
  // api call, etc
  const users = getUsers();

  // pode paginar, filtrar, etc
  const shownUsers = users.filter((u) => u.status !== "deactivated");

  const actions: GenericRowAction<User[]>[] = [
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
      <Table
        title="Usuários"
        fields={shownFields}
        actions={actions}
        rows={shownUsers}
        breakPointWidth={900}
      />
    </PageContainer>
  );
}
