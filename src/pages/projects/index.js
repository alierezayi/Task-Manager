import React, { useEffect } from "react";
import Layout from "@/components/layout";
import Project from "@/components/Project";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "@/features/projectSlice";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import projectIcon from "../../../public/images/add-note-svgrepo-com (2).svg";
import SearchBar from "@/components/SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const { token } = useSelector((state) => state.login);
  const projectState = useSelector((state) => state.project);
  const { pending, projects, success } = projectState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects(token));
  }, []);

  return (
    <Layout>
      {pending && (
        <div className="absolute inset-0 h-screen flex justify-center items-center backdrop-blur-sm">
          <Spinner />
          <span className="text-blue-500 mr-3">درحال بارگذاری ...</span>
        </div>
      )}

      <div className="w-full mx-auto max-w-[1450px] md:px-10 px-5 py-10">
        <div>
          <div className="flex justify-center items-center px-2">
            <div className="w-full md:max-w-md border space-y-3 border-gray-300 hover:bg-slate-100/50 border-dashed rounded-xl py-10 flex flex-col justify-center items-center">
              <span className="text-sm">
                برای شروع یک پروژه اینجا کلیک کنید
              </span>
              <Link
                href="/new-project"
                className="px-3 py-2 bg-sky-400 inline-flex text-white rounded-lg text-sm"
              >
                <Image
                  src={projectIcon}
                  width="auto"
                  height="auto"
                  alt=""
                  className="w-5 h-5 ml-2"
                />{" "}
                ساخت پروژه جدید
              </Link>
            </div>
          </div>
        </div>
        {projects.length > 0 ? (
          <div className="mt-5">
            <div className="py-8 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center space-y-4 md:space-y-0">
              {/* title */}
              <h1 className="text-xl">پروژه ها</h1>

              {/* search */}
              <SearchBar items={projects} className="w-full max-w-xs" projects>
                <div className="rounded-2xl bg-slate-200 hover:bg-slate-100 border text-blue-900 py-2 px-4 flex cursor-pointer">
                  <MagnifyingGlassIcon className="w-6 h-6 text-blue-500 ml-2" />
                  <span>جستجو ...</span>
                </div>
              </SearchBar>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 md:gap-x-10 md:gap-y-10 gap-5">
              {projects.map((project) => (
                <Project key={project._id} project={project} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <p>پروژه ای برای نمایش وجود ندارد.</p>
            <Link
              href="/new-project"
              className="text-blue-500 inline-flex items-center mt-1 p-2 rounded-lg hover:bg-slate-200"
            >
              <PlusIcon className="w-6 h-6" />
              ساخت پروژه
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;

const Spinner = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-7 h-7 mr-2 text-blue-300/50 animate-spin fill-blue-500"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};
