import TimeAgo from "@/components/TimeAgo";
import Layout from "@/components/layout";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const TeamDetails = () => {
  const { projects } = useSelector((state) => state.project);
  const { teams } = useSelector((state) => state.team);
  console.log(teams);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  console.log(projects);
  const team = teams.find((team) => team._id === id);
  console.log(team);
  return (
    <Layout>
      <div className="w-full max-w-5xl my-10 mx-auto bg-white rounded-2xl drop-shadow-sm">
        {/* more options */}
        <div className="text-right">
          <Menu
            as="div"
            className="absolute left-5 top-5 inline-block text-left"
          >
            <div>
              <Menu.Button className="inline-flex p-1 w-[30px] h-[30px] hover:bg-gray-50 rounded-full justify-center focus:outline-none">
                <EllipsisVerticalIcon className="w-6 h-6" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-2  w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-blue-500" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <PencilIcon className="w-5 h-5 ml-2" />
                        ویرایش
                      </button>
                    )}
                  </Menu.Item>
                </div>

                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-rose-500" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <TrashIcon className="w-5 h-5 ml-2" />
                        حذف
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="pt-10 px-10 space-y-10">
          <h1 className="text-xl text-blue-500">{team.name}</h1>

          <div className="space-y-1">
            <div className="">ID تیم</div>
            <div className="text-gray-500">{team.username}</div>
          </div>

          <div className="space-y-1">
            <div className="">توضیحات</div>
            <div className="text-gray-500">{team.Description}</div>
          </div>

          <div className="space-y-1">
            <div className="">اعضاء تیم</div>
            <div className="text-sm flex space-x-2 space-x-reverse overflow-x-auto">
              <span className="py-2 px-4 rounded-md border">_AliRezayi</span>
              <span className="py-2 px-4 rounded-md border">RezaEsi</span>
              <span className="py-2 px-4 rounded-md border">Mostafa_11</span>
              <span className="py-2 px-4 rounded-md border">Babayi_Sh</span>
              <span className="py-2 px-4 rounded-md border">khoshi</span>
            </div>
          </div>

          <div>
            <div className="w-full flex justify-between border-t pb-5 pt-4 items-center space-y-1 text-xs  px-2 text-gray-500">
              <div className="flex items-center">
                <div className="flex items-center ml-1">
                  ایجاد کننده: _Alirezayi_
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center ml-1">ایجاد در</div>
                <TimeAgo dateString={team.createdAt} />
              </div>

              <div className="flex items-center">
                <div className="flex items-center ml-1">بروزرسانی در</div>
                {team.createdAt === team.updatedAt ? (
                  "- - / - -"
                ) : (
                  <TimeAgo dateString={team.updatedAt} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamDetails;
