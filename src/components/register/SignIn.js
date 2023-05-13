import Link from "next/link";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));

  const [showPassword, setShowPassword] = useState(false);

  const togglePaswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:px-6">
      <div className="grid grid-cols-4 gap-y-2">
        <div className="col-span-4">
          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              ایمیل
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.email && "ایمیل خود را وارد کنید"}
          </span>
        </div>

        <div className="col-span-4">
          <div className="relative">
            {showPassword ? (
              <EyeSlashIcon
                onClick={togglePaswordVisibility}
                className="w-5 text-gray-500 hover:text-gray-700 absolute left-2 top-2.5"
              />
            ) : (
              <EyeIcon
                onClick={togglePaswordVisibility}
                className="w-5 text-gray-500 hover:text-gray-700 absolute left-2 top-2.5"
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              رمز عبور
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.password && "رمز عبور خود را وارد کنید "}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="inline-flex items-center space-x-1 space-x-reverse">
          <input id="forget" type="checkbox" className="w-4 h-4 rounded-xl" />
          <label htmlFor="forget" className="text-xs">
            مرا به خاطر بسپار
          </label>
        </div>

        <Link href="/forget-password" className="text-xs">
          رمز خود را فراموش کردید؟
        </Link>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-700 transition mt-6"
      >
        ورود به حساب کاربری
      </button>
    </form>
  );
};

export default SignIn;
