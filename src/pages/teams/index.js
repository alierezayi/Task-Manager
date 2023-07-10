import Team from "@/components/Team";
import Layout from "@/components/layout";
import { getAllTeams } from "@/features/teamSlice";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import teamIcon from "../../../public/images/invite-svgrepo-com.svg";
import Image from "next/image";
import { IoPersonAddOutline } from "react-icons/io5";
import SearchBar from "@/components/SearchBar";

const Teams = () => {
  const { token } = useSelector((state) => state.login);
  const teamState = useSelector((state) => state.team);
  const { pending, teams, success } = teamState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTeams(token));
  }, []);
  console.log(teamState);

  return (
    <Layout>
      {pending && (
        <div className="absolute inset-0 h-screen flex justify-center items-center backdrop-blur-sm">
          <Spinner />
          <span className="text-blue-500 mr-3">درحال بارگذاری ...</span>
        </div>
      )}

      {teams.length > 0 ? (
        <div className="w-full mx-auto max-w-4xl md:px-10 px-5 py-10">
          <div className="flex items-center justify-between mb-10">
            <SearchBar items={teams} teams>
              <button className="hover:bg-slate-200/80 border p-2 rounded-full transition">
                <MagnifyingGlassIcon className="w-6 h-6 text-blue-600" />
              </button>
            </SearchBar>

            <Link
              href="/new-team"
              className="flex items-center text-white px-5 py-2 rounded-lg text-sm bg-sky-500"
            >
              <IoPersonAddOutline className=" w-4 h-4 text-white ml-1" />
              ایجاد تیم
            </Link>
          </div>
          <div>
            <h1 className="text-xl my-5">تیم ها</h1>
          </div>
          <div className="flex flex-col w-full space-y-4 mx-auto">
            {teams.map((team) => (
              <Team key={team._id} teamData={team} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p>تیمی ای برای نمایش وجود ندارد.</p>
          <Link
            href="/new-project"
            className="text-blue-500 inline-flex items-center mt-1 p-2 rounded-lg hover:bg-slate-200"
          >
            <PlusIcon className="w-6 h-6" />
            ساخت تیم{" "}
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Teams;

const Spinner = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-7 h-7 mr-2 text-blue-300/50 animate-spin fill-blue-500"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};
