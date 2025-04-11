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
  };
};

export default function HomeComponent({ dict }: Props) {
  const locale = usePathname().split("/")[1];

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-white"
    >
      {/* Left - Text Content */}
      <motion.div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {dict.title}
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
          {dict.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href={`/${locale}/projects`}
            className="px-6 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 text-sm"
          >
            {dict.seeProjects}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="px-6 py-2 border border-slate-400 text-slate-700 rounded-md hover:bg-slate-100 text-sm"
          >
            {dict.contactMe}
          </Link>
        </div>
      </motion.div>

      {/* Right - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
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
            src="https://via.placeholder.com/300x300"
            alt="سجاد"
            fill
            className="absolute object-cover grayscale"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
