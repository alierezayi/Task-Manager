import { useEffect, useState } from "react";

import Image from "next/image";

import successIcon from "../../public/images/status-success-svgrepo-com.svg";
import errorIcon from "../../public/images/error-standard-svgrepo-com.svg";

const Notify = ({ options }) => {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  console.log(options);

  // const [isShown, setIsShow] = useState(true);
  // console.log(isShown);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsShow(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <div
        className={classNames(
          "p-4 text-sm  rounded-lg items-center space-x-reverse space-x-3 mt-8 flex",
          // isShown ? "flex" : "hidden",
          options.type === "success" &&
            "text-blue-700 bg-blue-50 border border-blue-200",
          options.type === "error" &&
            "text-rose-700 border border-rose-200 bg-red-50"
        )}
      >
        {options.type === "success" && (
          <Image
            src={successIcon}
            width="auto"
            height="auto"
            alt="success"
            className="w-5 h-5"
          />
        )}
        {options.type === "error" && (
          <Image
            src={errorIcon}
            width="auto"
            height="auto"
            alt="error"
            className="w-5 h-5"
          />
        )}
        <div>{options.description}</div>
      </div>
    </>
  );
};

export default Notify;
