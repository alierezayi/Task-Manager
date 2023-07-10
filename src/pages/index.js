import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import registerImage from "../../public/images/dl.beatsnoop.com-1683470923.png";
import Timer from "@/components/Timer";
import Spinner from "@/components/Spinner";
import { useForm } from "react-hook-form";
import Notify from "@/components/Notify";
import Link from "next/link";
import { loginUser } from "@/features/loginSlice";
import { LockClosedIcon, PhoneIcon } from "@heroicons/react/24/outline";
import authAPI from "@/services/authAPI";
import { MdPassword } from "react-icons/md";

export default function Login() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { isAuthenticated } = useSelector((state) => state.login);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/projects");
    }
  }, [isAuthenticated, router]);

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

  const loginState = useSelector((state) => state.login);

  const dispatch = useDispatch();

  // console.log(loginState);

  const [otpResponse, setOtpResponse] = useState({
    success: null,
    message: null,
    status: null,
  });
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [notifyList, setNotifyList] = useState([]);

  // check otp user
  const submitOtp = (data) => {
    // dispatch(checkOtpUser(data));
    authAPI
      .checkOtp(data)
      .then((res) => {
        const id = new Date();

        setOtpResponse(res.data);
        setNotifyList((prevList) => [...prevList, { id, ...res.data }]);
      })
      .catch((error) => {
        const id = new Date();

        setOtpResponse(error.response.data);
        setNotifyList((prevList) => [
          { id, ...error.response.data },
          ...prevList,
        ]);
      });

    setPhoneNumber(data.PhoneNumber);
  };

  // login user
  const submitLogin = (data) => {
    const credentials = { PhoneNumber, code: data.code };

    dispatch(loginUser(credentials)).then((res) => {
      const id = new Date();

      const notification = {
        id,
        message: res.payload.success
          ? "عملیات ورود با موفقیت انجام شد."
          : res.payload.success,
        ...res.payload,
      };

      setNotifyList((prevList) => [...prevList, notification]);
    });
  };
  // console.log(otpResponse);
  // console.log(notifyList);

  const [secondsLeft, setSecondsLeft] = useState(120);
  const [showTimer, setShowTimer] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    if (otpResponse.success) {
      setShowTimer(true);
      setShowLoginForm(true);
    }
  }, [otpResponse]);

  useEffect(() => {
    if (secondsLeft === 0) {
      setShowTimer(false);
      setSecondsLeft(120);
    }
  }, [secondsLeft]);

  return (
    <>
      <Head>
        <title>ورود به حساب کاربری</title>
      </Head>

      <div className="w-full min-h-screen lg:flex bg-gray-50 relative">
        <Notify list={notifyList} updateList={setNotifyList} />
        <div className="lg:w-1/2 min-h-screen flex justify-center items-center py-4 ">
          <div className="w-full max-w-md px-4 py-10 md:px-6 bg-white mx-4 rounded-2xl drop-shadow-sm mt-5">
            <div className="mb-10 space-y-2">
              <div className="w-14 h-14 flex justify-center items-center mx-auto bg-orange-500 rounded-full">
                <LockClosedIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-xl text-center font-semibold text-gray-800">
                ورود به حساب کاربری
              </h1>
            </div>
            <form onSubmit={handleOtp(submitOtp)} className="flex flex-col">
              <label className="text-gray-700 mb-4 text-sm">
                برای اعتبار سنجی لطفا شماره موبایل خود را وارد کنید
              </label>
              <div className="relative">
                <span className="absolute inset-y-1 right-3 inline-flex items-center">
                  <PhoneIcon className="w-5 h-5 text-gray-500" />
                </span>
                <input
                  type="number"
                  id="PhoneNumber"
                  {...otpRegister("PhoneNumber", { required: true })}
                  className={`block px-2.5 pr-10 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                    otpErrors.PhoneNumber
                      ? "focus:border-rose-600"
                      : "focus:border-blue-600"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="PhoneNumber"
                  className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                    otpErrors.PhoneNumber
                      ? "peer-focus:text-rose-600"
                      : "peer-focus:text-blue-600"
                  } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                >
                  شماره موبایل
                </label>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 rounded-xl text-white disabled:bg-blue-400 text-xs px-6 absolute left-1 inset-y-1"
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
                className="flex flex-col mt-4"
              >
                <div className="relative">
                  <span className="absolute inset-y-1 right-4 inline-flex items-center">
                    <MdPassword className="w-[21px] h-[21px] text-gray-500" />
                  </span>
                  <input
                    type="number"
                    id="code"
                    {...loginRegister("code", { required: true })}
                    className={`block px-2.5 pr-11 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                      loginErrors.code
                        ? "focus:border-rose-600"
                        : "focus:border-blue-600"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="code"
                    className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                      loginErrors.code
                        ? "peer-focus:text-rose-600"
                        : "peer-focus:text-blue-600"
                    } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                  >
                    کد تایید
                  </label>
                </div>
                <span className="text-red-500 mr-1 text-xs mt-1">
                  {loginErrors.code && "کد تایید را وارد نکرده اید"}
                </span>

                <button
                  type="submit"
                  className="text-white bg-blue-500 border text-sm border-blue-500 py-3 rounded-2xl active:transform active:scale-[.98] hover:bg-blue-600 hover:text-white transition mt-5"
                  disabled={loginState.pending}
                >
                  {loginState.pending ? (
                    <div className="flex items-center justify-center space-x-reverse space-x-3">
                      <Spinner className="w-6 h-6 mr-2 text-white/20" />
                      <span>در حال پردازش. . .</span>
                    </div>
                  ) : (
                    "ورود به حساب کاربری"
                  )}
                </button>

                {/* show message */}
              </form>
            ) : null}

            <div className={`text-xs ${showLoginForm ? "mt-10" : "mt-24"}`}>
              اگر ثبت نام نکرده اید از این لینک اقدام به ثبت نام کنید.{" "}
              <Link href="/register" className="text-blue-500">
                ثبت نام
              </Link>
            </div>
          </div>{" "}
        </div>

        <div className="hidden lg:w-1/2 min-h-screen lg:flex lg:items-center lg:justify-center">
          <Image
            src={registerImage}
            width="auto"
            height="auto"
            alt="registerImage"
            className="w-[95%] rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
