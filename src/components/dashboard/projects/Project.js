import React from "react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const Project = ({ project: { title, text, imageURL, dateAdded } }) => {
  return (
    <div className="rounded-lg bg-white py-4 px-3 space-y-5">
      <div className="flex justify-between w-full">
        <div className="inline-flex items-center space-x-7 space-x-reverse">
          {/* image */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-yellow-300" />

          {/* title */}
          <div className="font-bold">{title}</div>
        </div>

        {/* more options */}
        <button className="p-1 w-[30px] h-[30px] hover:bg-gray-50 rounded-full">
          <EllipsisVerticalIcon className=" mr-auto" />
        </button>
      </div>

      {/* description */}
      <p className="max-width-[50px] text-sm overflow-hidden leading-5">
        {text}
      </p>

      {/* date */}
      <div className="text-xs text-end text-gray-400">{dateAdded}</div>
    </div>
  );
};

export default Project;
