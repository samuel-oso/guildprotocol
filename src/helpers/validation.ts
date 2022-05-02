import * as Yup from "yup";

export const homeFormValidation = Yup.object({
  email: Yup.string()
    .email("The email address you entered is invalid")
    .required("Email is required"),
});
