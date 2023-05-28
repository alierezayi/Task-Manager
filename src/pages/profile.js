import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import { ShareIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return (
    <Layout>
      <div className="w-full h-[35vh] bg-gradient-to-r from-rose-500 to-blue-500 rounded-b-3xl"></div>
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
          <div className="w-56 h-56 border-2 rounded-full bg-slate-400 mx-auto -mt-[118px] md:-mt-[125px] flex justify-center items-center">
            <span className="text-white text-7xl">
              {user.FullName ? user.FullName.charAt(0) : ""}
            </span>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col items-center justify-center">
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
    </Layout>
  );
};

export default Profile;
