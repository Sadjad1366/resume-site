"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

type Props = {
  dict: {
    title: string;
    description: string;
    seeProjects: string;
    contactMe: string;
    skills?: string;
  };
};

export default function HomeComponent({ dict }: Props) {
  const locale = usePathname().split("/")[1];

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-slate-50"
    >
      {/* Left - Text Content */}
      <motion.div
        className={`md:w-1/2 space-y-6 text-center ${
          locale === "fa" ? "md:text-right" : "md:text-left"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold">{dict.title}</h1>
        <p className="text-slate-500 text-base font-semibold md:text-2xl max-w-md">
          {dict.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href={`/${locale}/projects`}
            className="px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 text-lg"
          >
            {dict.seeProjects}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="px-6 py-2 border border-slate-400 text-slate-700 rounded-md hover:bg-slate-100 text-lg"
          >
            {dict.contactMe}
          </Link>
        </div>
      </motion.div>

      {/* Right - Image */}
      {/* <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <motion.div
          whileHover={{ scale: 1.03, rotate: 1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl"
        >
          <Image
            src="/assets/images/babi.jpg"
            alt="سجاد"
            fill
            className="absolute object-cover grayscale rounded-full"
            priority
          />
        </motion.div>
      </div> */}
      {/* Right - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 pb-5">
        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full shadow-xl">
          <Image
            src="/assets/images/babi.jpg"
            alt="سجاد"
            fill
            className="absolute object-cover grayscale rounded-full hover:scale-125 transition duration-300"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
