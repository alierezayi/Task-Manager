import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  const links = [
    { title: "لینک 1", href: "/" },
    { title: "لینک 2", href: "/link-2" },
    { title: "لینک 3", href: "/link-3" },
    { title: "لینک 4", href: "/link-4" },
  ];

  const { pathname } = useRouter();

  return (
    <div className="hidden lg:flex space-x-reverse">
      <ul className="flex space-x-6 xl:space-x-8 xl:space-x-reverse space-x-reverse">
        {links.map((link) => (
          <li
            key={link.href}
            className="inline-flex justify-center items-center"
          >
            <Link
              href={link.href}
              className={`py-1.5 px-4 rounded-md hover:bg-gray-50 text-gray-500 hover:text-black ${
                pathname == link.href && `text-black`
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
