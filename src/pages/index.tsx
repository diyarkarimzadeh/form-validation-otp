import { Inter } from "next/font/google";
import { useFormik } from "formik";
import { signUpFormSchema } from "@/validation";
import FormInput from "@/components/FormInput";
import { sendOtpRequest } from "@/api/functions";
import { useRouter } from "next/router";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: signUpFormSchema,
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      onSubmit: (values) => {
        setLoading(true);
        sendOtpRequest(values.phoneNumber)
          .then((response) => {
            console.log(response.data);
            router.push(
              {
                pathname: "/validate",
                query: { cellphone: values.phoneNumber },
              },
              "/validate"
            );
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-8 ${inter.className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Login to SnappMarket</h2>
        <FormInput
          label="First Name"
          name="firstName"
          type="text"
          id="firstName"
          value={values.firstName}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.firstName}
          touched={touched.firstName}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          type="text"
          id="lastName"
          value={values.lastName}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.lastName}
          touched={touched.lastName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          id="email"
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.email}
          touched={touched.email}
        />
        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="text"
          id="phoneNumber"
          value={values.phoneNumber}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
        />

        <button
          disabled={!!Object.keys(errors).length || loading}
          className="bg-gray-900 w-[100%] h-[54px] text-white rounded-lg mt-2 disabled:bg-gray-400"
          type="submit"
        >
          Next
        </button>
      </form>
    </main>
  );
}
