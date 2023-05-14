import { Fragment, useState } from "react";

import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Projects from "../components/dashboard/projects";
import Teams from "../components/dashboard/teams";
import Layout from "@/components/layout";

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
    <Layout>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 md:grid xl:grid-cols-5 md:grid-cols-4 h-full overflow-auto">
        <Tab.Group vertical as={Fragment}>
          <div className="col-span-1 bg-slate-900 rounded-r-lg">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white/95">
                داشبورد
              </h1>
            </div>
            <div className="w-full max-w-md px-2 sm:px-0">
              <Tab.List className="flex flex-col space-x-1 rounded-xl py-1 px-2 h-full space-y-2">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 font-medium leading-5",
                      selected
                        ? "bg-slate-200 text-black shadow-sm"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    )
                  }
                >
                  پروژه ها
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 font-medium leading-5",
                      selected
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-black hover:bg-white"
                    )
                  }
                >
                  تیم ها
                </Tab>
              </Tab.List>
            </div>
          </div>
          <div className="md:col-span-3 xl:col-span-4 h-full rounded-l-xl bg-gray-100">
            <Tab.Panels>
              <Tab.Panel>
                <Projects />
              </Tab.Panel>
              <Tab.Panel>
                <Teams />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </Layout>
  );
}
