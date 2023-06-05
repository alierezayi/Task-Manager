import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import Layout from "@/components/layout";

import { ShareIcon, CameraIcon } from "@heroicons/react/24/outline";
import { uploadImage } from "@/features/userSlice";
import axios from "axios";

const Profile = () => {
  const { user, profileImg } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  // console.log(profileImg);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(false);

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(true);
    }
    console.log(e.target.files[0]);
  };

  const handleUploadImage = async (data) => {
    setSelectedFile(false);

    const formData = new FormData();
    formData.append("image", data.file);

    console.log(...formData);

    // dispatch(uploadImage(token, formData));

    axios({
      method: "post",
      url: "http://127.0.0.1:3000/user/profile-image",
      data: formData.image,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response));

    reset();
  };

  const closeCaption = () => {
    setSelectedFile(false);

    reset();
  };

  return (
    <>
      <Head>
        <title>پروفایل</title>
      </Head>

      <Layout>
        <form onSubmit={handleSubmit(handleUploadImage)}>
          <div className="w-full min-h-[288px] h-[40vh] max-h-[300px] bg-gradient-to-r from-blue-400 to-fuchsia-500 rounded-b-3xl md:rounded-b-[30px]"></div>
          {user.profile_image ? (
            <Image
              src={user.profile_image}
              className="w-56 h-56 md:w-64 md:h-64 rounded-full border-2 mx-auto -mt-[118px] md:-mt-[118px]"
              width="auto"
              height="auto"
              alt="profile"
            />
          ) : (
            <div>
              <div className="w-56 h-56 md:w-62 md:h-62 rounded-full bg-slate-400 mx-auto -mt-[118px] md:-mt-[118px] flex justify-center items-center relative">
                <label
                  htmlFor="upload_file"
                  className="absolute bottom-[17px] right-[17px] bg-slate-200/20 backdrop-blur text-gray-600 rounded-full p-1.5 cursor-pointer"
                >
                  <CameraIcon className="block w-6 h-6" />
                </label>
                <input
                  id="upload_file"
                  type="file"
                  accept="image/*"
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

          {selectedFile ? (
            <div className="flex items-center justify-center text-black mt-8 mb-4 mx-auto">
              <div className="flex items-center justify-center border bg-white border-slate-300 py-3 px-4 rounded-xl">
                <p>آیا عکس انتخاب شده به عنوان پروفایل تنظیم گردد؟</p>
                <button
                  type="button"
                  onClick={closeCaption}
                  className="px-2 hover:text-rose-500"
                >
                  خیر
                </button>
                <button type="submit" className="px-2 hover:text-blue-500">
                  بله
                </button>
              </div>
            </div>
          ) : null}

          <div className="w-full flex flex-col items-center justify-center">
            <span className="text-3xl my-4">{user.FullName}</span>
            <div className="space-x-reverse space-x-2 flex items-center justify-center text-lg">
              <span>{user.Email}</span>
              <span className="w-2 h-2 bg-slate-300 rounded-full" />
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
              <button
                type="button"
                className="border border-slate-500 transition hover:border-black hover:text-black text-slate-500 mr-2 p-2.5 rounded-lg"
              >
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
