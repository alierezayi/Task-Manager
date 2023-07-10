import Notify from "@/components/Notify";
import authAPI from "@/services/authAPI";
import { PhoneIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { TbLetterCaseToggle } from "react-icons/tb";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // response
  const [response, setResponse] = useState({});

  // Skills
  const [Skill, setSkill] = useState("");

  const SkillInputHandler = (e) => setSkill(e.target.value);

  const [Skills, setSkills] = useState([]);

  const addToSkillsHandler = () => {
    if (Skill.trim().length > 2) {
      setSkills((prevState) => [...prevState, Skill]);
    }
    setSkill("");
  };

  // Teams
  const [Team, setTeam] = useState("");

  const TeamInputHandler = (e) => setTeam(e.target.value);

  const [Teams, setTeams] = useState([]);

  const addToTeamsHandler = () => {
    if (Team.trim().length > 2) {
      setTeams((prevState) => [...prevState, Team]);
    }
    setTeam("");
  };

  // Roles
  const [Role, setRole] = useState("");

  const RoleInputHandler = (e) => setRole(e.target.value);

  const [Rols, setRols] = useState([]);

  const addToRolesHandler = () => {
    if (Role.trim().length > 2) {
      setRols((prevState) => [...prevState, Role]);
    }
    setRole("");
  };

  const [notifyList, setNotifyList] = useState([]);
  console.log(notifyList);

  const submitRegister = (data) => {
    const formData = new FormData();
    formData.append("FullName", data.FullName);
    formData.append("UserName", data.UserName);
    formData.append("Email", data.Email);
    formData.append("PhoneNumber", data.PhoneNumber);
    formData.append("Password", data.Password);

    Skills.forEach((value) => {
      formData.append("Skills[]", value);
    });

    Rols.forEach((value) => {
      formData.append("Rols[]", value);
    });

    Teams.forEach((value) => {
      formData.append("Teams[]", value);
    });

    console.log(...formData);

    authAPI
      .register(formData)
      .then((res) => {
        const id = new Date();

        setResponse(res.data);
        setNotifyList((prevList) => [...prevList, { id, ...res.data }]);
      })
      .catch((error) => {
        const id = new Date();

        setResponse(error.response.data);
        setNotifyList((prevList) => [
          { id, ...error.response.data },
          ...prevList,
        ]);
      });
  };

  // handle show/hide pasword input
  const [showPassword, setShowPassword] = useState(false);

  const togglePaswordVisibility = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPaswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="w-full h-screen overflow-y-auto bg-slate-50 px-2">
      <Notify list={notifyList} updateList={setNotifyList} />
      <form
        onSubmit={handleSubmit(submitRegister)}
        className="w-full md:mx-auto max-w-6xl bg-white my-20 px-5 md:px-10 py-10 drop-shadow-sm rounded-3xl"
      >
        <div className="space-y-4">
          <div className="w-14 h-14 flex justify-center items-center mx-auto bg-green-500 rounded-full">
            <PlusIcon className="w-8 h-8 text-white" />
          </div>{" "}
          <h1 className="text-xl text-center">ایجاد حساب کاربری</h1>
          <p className="text-sm text-center">
            اگر حساب کابری دارید از طریق این لینک به صفحه ورود بروید{" "}
            <Link href="/" className="mr-1 text-blue-500">
              ورود کاربر
            </Link>
          </p>
        </div>
        <div className="flex flex-col divide-y">
          <div className="py-10">
            <h2 className="mb-7">اطلاعات شخصی</h2>
            <div className="space-y-10 w-full md:max-w-md">
              <div className="space-y-5">
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-1 right-4 inline-flex items-center">
                      <TbLetterCaseToggle className="w-[21px] h-[21px] text-gray-500" />
                    </span>
                    <input
                      type="text"
                      id="FullName"
                      autoComplete="name"
                      {...register("FullName", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.FullName
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="FullName"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.FullName
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      نام کامل{" "}
                    </label>
                  </div>
                  {errors.FullName && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>

                <div>
                  <div className="relative group">
                    <span className="absolute inset-y-1 group-focus:text-blue-500 text-gray-500 text-lg right-4 inline-flex items-center">
                      @
                    </span>
                    <input
                      type="text"
                      id="UserName"
                      autoComplete="username"
                      {...register("UserName", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.UserName
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="UserName"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.UserName
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      نام کاربری
                    </label>
                  </div>
                  {errors.UserName && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-1 right-4 inline-flex items-center">
                      <PhoneIcon className="w-5 h-5 text-gray-500" />
                    </span>
                    <input
                      type="number"
                      autoComplete="phone"
                      id="PhoneNumber"
                      {...register("PhoneNumber", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.PhoneNumber
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="PhoneNumber"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.PhoneNumber
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      شماره موبایل
                    </label>
                  </div>
                  {errors.PhoneNumber && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <span className="absolute inset-y-1 right-4 inline-flex items-center">
                      <HiOutlineMail className="w-[21px] h-[21px] text-gray-500" />
                    </span>
                    <input
                      type="email"
                      id="Email"
                      autoComplete="email"
                      {...register("Email", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.Email
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="Email"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.Email
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      ایمیل{" "}
                    </label>
                  </div>
                  {errors.Email && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-1 right-4 inline-flex items-center">
                      <MdPassword className="w-[21px] h-[21px] text-gray-500" />
                    </span>
                    <input
                      type="password"
                      id="Password"
                      {...register("Password", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.Password
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="Password"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.Password
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      رمز عبور{" "}
                    </label>
                  </div>
                  {errors.Email && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute inset-y-1 right-4 inline-flex items-center">
                      <MdPassword className="w-[21px] h-[21px] text-gray-500" />
                    </span>
                    <input
                      type="password"
                      id="ConfirmPassword"
                      {...register("ConfirmPassword", { required: true })}
                      className={`block px-2.5 pr-12 py-3 border w-full text-sm text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none peer focus:ring-0 ${
                        errors.ConfirmPassword
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="ConfirmPassword"
                      className={`absolute text-sm cursor-text text-gray-500 dark:text-gray-400 duration-300 transform translate-x-10 -translate-y-4 scale-75 top-1 right-10 z-10 origin-[0] bg-white px-2 peer-focus:px-2 ${
                        errors.ConfirmPassword
                          ? "peer-focus:text-rose-600"
                          : "peer-focus:text-blue-600"
                      } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:translate-x-10 peer-focus:scale-75 peer-focus:-translate-y-4`}
                    >
                      تایید رمز عبور{" "}
                    </label>
                  </div>
                  {errors.ConfirmPassword && (
                    <span className="text-red-500 mr-1 text-xs mt-1">
                      این قسمت نمی تواند خالی باشد
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="mb-7">اطلاعات کاری (اختیاری)</h2>
            <div className=" space-y-10 w-full md:max-w-2xl">
              <div className="">
                <label htmlFor="skills" className="text-sm text-gray-500">
                  مهارت ها{" "}
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="skills"
                    value={Skill}
                    onChange={SkillInputHandler}
                    className={`block p-3 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                    placeholder="مهارت های خود را وارد کنید"
                  />
                  <button
                    type="button"
                    onClick={addToSkillsHandler}
                    className=" h-10 px-2 bg-fuchsia-700 rounded-2xl mr-5"
                  >
                    <PlusIcon className="w-6 h-6 mx-auto text-white" />
                  </button>
                </div>
                {Skills.length ? (
                  <ul className="flex space-x-reverse space-x-3 mt-5 flex-wrap max-h-[48px] overflow-y-auto">
                    {Skills.map((skill, index) => (
                      <li
                        key={index}
                        className="text-xs py-2 px-3 mb-2 rounded-md border border-gray-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="">
                <label htmlFor="teams" className="text-sm text-gray-500">
                  تیم ها{" "}
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="teams"
                    value={Team}
                    onChange={TeamInputHandler}
                    className={`block p-3 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                    placeholder="تیم هایی که در آنها فعالیت داشته اید"
                  />
                  <button
                    type="button"
                    onClick={addToTeamsHandler}
                    className="h-10 px-2 bg-fuchsia-700 rounded-2xl mr-5"
                  >
                    <PlusIcon className="w-6 h-6 mx-auto text-white" />
                  </button>
                </div>
                {Teams.length ? (
                  <ul className="flex space-x-reverse space-x-3 mt-5 flex-wrap max-h-[48px] overflow-y-auto">
                    {Teams.map((team, index) => (
                      <li
                        key={index}
                        className="text-xs py-2 px-3 rounded-md border border-gray-300"
                      >
                        {team}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="">
                <label htmlFor="roles" className="text-sm text-gray-500">
                  نقش ها{" "}
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="roles"
                    value={Role}
                    onChange={RoleInputHandler}
                    className={`block p-3 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-2xl border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                    placeholder="نقش های اخیر خود را نام ببرید"
                  />
                  <button
                    type="button"
                    onClick={addToRolesHandler}
                    className="h-10 px-2 bg-fuchsia-700 rounded-2xl mr-5"
                  >
                    <PlusIcon className="w-6 h-6 mx-auto text-white" />
                  </button>
                </div>
                {Rols.length ? (
                  <ul className="flex space-x-reverse space-x-3 mt-5 flex-wrap max-h-[48px] overflow-y-auto">
                    {Rols.map((role, index) => (
                      <li
                        key={index}
                        className="text-xs py-2 px-3 rounded-md border border-gray-300"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button className="w-full md:max-w-sm bg-blue-500 active:transform active:scale-[.97] hover:bg-blue-600 text-white p-3 rounded-2xl">
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
