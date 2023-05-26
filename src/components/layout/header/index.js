import { Fragment, useState, useEffect } from "react";

import Image from "next/image";
import logo from "../../../../public/next.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/userSlice";

import { Disclosure, Menu, Transition } from "@headlessui/react";

import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { logoutUser } from "@/features/authSlice";
import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  console.log(token);
  console.log(user);

  useEffect(() => {
    dispatch(fetchUser(token));
  }, []);

  const navigation = [
    { name: "صفحه اصلی", href: "#", current: false },
    { name: "داشبورد", href: "#", current: true },
    { name: "درباره ما", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "پروفایل", href: "/profile", disable: false },
    { name: "تنظیمات", href: "", disable: true },
    {
      name: "خروج حساب کاربری",
      func: () => dispatch(logoutUser()),
      disable: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white border-b border-b-slate-100">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-8 w-8"
                      width="32"
                      height="32"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-black"
                              : "text-gray-400 hover:text-black",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center">
                    <div>
                      <span>{user.UserName}</span>
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative mr-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {user.profile_image ? (
                            <Image
                              src={user.profile_image}
                              className="h-8 w-8 rounded-full"
                              width="auto"
                              height="auto"
                              alt="profile"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500" />
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
                                    <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />
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
                                      "block px-3 py-2 text-sm text-gray-700 rounded-md",
                                      item.disable
                                        ? " bg-transparent text-gray-300 cursor-not-allowed"
                                        : ""
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            )
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <div className="-ml-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <EllipsisVerticalIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-black border-r-2 border-black"
                        : "text-gray-400 hover:text-black",
                      "block px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-300 pb-3 pt-4">
                <div className="flex justify-start items-center px-5">
                  <div className="ml-5">
                    {user.profile_image ? (
                      <Image
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
                        as="a"
                        onClick={item.func}
                        className="rounded-md px-3 py-2 text-base font-medium flex text-red-400 hover:bg-gray-700 hover:text-white"
                      >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 ml-1" />
                        <span>{item.name}</span>{" "}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
