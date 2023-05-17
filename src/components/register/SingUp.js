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

  // http request = post user data
  const [responseData, setResponseData] = useState({
    pending: false,
    success: false,
    message: "",
  });

  // const onSubmit = (data) => {
  //   setResponseData((prevState) => ({
  //     ...prevState,
  //     pending: true,
  //   }));
  //   fetch("http://127.0.0.1:3000/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(({ message, success }) => {
  //       setResponseData({
  //         pending: false,
  //         success,
  //         message,
  //       });
  //       // console.log(responseData);
  //     });
  // };

  // handle show/hide pasword input
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
        {/* full name */}
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="full-name"
              {...register("FullName", { required: true })}
              className="block px-2.5 py-2.5 border w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="full-name"
              className="absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 right-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              نام کامل{" "}
            </label>
          </div>
          <span className="text-red-500 mr-1 text-xs">
            {errors.FullName && "نام الزامی است"}
          </span>
        </div>

        {/* user name */}
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="user-name"
              {...register("UserName", { required: true })}
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
            {errors.UserName && "نام کاربری الزامی است"}
          </span>
        </div>

        {/* phone number */}
        <div className="col-span-3">
          <div className="relative">
            <input
              type="number"
              id="phone"
              {...register("PhoneNumber", { required: true })}
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
            {errors.PhoneNumber && "شماره تلفن الزامی است"}
          </span>
        </div>

        {/* email */}
        <div className="col-span-4">
          <div className="relative">
            <input
              type="email"
              id="email"
              {...register("Email", { required: true })}
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
            {errors.Email && "ایمیل الزامی است"}
          </span>
        </div>

        {/* password */}
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
              {...register("Password", { required: true })}
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
            {errors.Password && "رمز عبور الزامی است"}
          </span>
        </div>

        {/* confirm password */}
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
              {...register("ConfirmPassword", { required: true })}
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
            {errors.ConfirmPassword && "رمز عبور خود را تایید کنید"}
          </span>
        </div>

        {/* role */}
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="role"
              {...register("Rols", { required: true })}
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
            {errors.Rols && "نقش خود را مشخص کنید"}
          </span>
        </div>

        {/* team */}
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              id="team"
              {...register("Teams", { required: true })}
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
            {errors.Teams && "تیم الزامی است"}
          </span>
        </div>

        {/* skills */}
        <div className="col-span-3">
          <div className="relative">
            <input
              type="text"
              id="skills"
              {...register("Skills", { required: true })}
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
            {errors.Skills && "مهارت های خود را نام ببرید"}
          </span>
        </div>
      </div>

      {/* submit */}
      <button
        type="submit"
        className={`${
          responseData.pending ? "bg-blue-500" : "bg-blue-600"
        } text-white py-3 rounded-xl active:transform active:scale-[.98] hover:bg-blue-700 transition`}
      >
        {/* {responseData.pending ? (
          <div className="flex items-center justify-center space-x-reverse space-x-3">
            <Spinner />
            <span>در حال پردازش. . .</span>
          </div>
        ) : (
          "ایجاد حساب کاربری"
        )} */}
        ایجاد حساب کاربری
      </button>
    </form>
  );
}

// const Spinner = () => {
//   return (
//     <svg
//       aria-hidden="true"
//       class="w-6 h-6 mr-2 text-white/20 animate-spin fill-white"
//       viewBox="0 0 100 101"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//         fill="currentColor"
//       />
//       <path
//         d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//         fill="currentFill"
//       />
//     </svg>
//   );
// };
