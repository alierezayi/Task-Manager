import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import CheckOtp from "./CheckOtp";
import Notify from "../Notify";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [responseData, setResponseData] = useState({
    pending: false,
    success: false,
    message: "",
  });

  const [loginBody, setLoginBody] = useState({
    PhoneNamber: "",
    code: "",
  });

  const loginHanler = (data) => {
    setLoginBody((prevState) => ({
      ...prevState,
      code: data.code,
    }));

    console.log(loginBody);

    setResponseData((prevState) => ({
      ...prevState,
      pending: true,
    }));

    fetch("http://127.0.0.1:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(loginBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseData({
          pending: false,
          success: data.success,
          message: data.message,
        });
        console.log(data);
      })
      .catch((error) => {
        setResponseData((prevState) => ({
          ...prevState,
          pending: false,
          message: error,
        }));
      });
  };

  // useEffect(() => {
  //   if (responseData.success) {
  //     router.push("/dashboard");
  //   }
  // }, [responseData]);

  return (
    <>
      <CheckOtp setStatus={setResponseData} setData={setLoginBody} />
      <form
        onSubmit={handleSubmit(loginHanler)}
        className="flex flex-col md:px-6 mt-2"
      >
        <label className="text-gray-700 mb-2 text-sm"></label>
        <div className="relative">
          <input
            type="number"
            id="code"
            {...register("code", { required: true })}
            className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="code"
            className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            کد تایید
          </label>
        </div>
        <span className="text-red-500 mr-1 text-xs mt-1">
          {errors.code && "کد تایید را وارد نکرده اید"}
        </span>

        {/* show message */}
        {responseData.message && responseData.success ? (
          <span className="mt-3">
            <Notify message={responseData.message} type="success" />
          </span>
        ) : (
          responseData.message &&
          !responseData.success && (
            <span className="mt-3">
              <Notify message={responseData.message} type="error" />
            </span>
          )
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-700 transition mt-5"
        >
          ورود به حساب کاربری
        </button>
      </form>
    </>
  );
};

export default SignIn;
