export const registerSchema = [
  {
    field: "name",
    placeholder: "name",
    type: "text", // input type, could be image, etc
    required: true,
  },
  {
    field: "email",
    placeholder: "email",
    type: "email",
    required: true,
    customValidation: (formInfo, usersData) => {
      // verifica se o email já está cadastrado
      const user = usersData.find(
        (element) => element.email === formInfo.email
      );
      return !user;
    },
  },
  {
    field: "age",
    placeholder: "age",
    type: "number",
    required: false,
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo) => formInfo.password.length > 6,
  },
  {
    field: "passwordConfirmation",
    placeholder: "repeat password",
    type: "password",
    required: true,
    customValidation: (formInfo) =>
      formInfo.password === formInfo.passwordConfirmation,
  },
];

export const loginSchema = [
  {
    field: "email",
    placeholder: "email",
    type: "email",
    required: true,
  },
  {
    field: "password",
    placeholder: "password",
    type: "password",
    required: true,
    customValidation: (formInfo, usersData) => {
      // verifica se a senha está correta para o email preenchido
      const user = usersData.find(
        (element) => element.email === formInfo.email
      );
      return user ? user.password === formInfo.password : false;
    },
  },
];
