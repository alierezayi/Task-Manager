import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import CheckOtp from "./CheckOtp";
import Notify from "../Notify";

import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "@/features/authSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { pending, isAuthenticated } = authState;

  const [PhoneNumber, setPhoneNumber] = useState("");

  const [loginResponse, setLoginResponse] = useState({});
  const [otpResponse, setOtpResponse] = useState({});

  const loginHanler = async (data) => {
    const credentials = { PhoneNumber, code: data.code };

    const response = await dispatch(loginUser(credentials));

    setLoginResponse(response.payload);
  };

  console.log(authState);

  return (
    <>
      <CheckOtp
        response={otpResponse}
        setPhoneNumber={setPhoneNumber}
        setResponse={setOtpResponse}
      />
      <form
        onSubmit={handleSubmit(loginHanler)}
        className="flex flex-col md:px-6 mt-2"
      >
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
        {otpResponse.message && otpResponse.success ? (
          <span className="mt-5">
            <Notify message={otpResponse.message} type="success" />
          </span>
        ) : (
          otpResponse.message &&
          !otpResponse.success && (
            <span className="mt-5">
              <Notify message={otpResponse.message} type="error" />
            </span>
          )
        )}
        {loginResponse.message && loginResponse.success ? (
          <span className="mt-5">
            <Notify message={loginResponse.message} type="success" />
          </span>
        ) : (
          loginResponse.message &&
          !loginResponse.success && (
            <span className="mt-5">
              <Notify message={loginResponse.message} type="error" />
            </span>
          )
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-700 transition mt-7"
          disabled={pending && loginResponse.success}
        >
          {pending && loginResponse.success ? (
            <div className="flex items-center justify-center space-x-reverse space-x-3">
              <Spinner />
              <span>در حال پردازش. . .</span>
            </div>
          ) : (
            "ورود به حساب کاربری"
          )}
        </button>
      </form>
    </>
  );
};

export default SignIn;

const Spinner = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-6 h-6 mr-2 text-white/20 animate-spin fill-white"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};
