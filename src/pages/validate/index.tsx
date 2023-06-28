import React, { useState } from "react";
import FormInput from "@/components/FormInput";
import { useFormik } from "formik";
import { otpSchema } from "@/validation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { loginMobile } from "@/api/functions";

const Validate = () => {
  const router = useRouter();
  const [cellphone, setCellphone] = useState<string | string[] | undefined>("");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: otpSchema,
      initialValues: {
        otp: "",
      },
      onSubmit: (values) => {
        loginMobile(values.otp, cellphone)
          .then((response) => {
            router.push(
              {
                pathname: "/success",
                query: {
                  firstName: response.data.data.user.firstname,
                  lastName: response.data.data.user.lastname,
                  cellPhone: response.data.data.user.cellphone,
                },
              },
              "/success"
            );
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            console.log("hello");
          });
      },
    });

  useEffect(() => {
    if (router.query.cellphone === undefined) {
      router.push("/");
    }
    setCellphone(router.query.cellphone);
  }, [router.query]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-8`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">
          Please enter the otp we sent to you🚀
        </h2>
        <FormInput
          label="OTP"
          name="otp"
          type="text"
          id="otp"
          value={values.otp}
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.otp}
          touched={touched.otp}
        />

        <button
          className="bg-gray-900 w-[100%] h-[54px] text-white rounded-lg mt-2 disabled:bg-gray-400"
          type="submit"
        >
          Done
        </button>
      </form>
    </main>
  );
};

export default Validate;
