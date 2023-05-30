import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { ShareIcon, CameraIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import userAPI from "@/services/userAPI";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  console.log(token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fileExisted, setFileExisted] = useState(false);

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
      setFileExisted(true);
    }
    console.log(e.target.files[0]);
  };

  const handleUploadImage = async (data) => {
    console.log(data.file[0]);
    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {
      const response = await userAPI.setProfileImage(token, data.file[0]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <>
      <Head>
        <title>پروفایل</title>
      </Head>

      <Layout>
        <form onSubmit={handleSubmit(handleUploadImage)}>
          <div className="w-full h-72 bg-gradient-to-r from-rose-500 to-blue-500 rounded-b-2xl"></div>
          {user.profile_image ? (
            <Image
              src={user.profile_image}
              className="w-56 h-56 rounded-full border-2 mx-auto -mt-[118px] md:-mt-[125px]"
              width="auto"
              height="auto"
              alt="profile"
            />
          ) : (
            <div>
              <div className="w-56 h-56 border-2 rounded-full bg-slate-400 mx-auto -mt-[118px] md:-mt-[125px] flex justify-center items-center relative">
                <label
                  htmlFor="upload_file"
                  className="absolute bottom-[17px] right-[17px] bg-slate-200/20 backdrop-blur text-gray-600 rounded-full p-1.5 cursor-pointer"
                >
                  <CameraIcon className="block w-6 h-6" />
                </label>
                <input
                  id="upload_file"
                  type="file"
                  {...register("file")}
                  onChange={fileChangeHandler}
                  className="absolute opacity-0"
                />
                <span className="text-white text-7xl">
                  {user.FullName ? user.FullName.charAt(0) : ""}
                </span>
              </div>
            </div>
          )}

          <div className="w-full flex flex-col items-center justify-center">
            {fileExisted ? (
              <div className="flex space-x-reverse space-x-5">
                <button
                  type="button"
                  className="p-2 rounded-full text-rose-500 bg-slate-200"
                  onClick={() => setFileExisted(false)}
                >
                  <XMarkIcon className="block w-6 h-6" />
                </button>
                <button
                  type="submit"
                  className="p-2 rounded-full text-blue-500 bg-slate-200"
                >
                  <CheckIcon className="block w-6 h-6" />
                </button>
              </div>
            ) : null}
            <span className="text-3xl my-4">{user.FullName}</span>
            <div className="space-x-reverse space-x-2 flex items-center justify-center text-lg">
              <span>{user.Email}</span>
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              <span>{user.UserName}</span>
            </div>
            <div className="text-xs mt-2 text-gray-500">
              <span className="mr-1">Date Created:</span>
              <span>{user.createdAt}</span>
            </div>
            <div className="mt-5 mb-7 flex justify-center items-center">
              <Link
                href="/edit-profile"
                className="hover:bg-blue-500 w-60  hover:text-white py-2.5 rounded-lg bg-gray-100 text-blue-500 border border-blue-500 text-center transition"
              >
                ویرایش پروفایل
              </Link>
              <button className="border border-slate-500 transition hover:border-black hover:text-black text-slate-500 mr-2 p-2.5 rounded-lg">
                <ShareIcon className="block w-6 h-6" />
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default Profile;
