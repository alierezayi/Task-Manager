import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Children, Fragment, useEffect, useState } from "react";
import projectImage from "../../public/images/original.jpg";

const SearchBar = ({ items, children, projects, teams, className }) => {
  const [resultSearch, setResultSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  // const [filteredItems, setFilteredItems] = useState([]);

  // useEffect(() => {
  //   if (projects) {
  //     const filteredProjects = items.filter(
  //       (item) =>
  //         item.Title.toLowerCase().includes(resultSearch.toLowerCase()) ||
  //         item.Text.toLowerCase().includes(resultSearch.toLowerCase())
  //     );

  //     setFilteredItems(filteredProjects);
  //   }

  //   if (teams) {
  //     const filteredTeams = items.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(resultSearch.toLowerCase()) ||
  //         item.Description.toLowerCase().includes(resultSearch.toLowerCase())
  //     );

  //     setFilteredItems(filteredTeams);
  //   }
  // }, [projects, teams]);
  const filteredItems = items.filter((item) => {
    if (projects) {
      item.Title.toLowerCase().includes(resultSearch.toLowerCase()) ||
        item.Text.toLowerCase().includes(resultSearch.toLowerCase());
    }

    if (teams) {
      item.name.toLowerCase().includes(resultSearch.toLowerCase()) ||
        item.Description.toLowerCase().includes(resultSearch.toLowerCase());
    }
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button className={className} onClick={openModal}>
        {children}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-400/40 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white rounded-lg flex flex-col divide-y max-h-[600px] w-[95%] md:w-[700px]">
                  <div className="flex space-x-3 items-center p-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-blue-500 ml-3" />
                    <input
                      type="text"
                      className=" bg-transparent placeholder:text-slate-400 outline-none w-full"
                      placeholder="جست و جو کنید . . ."
                      value={resultSearch}
                      onChange={(e) => setResultSearch(e.target.value)}
                    />
                  </div>
                  <div
                    className={`min-h-[200px] relative overflow-y-scroll ${
                      !resultSearch && `flex items-center justify-center`
                    }
                    ${
                      !filteredItems.length &&
                      resultSearch &&
                      `flex items-center justify-center`
                    }`}
                  >
                    {!resultSearch ? (
                      <p className="text-slate-600">
                        جست و جوی اخیری وجود ندارد
                      </p>
                    ) : filteredItems.length && resultSearch ? (
                      <div className="py-4 px-6">
                        <div className="grid gap-8">
                          {projects
                            ? filteredItems.map((project) => (
                                <Link
                                  key={project._id}
                                  href={`/projects/${project._id}`}
                                  className="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                                  onClick={closeModal}
                                >
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-white sm:h-14 sm:w-14">
                                    <Image
                                      src={projectImage}
                                      width={100}
                                      height={100}
                                      alt="product"
                                      className="rounded-md border border-slate-100"
                                    />
                                  </div>
                                  <div className="mr-4">
                                    <h2 className="text-sm text-start font-semibold text-gray-900">
                                      {project.Title}
                                    </h2>
                                    <p className="text-sm text-gray-500 truncate">
                                      {project.Text}
                                    </p>
                                  </div>
                                </Link>
                              ))
                            : filteredItems.map((team) => (
                                <Link
                                  key={team._id}
                                  href={`/projects/${team._id}`}
                                  className="-m-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                                  onClick={closeModal}
                                >
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-white sm:h-14 sm:w-14">
                                    <Image
                                      src={projectImage}
                                      width={100}
                                      height={100}
                                      alt="product"
                                      className="rounded-md border border-slate-100"
                                    />
                                  </div>
                                  <div className="mr-4">
                                    <h2 className="text-sm text-start font-semibold text-gray-900">
                                      {team.name}
                                    </h2>
                                    <p className="text-sm text-gray-500 truncate">
                                      {team.Description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                        </div>
                      </div>
                    ) : (
                      resultSearch &&
                      !filteredItems.length && (
                        <p className="text-slate-600">هیچ نتیجه ای یافت نشد</p>
                      )
                    )}
                  </div>
                  <div className="p-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchBar;
