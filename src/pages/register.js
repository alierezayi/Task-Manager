import Head from "next/head";
import Image from "next/image";

import RegisterTab from "@/components/register/RegisterTab";

import registerImage from "../../public/images/dl.beatsnoop.com-1683470923.png";

const register = () => {
  return (
    <>
      <Head>
        <title>ورود به حساب کاربری</title>
      </Head>

      <div className="w-full min-h-screen lg:flex">
        <div className="lg:w-1/2 min-h-screen flex flex-col justify-center items-center py-4">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">خوش آمدید</h1>

            <h2 className="text-gray-500 text-sm">
              خوش آمدید، لطفا مشخصات خود را وارد کنید
            </h2>
          </div>

          <RegisterTab />
        </div>

        <div className="hidden bg-gray-50 lg:w-1/2 min-h-screen lg:flex items-center justify-center">
          <Image
            src={registerImage}
            width="auto"
            height="auto"
            alt="registerImage"
            className="w-[95%] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default register;
