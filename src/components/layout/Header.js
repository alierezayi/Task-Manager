import { Fragment, useState, useEffect } from "react";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/userSlice";

import { Disclosure, Menu, Transition } from "@headlessui/react";

import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  InboxArrowDownIcon,
  XMarkIcon,
  Bars3Icon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

import { logoutUser } from "@/features/loginSlice";
import { openSidebar } from "@/features/sidebarSlice";

import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(fetchUser(token));
  }, []);

  const userNavigation = [
    {
      name: "پروفایل",
      href: "/profile",
      icon: <UserIcon className="w-5 h-5 ml-1" />,
    },
    {
      name: "دعوت نامه ها",
      href: "/invites",
      icon: <InboxArrowDownIcon className="w-5 h-5 ml-1" />,
    },
    {
      name: "خروج",
      func: () => dispatch(logoutUser()),
      icon: <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-white/80 backdrop-blur border-b border-b-slate-100 sticky top-0 z-10"
      >
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between md:justify-end">
                <div
                  className="block md:hidden"
                  onClick={() => dispatch(openSidebar())}
                >
                  <Bars3Icon className="block w-9 h-9" />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center">
                    <div>
                      <span>{user.UserName}</span>
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative mr-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {user.profile_image ? (
                            <img
                              src={user.profile_image}
                              className="h-9 w-9 rounded-full"
                              width="auto"
                              height="auto"
                              alt="profile"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
                          )}
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
                        <Menu.Items className="absolute left-0 z-10 mt-2 px-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="flex flex-col items-center justify-center my-3 space-y-1">
                            <div>
                              {user.profile_image ? (
                                <img
                                  src={user.profile_image}
                                  className="h-14 w-14 rounded-full"
                                  width="auto"
                                  height="auto"
                                  alt="profile"
                                />
                              ) : (
                                <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
                              )}
                            </div>
                            <span>{user.FullName}</span>
                            <span className="text-sm overflow-hidden text-gray-600">
                              {user.Email}
                            </span>
                          </div>
                          <div className="space-y-1 mb-2">
                            {userNavigation.map((item) =>
                              item.func ? (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <button
                                      onClick={item.func}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "px-3 py-2 text-sm text-red-500 rounded-md flex items-center w-full"
                                      )}
                                    >
                                      {item.icon}
                                      <span>{item.name}</span>
                                    </button>
                                  )}
                                </Menu.Item>
                              ) : (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "px-3 py-2 text-sm text-gray-700 rounded-md flex"
                                      )}
                                    >
                                      {item.icon}
                                      <span>{item.name}</span>
                                    </Link>
                                  )}
                                </Menu.Item>
                              )
                            )}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <div className="-ml-2 flex items-center md:hidden">
                <span>{user.UserName}</span>

                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : user.profile_image ? (
                      <img
                        src={user.profile_image}
                        className="h-8 w-8 rounded-full"
                        width="auto"
                        height="auto"
                        alt="profile"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="border-t border-gray-300 pb-3 pt-4">
                <div className="flex justify-start items-center px-5">
                  <div className="ml-5">
                    {user.profile_image ? (
                      <img
                        src={user.profile_image}
                        className="h-10 w-10 rounded-full"
                        width="40"
                        height="40"
                        alt="profile"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
                    )}
                  </div>
                  <div className="ml-3 space-y-1">
                    <div className="text-base font-medium leading-none">
                      {user.FullName}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.Email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) =>
                    item.func ? (
                      <Disclosure.Button
                        key={item.name}
                        as="button"
                        onClick={item.func}
                        className="rounded-md px-3 py-2 text-base font-medium flex text-red-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.icon}
                        <span>{item.name}</span>{" "}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className="flex rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
