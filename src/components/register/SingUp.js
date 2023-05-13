import { useState } from "react";

import { useForm } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  const [showPassword, setShowPassword] = useState(false);

  const togglePaswordVisibility = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPaswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-3 md:px-6"
    >
      <div className="grid grid-cols-4 gap-y-2 gap-x-8">
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="full-name"
              {...register("fullName", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="full-name"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نام{" "}
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.fullName && "نام الزامی است"}
          </span>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="user-name"
              {...register("userName", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="user-name"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نام کاربری
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.userName && "نام کاربری الزامی است"}
          </span>
        </div>

        <div className="col-span-3">
          <div className="relative">
            <input
              type="number"
              id="phone"
              {...register("phone", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              maxLength={11}
            />
            <label
              htmlFor="phone"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              شماره تلفن
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.phone && "شماره تلفن الزامی است"}
          </span>
        </div>

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
            {errors.email && "ایمیل الزامی است"}
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
            {errors.password && "رمز عبور الزامی است"}
          </span>
        </div>

        <div className="col-span-4">
          <div className="relative">
            {showConfirmPassword ? (
              <EyeSlashIcon
                onClick={toggleConfirmPaswordVisibility}
                className="w-5 text-gray-500 hover:text-gray-700 absolute left-2 top-2.5"
              />
            ) : (
              <EyeIcon
                onClick={toggleConfirmPaswordVisibility}
                className="w-5 text-gray-500 hover:text-gray-700 absolute left-2 top-2.5"
              />
            )}
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              تایید رمز عبور
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.password && "رمز عبور خود را تایید کنید"}
          </span>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="role"
              {...register("role", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="role"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نقش
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.password && "نقش خود را مشخص کنید"}
          </span>
        </div>

        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="team"
              {...register("team", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="team"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              تیم
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.password && "تیم الزامی است"}
          </span>
        </div>

        <div className="col-span-3">
          <div className="relative">
            <input
              type="text"
              id="skills"
              {...register("skills", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="skills"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              مهارت ها
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.password && "مهارت های خود را نام ببرید"}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-700 transition"
      >
        ایجاد حساب کاربری
      </button>
    </form>
  );
}
