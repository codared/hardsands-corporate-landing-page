import * as Yup from "yup";

export const CustomerInfoSchema = Yup.object().shape({
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
  address1: Yup.string().required("Shipping Address is required"),
  city: Yup.string(),
  countryId: Yup.string().required("Please select a country"),
  provinceId: Yup.string().required("Please select a state"),
  zip: Yup.string(),
  phoneCode: Yup.string().required("Please select a country Code"),
  phone: Yup.string().required("Phone Number is required"),
  agreedToReceiveEmail: Yup.boolean(),
});
