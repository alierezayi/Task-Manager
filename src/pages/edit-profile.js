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

  const onSubmit = (data) => {};

  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>ویرایش پروفایل</title>
      </Head>

      <Layout>
        <div className="w-full h-full flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input id="pload_file" type="text" {...register("file")} />

            <button type="submit">ثبت</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default App;
