import { Fragment, useState } from "react";

import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Projects from "../components/dashboard/projects";
import Teams from "../components/dashboard/teams";

export default function Example() {
  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "صفحه اصلی", href: "#", current: false },
    { name: "داشبورد", href: "#", current: true },
    { name: "درباره ما", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "پروفایل", href: "#" },
    { name: "تنظیمات", href: "#" },
    { name: "خروج حساب کاربری", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-b-slate-100">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
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
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative mr-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
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
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-3 py-2 text-sm text-gray-700 rounded-md"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-ml-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
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
                  <div className="flex justify-end items-center px-5">
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="h-screen bg-gray-100">
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 md:grid xl:grid-cols-5 md:grid-cols-4 h-full overflow-auto">
              <Tab.Group vertical as={Fragment}>
                <div className="col-span-1 bg-white rounded-r-lg">
                  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                      داشبورد
                    </h1>
                  </div>
                  <div className="w-full max-w-md px-2 sm:px-0">
                    <Tab.List className="flex flex-col space-x-1 rounded-xl py-1 px-2 h-full space-y-2">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-3 text-lg font-medium leading-5",
                            selected
                              ? "bg-blue-400 text-white shadow-sm"
                              : "text-gray-600 hover:text-black hover:bg-gray-50"
                          )
                        }
                      >
                        پروژه ها
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-3 text-lg font-medium leading-5",
                            selected
                              ? "bg-blue-400 text-white shadow-sm"
                              : "text-gray-600 hover:text-black hover:bg-gray-50"
                          )
                        }
                      >
                        تیم ها
                      </Tab>
                    </Tab.List>
                  </div>
                </div>
                <div className="md:col-span-3 xl:col-span-4 h-full">
                  <Tab.Panels className="mt-2">
                    <Tab.Panel>
                      <Projects />
                    </Tab.Panel>
                    <Tab.Panel
                      className={classNames("rounded-xl bg-white p-3")}
                    >
                      <Teams />
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
