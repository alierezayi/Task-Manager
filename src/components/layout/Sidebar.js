import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import projectIcon from "../../../public/images/task-square-svgrepo-com (3).svg";
import newProjectIcon from "../../../public/images/add-note-svgrepo-com.svg";
import newTeamIcon from "../../../public/images/user-add-svgrepo-com.svg";
import teamIcon from "../../../public/images/team-svgrepo-com (1).svg";
import { toggleMinimize } from "@/features/sidebarSlice";

export default function Sidebar() {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const router = useRouter();

  const dispatch = useDispatch();

  const { sidebarOpen, minimize } = useSelector((state) => state.sidebar);

  const handleMinimize = () => {
    if (!sidebarOpen) {
      dispatch(toggleMinimize());
    }
  };

  return (
    <>
      <div
        className={classNames(
          "fixed h-screen md:relative md:block right-0 inset-y-0 bg-slate-900 z-20 transform transition-all md:transform-none",
          sidebarOpen ? "translate-x-0" : "translate-x-full",
          minimize ? "w-20" : "w-3/4 md:w-80 3xl:w-96"
        )}
      >
        {/* title */}
        <div className="mx-auto px-4 py-6 sm:px-6 flex space-x-reverse space-x-5">
          <button onClick={handleMinimize}>
            <Bars3Icon className="w-9 h-9 text-white" />
          </button>
          <h1
            className={classNames(
              "text-3xl font-bold tracking-tight text-white/95",
              minimize ? "hidden" : "block"
            )}
          >
            داشبورد
          </h1>
        </div>

        <div className="w-full px-2 sm:px-0">
          <div
            className={classNames(
              !minimize && "space-y-4",
              "flex flex-col space-x-1 py-1 px-4 h-full "
            )}
          >
            <div className={classNames(minimize && "space-y-4")}>
              <h1
                className={classNames(
                  "text-white text-xl mr-4 mb-4",
                  minimize ? "hidden" : "block"
                )}
              >
                پروژه
              </h1>
              {/* projects */}
              <Link
                href="/projects"
                className={classNames(
                  "w-full rounded-md py-2 font-medium flex items-center space-x-reverse space-x-2",
                  router.pathname === "/projects"
                    ? "border-r-2 rounded-none hover:rounded-md text-white hover:bg-white/10"
                    : "text-white bg-slate-900 hover:bg-white/10",
                  minimize ? "justify-center" : "justify-start px-6"
                )}
              >
                <Image
                  src={projectIcon}
                  width="auto"
                  height="auto"
                  alt=""
                  className={classNames("w-6 h-7 text-white")}
                />

                <span className={classNames(minimize ? "hidden" : "block")}>
                  پروژه ها
                </span>
              </Link>

              {/* new projects */}
              <Link
                href="/new-project"
                className={classNames(
                  "w-full rounded-md py-2 font-medium flex items-center space-x-reverse space-x-2",
                  router.pathname === "/new-project"
                    ? "border-r-2 rounded-none hover:rounded-md text-white hover:bg-white/10"
                    : "text-white bg-slate-900 hover:bg-white/10",
                  minimize ? "justify-center" : "justify-start px-6"
                )}
              >
                <Image
                  src={newProjectIcon}
                  width="auto"
                  height="auto"
                  alt=""
                  className={classNames("w-6 h-7 text-white")}
                />

                <span className={classNames(minimize ? "hidden" : "block")}>
                  پروژه جدید
                </span>
              </Link>
            </div>

            {/* teams */}
            <div className={classNames(minimize && "space-y-4")}>
              <h1
                className={classNames(
                  "text-white text-xl mr-4 mb-4",
                  minimize ? "hidden" : "block"
                )}
              >
                تیم
              </h1>
              <Link
                href="/teams"
                className={classNames(
                  "w-full rounded-md py-2 font-medium flex items-center space-x-reverse space-x-2",
                  router.pathname === "/teams"
                    ? "border-r-2 rounded-none hover:rounded-md text-white hover:bg-white/10"
                    : "text-white bg-slate-900 hover:bg-white/10",
                  minimize ? "justify-center" : "justify-start px-6"
                )}
              >
                <Image
                  src={teamIcon}
                  width="auto"
                  height="auto"
                  alt=""
                  className={classNames("w-6 h-7 text-white")}
                />

                <span className={classNames(minimize ? "hidden" : "block")}>
                  تیم ها
                </span>
              </Link>

              {/* new teams */}
              <Link
                href="/new-team"
                className={classNames(
                  "w-full rounded-md py-2 font-medium flex items-center space-x-reverse space-x-2",
                  router.pathname === "/new-team"
                    ? "border-r-2 rounded-none hover:rounded-md text-white hover:bg-white/10"
                    : "text-white bg-slate-900 hover:bg-white/10",
                  minimize ? "justify-center" : "justify-start px-6"
                )}
              >
                <Image
                  src={newTeamIcon}
                  width="auto"
                  height="auto"
                  alt=""
                  className={classNames("w-6 h-7 text-white")}
                />

                <span className={classNames(minimize ? "hidden" : "block")}>
                  تیم جدید
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
