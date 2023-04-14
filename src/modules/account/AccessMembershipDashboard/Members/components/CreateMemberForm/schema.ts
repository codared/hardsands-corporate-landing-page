import * as yup from "yup";

export const createMemberSchema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  phone: yup.string().required("Phone Number is required"),
  tag: yup.string().required("Tag is required"),
  email: yup.string().email().required("Email is required"),
  membershipDueDate: yup.string().required("Membership Due Date is required"),
});
