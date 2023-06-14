import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";

import Layout from "@/components/layout";

import { useDispatch, useSelector } from "react-redux";

import { CameraIcon } from "@heroicons/react/24/solid";
import Modal from "@/components/Dialog";
import userAPI from "@/services/userAPI";
import Notify from "@/components/Notify";
import { editProfile } from "@/features/userSlice";
import { useRouter } from "next/router";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.login);
  console.log(token);

  const dispatch = useDispatch();

  const router = useRouter();

  const [image, setImage] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const [uploadImageRes, setUploadImageRes] = useState({});
  const [editProfileRes, setEditProfileRes] = useState({});

  const fileChangeHandler = (e) => {
    setImage(e.target.files[0]);
    setOpenModal(true);
    console.log(e.target.files[0]);
  };

  const uploadImageHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData.get("image"));

    userAPI
      .setProfileImage(token, formData)
      .then((response) => setUploadImageRes(response.data))
      .catch((error) => setUploadImageRes(error));

    setOpenModal(false);
  };

  const editProfileHandler = (data) => {
    userAPI
      .editProfile(token, data)
      .then((response) => setEditProfileRes(response.data))
      .catch((error) => setEditProfileRes(error));

    router.push("/profile");
  };

  const closeCaption = () => {
    setOpenModal(false);
    setImage(null);
  };

  return (
    <>
      <Head>
        <title>ویرایش پروفایل</title>
      </Head>

      <Layout>
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full md:max-w-xl">
            {/* profile image */}
            <div className="md:rounded-xl bg-white px-4 sm:px-8 py-10 mx-1 my-10">
              <div>
                {user.profile_image ? (
                  <Image
                    loader={() => user.profile_image}
                    src={user.profile_image}
                    className="w-48 h-48 md:w-52 md:h-52 bg-slate-400 rounded-full mx-auto"
                    width={224}
                    height={224}
                    alt="profile"
                  />
                ) : (
                  <div>
                    <div className="w-48 h-48 md:w-52 md:h-52 rounded-full bg-slate-400 mx-auto flex justify-center items-center relative">
                      <label
                        htmlFor="upload_file"
                        className="absolute bottom-[12px] md:bottom-[18px] right-[12px] md:right-[18px] bg-slate-200/20 backdrop-blur text-gray-600 rounded-full p-1.5 cursor-pointer"
                      >
                        <CameraIcon className="block w-6 h-6" />
                      </label>
                      <input
                        id="upload_file"
                        type="file"
                        accept="image/*"
                        onChange={fileChangeHandler}
                        className="absolute opacity-0"
                      />
                      <span className="text-white text-7xl">
                        {user.FullName ? user.FullName.charAt(0) : ""}
                      </span>
                    </div>
                  </div>
                )}
                <Modal
                  title="عکس پروفایل"
                  isOpen={openModal}
                  setIsOpen={setOpenModal}
                >
                  <p>آیا فایل انتخاب شده به عنوان عکس پروفایل تنظیم گردد؟</p>
                  <div className="flex justify-end">
                    <button
                      className="px-3 py-1 ml-3 hover:text-blue-500"
                      onClick={uploadImageHandler}
                    >
                      بله
                    </button>
                    <button
                      className="px-2 py-1 hover:text-rose-500"
                      onClick={closeCaption}
                    >
                      خیر
                    </button>
                  </div>
                </Modal>
              </div>

              {Object.keys(uploadImageRes).length > 0 && (
                <Notify
                  options={{
                    type: uploadImageRes?.success ? "success" : "error",
                    description: uploadImageRes?.message,
                  }}
                />
              )}

              <form onSubmit={handleSubmit(editProfileHandler)}>
                {/* edit profile */}
                <div className="space-y-6 mt-10">
                  <div>
                    <label htmlFor="ّFullName" className="text-sm">
                      نام کامل
                    </label>
                    <input
                      type="text"
                      id="ّFullName"
                      defaultValue={user.FullName}
                      {...register("FullName", { required: true })}
                      className={`block px-2.5 py-2.5 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-lg border-1 border-gray-00  focus:outline-none peer focus:ring-0 ${
                        errors.FullName
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="PhoneNumber" className="text-sm">
                      شماره موبایل
                    </label>
                    <input
                      type="number"
                      id="PhoneNumber"
                      {...register("PhoneNumber", { required: true })}
                      defaultValue={user.PhoneNumber}
                      className={`block px-2.5 py-2.5 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-lg border-1 border-gray-00  focus:outline-none peer focus:ring-0 ${
                        errors.PhoneNumber
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("Email", { required: true })}
                      defaultValue={user.Email}
                      className={`block px-2.5 py-2.5 border w-full text-sm mt-1 text-gray-900 bg-transparent rounded-lg border-1 border-gray-00  focus:outline-none peer focus:ring-0 ${
                        errors.Email
                          ? "focus:border-rose-600"
                          : "focus:border-blue-600"
                      }`}
                      placeholder=" "
                    />
                  </div>
                </div>

                {/* submit editing */}
                <div className="flex mt-10">
                  <Link
                    href="/profile"
                    className="w-1/2 rounded-lg border text-center border-rose-400 text-rose-500 hover:text-white hover:bg-rose-500 transition-colors py-2.5 active:scale-[98%]"
                  >
                    لغو
                  </Link>
                  <button
                    className="w-1/2 rounded-lg border text-white bg-blue-600 hover:bg-blue-700 transition-colors mr-3 py-2.5 active:scale-[98%]"
                    type="submit"
                  >
                    ذخیره{" "}
                  </button>
                </div>
              </form>
              {Object.keys(editProfileRes).length > 0 && (
                <Notify
                  options={{
                    type: editProfileRes.success ? "success" : "error",
                    description: editProfileRes.message,
                  }}
                />
              )}
              <div className="text-xs text-end text-gray-700 mt-4">
                Last updated: {user.updatedAt}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
