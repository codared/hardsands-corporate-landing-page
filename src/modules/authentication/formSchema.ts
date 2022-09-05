import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email Address is required"),
  country: Yup.string(),
  sendMarketingEmails: Yup.boolean(),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email Address is required"),
  password: Yup.string().required(),
});

export const ResetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email Address is required"),
});

export const ResetPasswordFormSchema = Yup.object().shape({
  password: Yup.string().min(6, "Too Short!").required(),
});
