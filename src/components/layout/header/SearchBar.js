import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <>
      <div className="group hidden lg:flex justify-start items-center space-x-4 space-x-reverse px-4 h-10 w-1/4 rounded-lg border hover:border-slate-100 cursor-pointer hover:bg-slate-50 border-slate-200">
        <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 group-hover:text-indigo-500" />

        <span className="text-slate-400 group-hover:text-indigo-500">
          جستجو . . .
        </span>
      </div>
    </>
  );
};

export default Searchbar;
