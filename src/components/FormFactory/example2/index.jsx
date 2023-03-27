import { FormFactory } from "..";

const userSchema = [
  {
    field: "name",
    required: true,
    type: "text",
    placeholder: "nome de usuário",
  },
  {
    field: "age",
    required: false,
    type: "number",
    placeholder: "idade",
  },
  {
    field: "profilePicture",
    required: false,
    type: "file",
    label: "Foto de perfil",
  },
  {
    field: "favAnime",
    required: true,
    type: "text",
    placeholder: "anime favorito",
  },
  {
    field: "favManga",
    required: false,
    type: "text",
    placeholder: "manga/manhwa favorito",
  },
  {
    field: "submit",
    type: "image",
    alt: "Salvar",
  },
];

export function FormFactoryExample2() {
  const UserForm = FormFactory(userSchema);

  return (
    <>
      <h1>Seu perfil e suas obras favoritas</h1>
      <UserForm />
    </>
  );
}
