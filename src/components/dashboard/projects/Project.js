import Image from "next/image";
import React from "react";

const Project = ({ task: { title, text, imageURL, dateAdded } }) => {
  return (
    <div className="border rounded-lg p-3 space-y-5">
      <div className="w-16 h-16 rounded-full bg-gray-900/60" />
      <div className="font-bold">{title}</div>
      <div>{text}</div>
      <div className="text-end text-xs text-gray-400">{dateAdded}</div>
    </div>
  );
};

export default Project;
