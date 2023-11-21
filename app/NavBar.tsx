"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Complaints", href: "/complaints" },
  ];

  return (
    <nav className="flex items-center h-12 space-x-5 px-5 border-b mb-5">
      <Link href="/">
        <AiFillBug className="w-6 h-6" />
      </Link>
      <ul className="flex space-x-5 ">
        {links.map((item) => (
          <Link
            key={item.href}
            className={classNames({
              "text-zinc-500": item.href !== currentPath,
              "text-black": item.href === currentPath,
              "hover:transition-colors": true,
            })}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
