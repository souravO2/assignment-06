"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link
          className={`link no-underline rounded-2xl ${pathname === "/" ? "active bg-[#C2F800]/10 text-[#C2F800]" : ""}`}
          href={"/"}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`link no-underline rounded-2xl ${pathname === "/Plan" ? "active bg-[#C2F800]/10 text-[#C2F800]" : ""}`}
          href={"/Plan"}
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
