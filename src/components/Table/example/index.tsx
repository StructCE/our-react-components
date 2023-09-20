import type { GenericRowAction, GenericFields } from "..";
import { Table } from "..";

// import { getUsers } from "./getUsers";
// import type { User } from "./getUsers";
import { PageContainer } from "./styles";
import { EditIcon, ShowIcon, TrashIcon } from "./svgs";

// Normalmente esse tipo viria do prisma, etc.
export type User = {
  id: number;
  user_name: string;
  age: number;
  status: "active" | "deactivated";
  role: "super_admin" | "admin" | "user";
};

// como não é dinâmico, pode ser colocado fora do componente:
const shownFields: GenericFields<User[]> = [
  // { title: "Id", name: "id" },
  { title: "Usuário", name: "user_name" },
  // { title: "Idade", name: "age" },
  // { title: "Status", name: "status" },
  { title: "Cargo", name: "role" },
];

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

export function TableExample() {
  // api call, etc
  const users = getUsers();

  // pode paginar, filtrar, etc
  const shownUsers = users.filter((u) => u.status !== "deactivated");

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

function getUsers() {
  const users: User[] = [
    { id: 1, user_name: "art", age: 20, status: "active", role: "admin" },
    {
      id: 2,
      user_name: "Tata Werneck",
      age: 3,
      status: "deactivated",
      role: "user",
    },
    {
      id: 3,
      user_name: "Caetas",
      age: 0,
      status: "active",
      role: "user",
    },
    {
      id: 4,
      user_name: "Nicolau",
      age: 23,
      status: "active",
      role: "super_admin",
    },
    {
      id: 5,
      user_name: "Renatinho sangue bom (demais)",
      age: 250,
      status: "active",
      role: "user",
    },
    {
      id: 6,
      user_name: "Tres21",
      age: 321,
      status: "deactivated",
      role: "admin",
    },
  ];

  return users;
}
