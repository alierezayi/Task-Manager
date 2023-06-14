import TimeAgo from "@/components/TimeAgo";
import Layout from "@/components/layout";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  EyeIcon,
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

const ProjectDetails = () => {
  const { projects } = useSelector((state) => state.project);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  console.log(projects);
  const project = projects.find((project) => project._id === id);
  console.log(project);

  const team = [
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
    {
      name: "بیت کد",
      Description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      username: "store_project_digikala",
      users: ["_reza_esmaeili", "yarandish", "bitcode"],
    },
  ];

  return (
    <Layout>
      <div className="w-full max-w-5xl mt-20 mx-auto bg-white rounded-2xl drop-shadow-sm flex flex-col py-5 px-5 md:px-10">
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
                      <Link
                        href={`projects/${project._id}`}
                        className={`${
                          active ? "bg-gray-100 text-blue-500" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <EyeIcon className="w-5 h-5 ml-2" />
                        نمایش
                      </Link>
                    )}
                  </Menu.Item>
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
        <div>
          <Image
            loader={() => project.Image}
            src={project.Image}
            className="w-16 h-16 rounded-full mb-3 bg-gradient-to-br from-blue-400 to-yellow-300"
            width={40}
            height={40}
            alt={project.Title}
          />
          <h2 className="font-bold mr-2">{project.Title}</h2>
        </div>

        <div className="space-y-8 mt-6">
          <div className="w-full space-y-1 text-sm px-2">
            <h3 className="text-blue-500">توضیحات</h3>
            <p className="">{project.Text}</p>
          </div>

          <div className="w-full space-y-1 text-sm px-2">
            <h3 className="text-blue-500">تگ ها</h3>
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

          <div className="w-full space-y-1 text-sm px-2">
            <h3 className="text-blue-500">تیم ها</h3>
            <div className=" p-2 rounded-xl border border-slate-100 space-y-4">
              {project.Team.length ? (
                project.Team.map((team, index) => (
                  <Link
                    href={`teams/{Team.id}`}
                    key={index}
                    className="flex items-center p-2 rounded-xl bg-slate-50 px-4"
                  >
                    <span className="text-sm">{team.name}</span>
                  </Link>
                ))
              ) : (
                <span className="text-gray-400">تیمی یافت نشد</span>
              )}
            </div>
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
