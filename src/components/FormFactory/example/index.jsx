// import { useState } from "react";
import { FormFactory } from "../index";

const userSchema = [
  {
    field: "name",
    placeholder: "name",
    type: "text", // input type, could be image, etc
    required: true,
  },
  {
    field: "age",
    placeholder: "age",
    type: "number",
    required: false,
  },
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

export const UserForm = FormFactory(userSchema);
