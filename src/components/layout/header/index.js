import Link from "next/link";
import Image from "next/image";

import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";

import NavLinks from "./Navbar";
import SearchBar from "./Searchbar";
import Menubar from "./Menubar";

import logo from "../../../../public/next.svg";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 w-full backdrop-blur-lg bg-white/70 px-4 sm:px-8 lg:px-16 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-5 space-x-reverse lg:space-x-0">
          <button className="block xl:hidden">
            <Bars3Icon className="w-7 text-slate-400" />
          </button>

          <Link href="/">
            <Image src={logo} width="60" height="60" alt="logo" />
          </Link>
        </div>

        <SearchBar />

        <NavLinks />

        <div className="flex items-center space-x-5 space-x-reverse">
          <button className="lg:hidden">
            <MagnifyingGlassIcon className="w-6 text-slate-400 hover:text-indigo-500" />
          </button>

          <Menubar />
        </div>
      </div>
    </header>
  );
};

export default Header;
