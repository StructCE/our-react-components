import { Table } from "..";
import { getUsers } from "./getUsers";
import { PageContainer } from "./styles";

export function TableExample() {
  // api call, etc
  const users = getUsers();

  // pode paginar, filtrar, etc
  const shownUsers = users.filter((u) => u.status !== "deactivated");

  const fields = [
    { title: "Id", name: "id" },
    { title: "Usuário", name: "user_name" },
    { title: "Idade", name: "age" },
    { title: "Status", name: "status" },
    { title: "Cargo", name: "role" },
  ];

  // const actions = [
  //   {
  //     title: "Deletar",
  //     // eslint-disable-next-line no-alert
  //     onClick: (row) => alert(JSON.stringify(row, 2, null)),
  //   },
  // ];

  return (
    <PageContainer>
      <Table
        title="Usuários"
        fields={fields}
        rows={shownUsers}
        // actions={actions}
      />
    </PageContainer>
  );
}
