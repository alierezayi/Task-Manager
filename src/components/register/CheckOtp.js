import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CheckOtp = ({ setStatus, setData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // check OTP
  const checkOtpHandler = (data) => {
    // send message
    fetch("http://127.0.0.1:3000/auth/checkOtp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(({ message, success }) => {
        setStatus((prevState) => ({
          ...prevState,
          success,
          message,
        }));

        if (success) {
          setData((prevState) => ({
            ...prevState,
            PhoneNumber: data.PhoneNumber,
          }));
        }
      })
      .catch((error) => {
        setResponseData((prevState) => ({
          ...prevState,
          pending: false,
          message: error,
        }));
      });
  };

  return (
    <form
      onSubmit={handleSubmit(checkOtpHandler)}
      className="flex flex-col md:px-6 mt-4"
    >
      <label className="text-gray-700 mb-3 text-sm">
        لطفا شماره موبایل خود را وارد کنید
      </label>
      <div className="relative">
        <input
          type="number"
          id="PhoneNumber"
          {...register("PhoneNumber", { required: true })}
          className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="PhoneNumber"
          className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          شماره موبایل
        </label>
      </div>
      <span className="text-red-500 mr-1 text-xs mt-1">
        {errors.PhoneNumber && "این قسمت نمی تواند خالی باشد"}
      </span>

      <div className="mt-2">
        <button
          type="submit"
          className="text-blue-600 hover:text-blue-500 text-start text-sm px-2"
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
};

export default CheckOtp;
