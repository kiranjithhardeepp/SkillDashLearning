// src/validation/validationSchema.js

import * as Yup from "yup";

const userValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  role: Yup.string().required("Role is required"),
  designation: Yup.string().required("Designation is required"),
  team: Yup.string().required("Team is required"),
  userGroup: Yup.string().required("User Group is required"),
});

export default userValidationSchema;
