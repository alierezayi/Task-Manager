import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Team = ({ teamData: { _id, name, Description, username } }) => {
  return (
    <div className="flex items-center justify-between rounded-xl p-2 border border-gray-100 hover:border-gray-200 shadow-sm bg-white px-6 py-4 relative h-[86px]">
      <div>
        <div>
          <span className="text-blue-500 font-medium text-lg">{name}</span>
          {/* <span className="text-slate-400 text-sm">{username}</span> */}
        </div>
        <p className="text-sm mt-1 h-5 max-w-[190px] md:max-w-xs truncate">{Description}</p>
      </div>

      <Link
        href={`teams/${_id}`}
        className="group hover:transform text-slate-500 hover:text-blue-500 hover:-translate-x-2 transition my-auto flex items-center"
      >
        <span className="text-xs ml-1">مشاهده جزییات</span>
        <ArrowLeftIcon className="w-4 h-4 group-hover:text-blue-500 text-slate-500" />
      </Link>
    </div>
  );
};

export default Team;
