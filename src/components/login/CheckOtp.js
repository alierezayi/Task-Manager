import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { checkOtpUser } from "@/features/authSlice";

const CheckOtp = ({ setPhoneNumber, setResponse, response }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.auth);

  const checkOtpHandler = async (data) => {
    const response = await dispatch(checkOtpUser(data));

    setResponse(response.payload);

    if (response.payload.success) {
      setPhoneNumber(data.PhoneNumber);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(checkOtpHandler)}
      className="flex flex-col md:px-6 mt-4"
    >
      <label className="text-gray-700 mb-5 text-sm">
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

      <div className="my-1 flex justify-end">
        <button
          type="submit"
          className="text-blue-600 hover:text-blue-500 disabled:text-blue-300 text-start text-sm px-3"
          disabled={response.success}
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
};

export default CheckOtp;
