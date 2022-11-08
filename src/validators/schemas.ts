import * as yup from "yup";
import { parse } from "date-fns";
import moment from "moment";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório")
    .email("Email inválido!"),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaRegister = yup.object().shape({
  type: yup.string().required("Selecione o tipo de usuario").nullable(),

  name: yup
    .string()
    .required("Adicione seu nome")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),

  email: yup.string().required("Adicione seu e-mail").email("E-mail inválido"),

  "cnpj/cpf": yup.string().required("Adicione seu CNPJ ou seu CPF"),

  address: yup.string().required("Adicione seu endereço"),

  complement: yup.string().required("Adicione um complemento"),

  city: yup.string().required("Adicione sua cidade"),

  state: yup.string().required("Adicione seu estado"),

  responsible: yup
    .string()
    .required("Adicione o nome do responsável")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),

  contact: yup.string().required("Adicione um número para contato"),

  password: yup
    .string()
    .required("Crie uma senha")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

  passwordConfirmation: yup
    .string()
    .required("Confirme sua nova senha")
    .oneOf(
      [yup.ref("password"), null],
      "As senhas devem corresponder entre si"
    ),
});

export const schemaDonation = yup.object().shape({
  food: yup.string().required("Campo obrigatório"),
  quantity: yup.string().required("Campo obrigatório"),
  expiration: yup
    // .string()
    .date()
    .min(new Date(), "Data passada não permitida")
    // .transform(function (value, originalValue) {
    //   const parsedDate = isDate(originalValue)
    //     ? originalValue
    //     : parse(originalValue, "dd/MM/yyyy", new Date());
    //   return parsedDate;
    // })
    // .transform((originalValue) =>
    //   parse(originalValue, "dd/MM/yyyy", new Date())
    // )
    // .transform((value, originalValue, context) => {
    //   if (context.isType(value)) return value;
    //   return parse(originalValue, "dd/MM/yyyy", new Date());
    // })
    .required("Campo obrigatório"),
});

export const schemaBackCard = yup.object().shape({
  food: yup.string().required("Campo obrigatório"),
  quantity: yup.string().required("Campo obrigatório"),
});
