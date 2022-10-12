import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  zip: Yup.number(),
  phoneCode: Yup.string()
    .max(4, "Too Long!")
    .required("Please select a country Code"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(11, "Too Long!")
    .matches(phoneRegExp, "Phone number is not valid or required"),
  agreedToReceiveEmail: Yup.boolean(),
});
