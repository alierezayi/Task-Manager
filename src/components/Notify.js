import React from "react";

import Image from "next/image";

import successIcon from "../../public/images/status-success-svgrepo-com.svg";
import errorIcon from "../../public/images/error-standard-svgrepo-com.svg";

const Notify = ({ message, type }) => {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div
      className={classNames(
        "p-4 mb-4 text-sm  rounded-lg flex items-center space-x-reverse space-x-3",
        type === "success"
          ? "text-blue-800 bg-blue-50"
          : type === "error" && "text-rose-800 bg-red-50"
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
            alt="success"
            className="w-5 h-5"
          />
        )
      )}
      <div>{message}</div>
    </div>
  );
};

export default Notify;
