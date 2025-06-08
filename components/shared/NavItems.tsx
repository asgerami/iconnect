"use client"
import { headerLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();


  return (
    <ul className="md:flex-between px-9 flex w-full flex-col items-start gap-6 md:flex-row">
      {headerLinks.map((linkItem) => {
        const isActive = pathname === linkItem.route;

        return (
          <li key={linkItem.route}
          className={`${
            isActive && 'text-primary-500'  
          } flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={linkItem.route}>{linkItem.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavItems;
