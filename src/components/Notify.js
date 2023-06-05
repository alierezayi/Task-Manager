import React from "react";

import Image from "next/image";

import successIcon from "../../public/images/status-success-svgrepo-com.svg";
import errorIcon from "../../public/images/error-standard-svgrepo-com.svg";

const Notify = ({ toShow, message, type }) => {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      className={classNames(
        "p-4 text-sm  rounded-lg items-center space-x-reverse space-x-3",
        type === "success"
          ? "text-blue-700 bg-blue-50 border border-blue-200"
          : type === "error" &&
              "text-rose-700 border border-rose-200 bg-red-50",
        toShow ? "flex" : "hidden"
      )}
    >
      {type === "success" ? (
        <Image
          src={successIcon}
          width="auto"
          height="auto"
          alt="success"
          className="w-5 h-5"
        />
      ) : (
        type === "error" && (
          <Image
            src={errorIcon}
            width="auto"
            height="auto"
            alt="error"
            className="w-5 h-5"
          />
        )
      )}
      <div>{message}</div>
    </div>
  );
};

export default Notify;
