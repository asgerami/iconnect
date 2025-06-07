"use client"
import { headerLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();


  return (
    <ul className="md:justify-between flex w-full flex-col items-center gap-5 md:flex-row">
      {headerLinks.map((linkItem) => {
        const isActive = pathname === linkItem.route;

        return (
          <li key={linkItem.route}
          className={`${
            isActive && 'text-purple-500'  
          } flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={linkItem.route}>{linkItem.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
