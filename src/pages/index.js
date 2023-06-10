import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { useSelector } from "react-redux";

import SignIn from "@/components/login/SignIn";
import SignUp from "@/components/login/SingUp";

import { Tab } from "@headlessui/react";

import registerImage from "../../public/images/dl.beatsnoop.com-1683470923.png";

export default function Login() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { isAuthenticated } = useSelector((state) => state.login);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/projects");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>ورود به حساب کاربری</title>
      </Head>

      <div className="w-full min-h-screen lg:flex">
        <div className="lg:w-1/2 min-h-screen flex flex-col justify-center items-center py-4">
          <h1 className="text-xl font-semibold">خوش آمدید</h1>
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
                  <SignUp />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>{" "}
        </div>

        <div className="hidden bg-gray-50 lg:w-1/2 min-h-screen lg:flex lg:items-center lg:justify-center">
          <Image
            src={registerImage}
            width="auto"
            height="auto"
            alt="registerImage"
            className="w-[95%] rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
