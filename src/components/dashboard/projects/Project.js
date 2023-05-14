import Image from "next/image";
import React from "react";

const Project = ({ task: { title, text, imageURL, dateAdded } }) => {
  return (
    <div className="rounded-xl shadow bg-white p-5 space-y-5">
      <div className="flex items-center space-x-7 space-x-reverse">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-yellow-300" />
        <div className="font-bold">{title}</div>
      </div>
      <p className="max-width-[50px] text-sm overflow-hidden px-5">{text}</p>
      <div className="text-xs text-end text-gray-400">{dateAdded}</div>
    </div>
  );
};

export default Project;
