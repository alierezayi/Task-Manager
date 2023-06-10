import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useSelector } from "react-redux";

import Layout from "@/components/layout";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>پروفایل</title>
      </Head>

      <Layout>
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-r from-blue-400 to-fuchsia-500 rounded-b-3xl md:rounded-b-[30px]" />
        <div className="sm:max-w-5xl md:w-[70%] mx-auto">
          {user.profile_image ? (
            <Image
              loader={() => user.profile_image}
              src={user.profile_image}
              className="w-56 h-56 md:w-62 md:h-62 bg-slate-400 rounded-full mx-auto md:mr-0 -mt-[118px] md:-mt-[118px]"
              width={224}
              height={224}
              alt="profile"
            />
          ) : (
            <div>
              <div className="w-56 h-56 md:w-62 md:h-62 rounded-full bg-slate-400 mx-auto md:mr-0 -mt-[118px] md:-mt-[118px] flex justify-center items-center">
                <span className="text-white text-7xl">
                  {user.FullName ? user.FullName.charAt(0) : ""}
                </span>
              </div>
            </div>
          )}

          <div className="px-10">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-2xl mt-4 mb-2">{user.FullName}</h1>
              <div className="text-xs mt-2 text-gray-500">
                <span className="mr-1">Date Created:</span>
                <span>{user.createdAt}</span>
              </div>{" "}
            </div>

            <div className="mt-12">
              <h3 className=" text-blue-500 mb-4">اطلاعات حساب کاربری</h3>

              <div className="divide-y">
                <div className="flex flex-col py-3">
                  <span>{user.UserName}</span>
                  <span className="text-sm text-gray-400">نام کاربری</span>
                </div>

                <div className="flex flex-col py-3">
                  <span>{user.PhoneNumber}</span>
                  <span className="text-sm text-gray-400">شماره تلفن</span>
                </div>

                <div className="flex flex-col py-3">
                  <span>{user.Email}</span>
                  <span className="text-sm text-gray-400">ایمیل</span>
                </div>

                <div className="flex flex-col py-3">
                  <span>
                    {user.Rols[0]
                      ? user.Rols.map((role, i) => (
                          <div key={i} className="flex">
                            <span>{role}</span>,
                          </div>
                        ))
                      : "نقشی تعیین نشده است"}
                  </span>
                  <span className="text-sm text-gray-400">نقش ها</span>
                </div>
                <div className="flex flex-col py-3">
                  <span>
                    {user.Skills[0]
                      ? user.Skills.map((skill, i) => (
                          <div key={i} className="flex">
                            <span>{skill}</span>,
                          </div>
                        ))
                      : "مهارتی تعیین نشده است"}
                  </span>
                  <span className="text-sm text-gray-400">مهارت ها</span>
                </div>
                <div className="flex flex-col py-3">
                  <span>
                    {user.Teams[0]
                      ? user.Teams.map((team, i) => (
                          <div key={i} className="flex">
                            <span>{team}</span>,
                          </div>
                        ))
                      : "تیمی تعیین نشده است"}
                  </span>
                  <span className="text-sm text-gray-400">تیم ها</span>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-7 flex justify-center items-center">
              <Link
                href="/edit-profile"
                className="hover:bg-blue-500 w-full hover:text-white py-2.5 rounded-lg bg-gray-100 text-blue-500 border border-blue-500 text-center transition"
              >
                ویرایش پروفایل
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
