import { Tab } from "@headlessui/react";

import SignIn from "./SignIn";
import SingUp from "./SingUp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Container() {
  return (
    <div className=" w-full max-w-md px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-2xl bg-slate-200/50 py-1 px-0.5 w-2/3 mx-auto">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-3 text-sm font-medium leading-5",
                selected
                  ? "bg-white font-bold shadow text-black"
                  : "hover:text-black text-gray-400"
              )
            }
          >
            ورود
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-3 text-sm font-medium leading-5",
                selected
                  ? "bg-white font-bold shadow text-black"
                  : "hover:text-black text-gray-400"
              )
            }
          >
            ثبت نام
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <SignIn />
          </Tab.Panel>

          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <SingUp />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
