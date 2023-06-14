import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import Notify from "../Notify";

import { useDispatch, useSelector } from "react-redux";

import { checkOtpUser } from "@/features/otpSlice";
import { loginUser } from "@/features/loginSlice";
import TwoMinuteTimer from "../Timer";
import Timer from "../Timer";

const SignIn = () => {
  const {
    register: loginRegister,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
  } = useForm();

  const {
    register: otpRegister,
    handleSubmit: handleOtp,
    formState: { errors: otpErrors },
  } = useForm();

  const dispatch = useDispatch();
  const otpState = useSelector((state) => state.otp);
  const loginState = useSelector((state) => state.login);

  console.log(loginState);
  console.log(otpState);

  const [PhoneNumber, setPhoneNumber] = useState("");

  const [options, setOptions] = useState({});

  const otpNotifyType = otpState.success ? "success" : "error";

  // check otp user
  const submitOtp = (data) => {
    dispatch(checkOtpUser(data));

    setPhoneNumber(data.PhoneNumber);
  };

  const loginNotifyType = loginState.success ? "success" : "error";

  // login user
  const submitLogin = (data) => {
    const credentials = { PhoneNumber, code: data.code };

    dispatch(loginUser(credentials));
  };

  const [secondsLeft, setSecondsLeft] = useState(120);
  const [showTimer, setShowTimer] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    if (otpState.success) {
      setShowTimer(true);
      setShowLoginForm(true);
    }

    if (secondsLeft === 0) {
      setShowTimer(false);
    }
  }, [secondsLeft, otpState]);

  return (
    <>
      <form
        onSubmit={handleOtp(submitOtp)}
        className="flex flex-col md:px-6 mt-4"
      >
        <label className="text-gray-700 mb-5 text-sm">
          لطفا شماره موبایل خود را وارد کنید
        </label>
        <div className="relative">
          <input
            type="number"
            id="PhoneNumber"
            {...otpRegister("PhoneNumber", { required: true })}
            className={`block px-2.5 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
              otpErrors.PhoneNumber
                ? "focus:border-rose-600"
                : "focus:border-blue-600"
            }`}
            placeholder=" "
          />
          <label
            htmlFor="PhoneNumber"
            className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
              otpErrors.PhoneNumber
                ? "peer-focus:text-rose-600"
                : "peer-focus:text-blue-600"
            } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
          >
            شماره موبایل
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded-lg inlinef text-white disabled:bg-blue-400 text-sm px-6 absolute left-1 inset-y-1"
            disabled={showTimer}
          >
            {showTimer ? (
              <Timer timeLeft={secondsLeft} updateTime={setSecondsLeft} />
            ) : (
              "ارسال کد"
            )}
          </button>
        </div>
        <span className="text-red-500 mr-1 text-xs mt-1">
          {otpErrors.PhoneNumber && "این قسمت نمی تواند خالی باشد"}
        </span>
      </form>

      {showLoginForm ? (
        <form
          onSubmit={handleLogin(submitLogin)}
          className="flex flex-col md:px-6 mt-4"
        >
          <div className="relative">
            <input
              type="number"
              id="code"
              {...loginRegister("code", { required: true })}
              className={`block px-2.5 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                loginErrors.code
                  ? "focus:border-rose-600"
                  : "focus:border-blue-600"
              }`}
              placeholder=" "
            />
            <label
              htmlFor="code"
              className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                loginErrors.code
                  ? "peer-focus:text-rose-600"
                  : "peer-focus:text-blue-600"
              } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
            >
              کد تایید
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs mt-1">
            {loginErrors.code && "کد تایید را وارد نکرده اید"}
          </span>

          <button
            type="submit"
            className="bg-white text-blue-600 border border-blue-500 py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-600 hover:text-white transition mt-5"
            disabled={loginState.pending}
          >
            {loginState.pending ? (
              <div className="flex items-center justify-center space-x-reverse space-x-3">
                <Spinner />
                <span>در حال پردازش. . .</span>
              </div>
            ) : (
              "ورود به حساب کاربری"
            )}
          </button>

          {/* show message */}
        </form>
      ) : null}

      <div className="md:px-6">
        {otpState.message && (
          <Notify
            options={{
              type: otpNotifyType,
              description: otpState.message,
            }}
          />
        )}
        {loginState.message && (
          <Notify
            options={{
              type: loginNotifyType,
              description: loginState.message,
            }}
          />
        )}
      </div>
    </>
  );
};

export default SignIn;

