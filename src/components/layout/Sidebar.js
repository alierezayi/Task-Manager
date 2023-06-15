import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { toggleMinimize, closeSidebar } from "@/features/sidebarSlice";

import projectIcon from "../../../public/images/task-square-svgrepo-com (1).svg";
import newProjectIcon from "../../../public/images/add-note-svgrepo-com (1).svg";
import newTeamIcon from "../../../public/images/user-add-svgrepo-com (1).svg";
import teamIcon from "../../../public/images/team-svgrepo-com.svg";

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
          "fixed h-screen md:relative md:block right-0 inset-y-0  bg-slate-200 drop-shadow-sm md:rounded-tl-[30px] z-20 transform transition-all md:transform-none",
          sidebarOpen ? "translate-x-0" : "translate-x-full",
          minimize ? "w-20" : "w-3/4 md:w-80 3xl:w-96"
        )}
      >
        {/* title */}
        <div className="mx-auto px-4 py-4 flex items-center space-x-reverse space-x-5">
          <button
            className="p-2 hover:bg-white/50 rounded-2xl"
            onClick={handleMinimize}
          >
            <Bars3Icon className="w-9 h-9" />
          </button>
          <h1
            className={classNames(
              "text-3xl font-bold tracking-tight",
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
            <div>
              <h1
                className={classNames(
                  "text-xl mr-2 mb-4",
                  minimize ? "hidden" : "block"
                )}
              >
                پروژه
              </h1>
              {/* projects */}
              <div className={classNames(minimize ? "space-y-4" : "space-y-1")}>
                <Link
                  href="/projects"
                  onClick={() => dispatch(closeSidebar())}
                  className={classNames(
                    "w-full py-2 font-medium flex items-center space-x-reverse space-x-2",
                    router.pathname === "/projects"
                      ? "bg-slate-50 drop-shadow-md"
                      : "hover:bg-white/50",
                    minimize
                      ? "justify-center rounded-2xl"
                      : "justify-start px-4 rounded-xl"
                  )}
                >
                  <Image
                    src={projectIcon}
                    width="auto"
                    height="auto"
                    alt=""
                    className={classNames("w-6 h-7")}
                  />

                  <span className={classNames(minimize ? "hidden" : "block")}>
                    پروژه ها
                  </span>
                </Link>

                {/* new projects */}
                <Link
                  href="/new-project"
                  onClick={() => dispatch(closeSidebar())}
                  className={classNames(
                    "w-full py-2 font-medium flex items-center space-x-reverse space-x-2",
                    router.pathname === "/new-project"
                      ? "bg-slate-50 drop-shadow-md"
                      : "hover:bg-white/50",
                    minimize
                      ? "justify-center rounded-2xl"
                      : "justify-start px-4 rounded-xl"
                  )}
                >
                  <Image
                    src={newProjectIcon}
                    width="auto"
                    height="auto"
                    alt=""
                    className={classNames("w-6 h-7")}
                  />

                  <span className={classNames(minimize ? "hidden" : "block")}>
                    پروژه جدید
                  </span>
                </Link>
              </div>
            </div>

            {/* teams */}
            <div className={classNames(minimize && "space-y-4")}>
              <h1
                className={classNames(
                  "text-xl mr-2 mb-4",
                  minimize ? "hidden" : "block"
                )}
              >
                تیم
              </h1>
              <div className={classNames(minimize ? "space-y-4" : "space-y-1")}>
                <Link
                  href="/teams"
                  onClick={() => dispatch(closeSidebar())}
                  className={classNames(
                    "w-full py-2 font-medium flex items-center space-x-reverse space-x-2",
                    router.pathname === "/teams"
                      ? "bg-slate-50 drop-shadow-md"
                      : "hover:bg-white/50",
                    minimize
                      ? "justify-center rounded-2xl"
                      : "justify-start px-4 rounded-xl"
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
                  onClick={() => dispatch(closeSidebar())}
                  className={classNames(
                    "w-full py-2 font-medium flex items-center space-x-reverse space-x-2",
                    router.pathname === "/new-team"
                      ? "bg-slate-50 drop-shadow-md"
                      : "hover:bg-white/50",
                    minimize
                      ? "justify-center rounded-2xl"
                      : "justify-start px-4 rounded-xl"
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
      </div>
    </>
  );
}
