import Image from "next/image";
import Head from "next/head";

import { Fragment, useState } from "react";

import { Tab } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Projects from "../components/dashboard/projects";
import Teams from "../components/dashboard/teams";
import Layout from "@/components/layout";

import projectIcon from "../../public/images/task-square-svgrepo-com (3).svg";
import teamIcon from "../../public/images/team-svgrepo-com (1).svg";

export default function Dashboard() {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  // Handle open Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);

  const closeSidebar = () => setSidebarOpen(false);

  // Handle minimize Sidebar

  return (
    <>

      <Head>
        <title>داشبورد</title>
      </Head>

      <Layout>
        <div className="flex relative">
          {/* Backdrop */}
          {sidebarOpen && (
            <div
              className="absolute inset-x-0 bottom-0 -top-16 backdrop-blur-sm z-10 md:hidden"
              onClick={closeSidebar}
            />
          )}

          <Tab.Group vertical as={Fragment}>
            {/* Sidebar */}
            <div
              className={classNames(
                "fixed h-screen md:relative md:block w-3/4 xl:w-1/6 lg:w-1/4 md:w-1/3 right-0 inset-y-0 bg-slate-900 z-20",
                "transform transition-transform md:transform-none",
                sidebarOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              {/* title */}
              <div className="mx-auto px-4 py-6 sm:px-6 flex space-x-reverse space-x-5">
                <Bars3Icon className="w-9 h-9 text-white" />
                <h1 className="text-3xl font-bold tracking-tight text-white/95">
                  داشبورد
                </h1>
              </div>

              <div className="w-full px-2 sm:px-0">
                <Tab.List className="flex flex-col space-x-1 py-1 px-4 h-full space-y-2">
                  {/* Tab 1 */}
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-md py-2 font-medium leading-5",
                        "flex items-center justify-center space-x-reverse space-x-2",
                        selected
                          ? "bg-slate-500 text-white"
                          : "text-white bg-slate-900 hover:bg-white/10"
                      )
                    }
                  >
                    <Image
                      src={projectIcon}
                      width="auto"
                      height="auto"
                      alt=""
                      className="w-6 h-8"
                    />

                    <span>پروژه ها</span>
                  </Tab>

                  {/* Tab 2 */}
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-md py-2 font-medium leading-5",
                        "flex items-center justify-center space-x-reverse space-x-2",
                        selected
                          ? "bg-slate-500 text-white"
                          : "text-white bg-slate-900 hover:bg-white/5"
                      )
                    }
                  >
                    <Image
                      src={teamIcon}
                      width="auto"
                      height="auto"
                      alt=""
                      className="w-6 h-8"
                    />

                    <span>تیم ها</span>
                  </Tab>
                </Tab.List>
              </div>
            </div>

            {/* Content */}
            <div className="xl:w-5/6 lg:w-3/4 md:w-2/3 w-full h-screen overflow-auto bg-gray-100">
              {/* open Sidebar */}
              <div
                className="mx-1 my-2 flex items-center space-x-reverse space-x-3 md:hidden"
                onClick={openSidebar}
              >
                <Bars3Icon className="block w-10 h-10 p-1 rounded hover:bg-slate-50 text-gray-600" />
                <span className="text-gray-700">داشبورد</span>
              </div>

              <Tab.Panels>
                {/* Pannel 1 */}
                <Tab.Panel>
                  <Projects />
                </Tab.Panel>

                {/* Pannel 2 */}
                <Tab.Panel>
                  <Teams />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </Layout>
    </>
  );
}
