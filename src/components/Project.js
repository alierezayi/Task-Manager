import React from "react";

import { TagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import projectImage from "../../public/images/original.jpg";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Project = ({
  project: { _id, Title, Text, Image: image, tags, dateAdded },
}) => {
  return (
    <div className="rounded-2xl bg-white drop-shadow-sm pt-4 border border-slate-100">
      <div className="px-6">
        <div className="flex justify-between items-center w-full">
          {/* Title */}
          <div className="font-black text-sm">{Title}</div>
        </div>

        {/* description */}
        <p className="h-[30px] mt-2 text-sm truncate leading-5 text-gray-500">
          {Text}
        </p>

        <ul className="space-x-reverse space-x-2 flex-nowrap overflow-hidden mt-4 h-[33px]">
          {tags.length
            ? tags.slice(0, 5).map((tag, index) => (
                <li
                  key={index}
                  className="inline-flex py-1 mt-1 items-center px-2 rounded-full text-blue-500 bg-blue-50"
                >
                  <TagIcon className="w-3.5 h-3.5 ml-1" />
                  <span className="text-xs">{tag}</span>
                </li>
              ))
            : null}
        </ul>
      </div>
      <Link
        href={`projects/${_id}`}
        className="border-t rounded-b-xl border-gray-100 hover:bg-gray-50 mt-4 flex items-center justify-between px-3 py-2"
      >
        <Image
          src={projectImage}
          className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-yellow-300"
          width={40}
          height={40}
          alt={Title}
        />{" "}
        <div className="flex text-xs text-gray-800 items-center">
          مشاهده جزییات
          <ChevronLeftIcon className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};

export default Project;
