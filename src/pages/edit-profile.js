import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.file);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    console.log(formData);
  };

  const { user } = useSelector((state) => state.user);

  return (
    <>

      <Head>
        <title>ویرایش پروفایل</title>
      </Head>

      <Layout>
        <div className="w-full h-full flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="upload_file" className=" cursor-pointer">
              {user.profile_image ? (
                <Image
                  src={user.profile_image}
                  className="w-56 h-56 rounded-full border-2 mx-auto"
                  width="auto"
                  height="auto"
                  alt="profile"
                />
              ) : (
                <div className="w-56 h-56 border-2 rounded-full bg-slate-400 mx-auto flex justify-center items-center">
                  <span className="text-white text-7xl">
                    {user.FullName ? user.FullName.charAt(0) : ""}
                  </span>
                </div>
              )}
            </label>
            <input id="pload_file" type="file" {...register("file")} />

            <button type="submit">ثبت</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default App;
