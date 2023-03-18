import * as yup from "yup";

export const createMemberSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  position: yup.string().required("Position is required"),
});
