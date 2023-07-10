import TimeAgo from "@/components/TimeAgo";
import Layout from "@/components/layout";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  LockClosedIcon,
  TagIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import projectImage from "../../../public/images/original.jpg"

const ProjectDetails = () => {
  const { projects } = useSelector((state) => state.project);
  const { teams } = useSelector((state) => state.team);
  console.log(teams);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  console.log(projects);
  const project = projects.find((project) => project._id === id);
  console.log(project);

  return (
    <Layout>
      <div className="w-full max-w-5xl my-10 mx-auto bg-white rounded-2xl drop-shadow-sm flex flex-col pt-5 md:pt-9 px-5 md:px-10">
        {/* more options */}
        <div className="text-right">
          <Menu
            as="div"
            className="absolute left-5 top-5 inline-block text-left"
          >
            <div>
              <Menu.Button className="inline-flex p-1 w-[30px] h-[30px] hover:bg-gray-50 rounded-full justify-center focus:outline-none">
                <EllipsisVerticalIcon className="w-6 h-6" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-2  w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-blue-500" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <PencilIcon className="w-5 h-5 ml-2" />
                        ویرایش
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-rose-500" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <TrashIcon className="w-5 h-5 ml-2" />
                        حذف
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex items-center">
          <Image
            // loader={() => project.Image}
            src={projectImage}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-yellow-300"
            width={40}
            height={40}
            alt={project.Title}
          />
          <h2 className=" text-lg mr-5 text-blue-600">{project.Title}</h2>
        </div>

        <div className="space-y-10 mt-10">
          <div className="w-full space-y-1 text-sm px-2">
            <h3 className="font-bold">توضیحات</h3>
            <p className="text-gray-500">{project.Text}</p>
          </div>

          <div className="w-full space-y-1 text-sm px-2">
            <h3 className="font-bold">تگ ها</h3>
            <ul className="space-x-reverse space-x-2 flex-wrap overflow-hidden">
              {project.tags.length ? (
                project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="inline-flex py-1 mt-1 items-center px-2 rounded-full border border-blue-300 text-blue-500 bg-blue-50"
                  >
                    <TagIcon className="w-3.5 h-3.5 ml-1" />
                    <span className="text-xs">{tag}</span>
                  </li>
                ))
              ) : (
                <span className="text-gray-400">اطلاعاتی ثبت نشده است</span>
              )}
            </ul>
          </div>

          <div className="w-full space-y-1 px-2">
            <h3 className="font-bold">تیم ها</h3>
            <div className="grid grid-cols-1 gap-y-4 gap-x-10 sm:grid-cols-2 rounded-xl">
              {teams.length ? (
                teams.map((team, index) => (
                  <Link
                    href={`teams/${team._id}`}
                    key={index}
                    className="flex flex-col p-2.5 rounded-xl shadow-sm border border-slate-50 hover:border-slate-200 bg-slate-50 px-4"
                  >
                    <span className="text-md text-blue-500">{team.name}</span>
                    <p className="mt-2 text-sm truncate">{team.Description}</p>
                  </Link>
                ))
              ) : (
                <span className="text-gray-400">تیمی یافت نشد</span>
              )}
            </div>
          </div>

          <div className="w-full flex justify-between border-t pt-3 pb-4 items-center space-y-1 text-xs md:text-sm px-2 text-gray-500">
            <div className="flex items-center">
              <div className="flex items-center ml-1">
                <LockClosedIcon className="w-4 h-4" />
                وضعیت:
              </div>
              <span>{project.Private ? "خصوصی" : "عمومی"}</span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-1">ایجاد در</div>
              <TimeAgo dateString={project.createdAt} />
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-1">بروزرسانی در</div>
              {project.createdAt === project.updatedAt ? (
                "- - / - -"
              ) : (
                <TimeAgo dateString={project.updatedAt} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
