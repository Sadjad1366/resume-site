"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Props } from "@/utils/types";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC<Props> = ({ labels }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];
  const oppositeLocale = currentLocale === "fa" ? "en" : "fa";

  const switchLocale = () => {
    const newPath = "/" + [oppositeLocale, ...pathSegments.slice(2)].join("/");
    router.push(newPath);
  };

  return (
    <nav className="h-16 flex items-center justify-between px-6 md:px-10 text-slate-700 shadow">
      {/* زبان */}
      <button
        onClick={switchLocale}
        className="text-lg font-semibold hover:underline max-w-24 hover:cursor-pointer"
      >
        {currentLocale === "fa" ? "English" : "فارسی"}
      </button>

      {/* Desktop Menu */}
      <div className="hidden w-full md:flex justify-center gap-x-8 text-xl font-semibold">
        <Link className="text-slate-600 hover:underline hover:scale-110 transition duration-300" href={`/${currentLocale}/`}>{labels.home}</Link>
        <Link className="text-slate-600 hover:underline hover:scale-110 transition duration-300" href={`/${currentLocale}/projects`}>{labels.projects}</Link>
        <Link className="text-slate-600 hover:underline hover:scale-110 transition duration-300" href={`/${currentLocale}/skills`}>{labels.skills}</Link>
        <Link className="text-slate-600 hover:underline hover:scale-110 transition duration-300" href={`/${currentLocale}/about`}>{labels.about}</Link>
        <Link className="text-slate-600 hover:underline hover:scale-110 transition duration-300" href={`/${currentLocale}/contact`}>{labels.contact}</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-xl font-semibold md:hidden z-50">
          <Link href={`/${currentLocale}/`} onClick={() => setIsOpen(false)}>
            {labels.home}
          </Link>
          <Link
            href={`/${currentLocale}/projects`}
            onClick={() => setIsOpen(false)}
          >
            {labels.projects}
          </Link>
          <Link
            href={`/${currentLocale}/skills`}
            onClick={() => setIsOpen(false)}
          >
            {labels.skills}
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            onClick={() => setIsOpen(false)}
          >
            {labels.about}
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            onClick={() => setIsOpen(false)}
          >
            {labels.contact}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
