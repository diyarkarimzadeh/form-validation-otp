import * as yup from "yup";

const firstName = yup
  .string()
  .min(3, "Please enter more than 2 characters")
  .required("It is a required field!");

const lastName = yup
  .string()
  .min(3, "Please enter more than 2 characters")
  .required("It is a required field!");

const email = yup
  .string()
  .email("Please enter a valid email")
  .required("It is a required field!");

const phoneNumberRegex =
  /[0۰][9۹]([0-39۹\u06F0-\u06F3])[0-9\u06F0-\u06F9]-?[0-9\u06F0-\u06F9]{3}-?[0-9\u06F0-\u06F9]{4}/gu;

const phoneNumber = yup
  .string()
  .required("It is a required field!")
  .matches(phoneNumberRegex, "Please enter a valid phone number");

const otp = yup.string().required().min(5);

export const signUpFormSchema = yup.object().shape({
  firstName,
  lastName,
  email,
  phoneNumber,
});

export const otpSchema = yup.object().shape({
  otp,
});
