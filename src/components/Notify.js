import { useEffect, useState } from "react";

import Image from "next/image";

import successIcon from "../../public/images/status-success-svgrepo-com.svg";
import errorIcon from "../../public/images/error-standard-svgrepo-com.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Notify = ({ list, updateList }) => {
  //  join classNames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleCloseItem = (id) => {
    updateList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (list.length > 0) {
      const timeoutIds = list.map((item) => {
        return setTimeout(() => {
          handleCloseItem(item.id);
        }, 2000); // 2 seconds in milliseconds
      });

      return () => {
        timeoutIds.forEach((id) => clearTimeout(id));
      };
    }
  }, [list]);

  return (
    <div className="absolute inset-x-0 top-5 max-h-screen overflow-y-hidden">
      <div className="w-full max-w-sm mx-auto space-y-5">
        {list.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "p-4 text-sm rounded-lg items-center flex justify-between backdrop-blur-md",
              // isShown ? "flex" : "hidden",
              item.success
                ? "text-blue-700 bg-blue-100/70 border border-blue-200"
                : "text-rose-700 border border-rose-200 bg-rose-100/70"
            )}
          >
            <div className="inline-flex items-center">
              {item.success && (
                <Image
                  src={successIcon}
                  width="auto"
                  height="auto"
                  alt="success"
                  className="w-5 h-5"
                />
              )}
              {!item.success && (
                <Image
                  src={errorIcon}
                  width="auto"
                  height="auto"
                  alt="error"
                  className="w-5 h-5"
                />
              )}
              <div className="mr-3">{item.message}</div>
            </div>
            <button onClick={() => handleCloseItem(item.id)}>
              <XMarkIcon
                className={classNames(
                  "w-4 h-4",
                  item.success ? "text-blue-700" : "text-rose-700"
                )}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notify;
