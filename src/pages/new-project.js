import Notify from "@/components/Notify";
import Layout from "@/components/layout";
import projectAPI from "@/services/projectAPI";
import { PlusIcon, TagIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const NewProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [response, setResponse] = useState({});

  const { token } = useSelector((state) => state.login);

  const inputTagHandler = (e) => {
    setTagInput(e.target.value);
  };

  const fileInputHandler = (e) => {
    setImage(e.target.files[0]);
  };

  console.log(response);

  useEffect(() => {
    if (response.success) {
      router.push("/projects");
    }
  }, [response]);

  const appendNewTag = () => {
    if (tagInput.trim()) {
      setTags((prevState) => [...prevState, tagInput]);
    }
    setTagInput("");
  };

  const newProjectHandler = (data) => {
    const formData = new FormData();
    formData.append("Title", data.Title);
    formData.append("Text", data.Text);
    formData.append("image", image);
    tags.forEach((value) => {
      formData.append("tags[]", value);
    });

    if (image) {
      projectAPI
        .createProject(token, formData)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((error) => {
          setResponse(error.response.data);
        });
    }
  };

  return (
    <>
      <Head>
        <title>پروژه جدید</title>
      </Head>
      <Layout>
        <div className="w-full h-full">
          <div className="w-full max-w-xl my-10 md:rounded-xl bg-white shadow-sm mx-auto px-4 md:px-10 py-20">
            <h1 className="font-semibold text-lg mt-0">ساخت پروژه جدید</h1>

            <form className="mt-5" onSubmit={handleSubmit(newProjectHandler)}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="title" className=" text-gray-500">
                    عنوان
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("Title", { required: true })}
                    className={`block px-2.5 py-2 border w-full bg-white text-sm mt-1 text-gray-900 bg-transparent rounded-lg border-1 border-gray-200  focus:outline-none peer focus:ring-0 ${
                      errors.Title
                        ? "focus:border-rose-600"
                        : "focus:border-blue-600"
                    }`}
                  />
                  {errors.Title && (
                    <span className="text-xs text-rose-500">
                      لطفا عنوان را وارد کنید
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="text" className="text-sm text-gray-500">
                    متن{" "}
                  </label>
                  <textarea
                    id="text"
                    {...register("Text", { required: true, maxLength: 50 })}
                    className={`border rounded-md w-full p-2 mt-1 text-sm outline-none focus:border-blue-600 ${
                      errors.Text
                        ? "focus:border-rose-600"
                        : "focus:border-blue-600"
                    }`}
                    placeholder=""
                  />
                  {errors.Text && (
                    <span className="text-xs text-rose-500 mt-1">
                      این کادر نمی تواند خالی باشد
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-500" htmlFor="tags">
                    تگ ها
                  </label>
                  <div className="inline-flex items-center">
                    <input
                      id="tags"
                      type="text"
                      value={tagInput}
                      onChange={inputTagHandler}
                      className="border-b outline-none p-1 focus:border-blue-600 w-full"
                    />
                    <button
                      type="button"
                      onClick={appendNewTag}
                      className="p-1 rounded-md bg-slate-100 hover:bg-slate-200  text-slate-700 mr-2"
                    >
                      <PlusIcon className="w-6 h-6" />
                    </button>
                  </div>
                  <ul className="flex flex-wrap space-x-reverse space-x-2 mt-3">
                    {tags.length
                      ? tags.map((tag, index) => (
                          <li
                            key={index}
                            className="inline-flex py-1 mt-1 items-center px-3 rounded-full border border-blue-300 text-blue-600 bg-blue-50"
                          >
                            <TagIcon className="w4 h-4 ml-1" />
                            <span className="text-xs">{tag}</span>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="image" className="text-sm text-gray-500">
                    عکس
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    onChange={fileInputHandler}
                    className="text-sm text-grey-500 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50hover:file:text-amber-700"
                  />
                  {errors.image && (
                    <span className="text-xs text-rose-500 mt-1">
                      لطفا برای پروژه خود عکسی انتخاب کنید
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 flex justify-center text-white"
                >
                  ایجاد پروژه
                </button>
              </div>
              {Object.keys(response).length > 0 && (
                <Notify
                  options={{
                    type: response.success ? "success" : "error",
                    description: response.message,
                  }}
                />
              )}
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewProject;
