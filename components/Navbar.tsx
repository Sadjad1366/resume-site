"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { Props } from "@/utils/types";

const Navbar: React.FC<Props> = ({ labels }) => {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/"); // array of languages ["",'en','projects']
  const currentLocale = pathSegments[1]; // 'fa' یا 'en'
  const oppositeLocale = currentLocale === "fa" ? "en" : "fa";

  const switchLocale = () => {
    const newPath = "/" + [oppositeLocale, ...pathSegments.slice(2)].join("/"); // / + oppLang + restOfUrl
    router.push(newPath);
  };

  return (
    <main
      className={classNames(
        "h-12 flex justify-between px-4 md:px-10 items-center",
        "text-lg font-semibold font-medium text-slate-700"
      )}
    >
      <div className="flex gap-x-8 justify-center w-full">
        <Link href={`/${currentLocale}/projects`}>{labels.projects}</Link>
        <Link href={`/${currentLocale}/about`}>{labels.about}</Link>
        <Link href={`/${currentLocale}/contact`}>{labels.contact}</Link>
      </div>

      <div className="text-right">
        <button onClick={switchLocale}>
          {currentLocale === "fa" ? "English" : "فارسی"}
        </button>
      </div>
    </main>
  );
};

export default Navbar;
