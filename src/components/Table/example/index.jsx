import { Table } from "..";
import { getUsers } from "./getUsers";
import { PageContainer } from "./styles";
import { EditIcon, ShowIcon, TrashIcon } from "./svgs";

const usedFields = [
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

  const actions = [
    {
      name: "Visualizar",
      Icon: ShowIcon,
      onClick: (row) =>
        // eslint-disable-next-line no-alert
        alert(`VISUALIZANDO\n\n ${JSON.stringify(row, null, 2)}`), // chamar api
    },
    {
      name: "Editar",
      Icon: EditIcon,
      // eslint-disable-next-line no-alert
      onClick: (row) => alert(`EDITANDO\n\n ${JSON.stringify(row, null, 2)}`), // chamar api
    },
    {
      name: "Deletar",
      Icon: TrashIcon,
      // eslint-disable-next-line no-alert
      onClick: (row) => alert(`DELETANDO\n\n ${JSON.stringify(row, null, 2)}`), // chamar api
    },
  ];

  return (
    <PageContainer>
      <Table
        title="Usuários"
        fields={usedFields}
        actions={actions}
        rows={shownUsers}
        breakPointWidth={1000}
        // actions={actions}
      />
    </PageContainer>
  );
}
