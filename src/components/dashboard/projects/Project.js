import React from "react";

import {
  EllipsisVerticalIcon,
  EyeIcon,
  PencilSquareIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Project = ({
  project: { _id, Title, Text, Image: image, tags, dateAdded },
}) => {
  return (
    <div className="rounded-xl bg-white drop-shadow-sm pt-4 ">
      <div className="px-4">
        <div className="flex justify-between items-center w-full">
          {/* Title */}
          <div className="font-black text-sm">{Title}</div>
          <Image
            loader={() => image}
            src={image}
            className="w-8 h-8 rounded-full mb-3 bg-gradient-to-br from-blue-400 to-yellow-300"
            width={40}
            height={40}
            alt={Title}
          />{" "}
        </div>

        {/* description */}
        <p className="h-[30px] mt-1 text-sm truncate leading-5 text-gray-500">
          {Text}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>

        <ul className="space-x-reverse space-x-2 flex-nowrap overflow-hidden mt-5 h-[33px]">
          {tags.length
            ? tags.slice(0, 5).map((tag, index) => (
                <li
                  key={index}
                  className="inline-flex py-1 mt-1 items-center px-2 rounded-full border border-blue-300 text-blue-500 bg-blue-50"
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
        className="border-t rounded-b-2xl border-gray-100 hover:bg-gray-50 mt-2 flex items-center justify-end px-4 py-3"
      >
        <div className="flex text-xs text-gray-800 items-center">
          مشاهده جزییات
          <ChevronLeftIcon className="w-4 h-4" />
        </div>
      </Link>
    </div>
  );
};

export default Project;
