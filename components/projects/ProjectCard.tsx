"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import { classNames } from "@/utils/classNames";

type Props = {
  title: string;
  description: string;
  link: string;
  techs: string[];
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ProjectCard: React.FC<Props> = ({ title, description, link, techs }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition-all"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex gap-x-1 py-1">
        <FiLink className="text-blue-500" />
        <Link href={link} className="text-sm text-blue-500">
          {link}
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {techs.map((tech, index) => (
          <span
            key={index}
            className={classNames(
              "px-2 py-1 rounded-full text-xs font-medium",
              "bg-slate-100 text-slate-600 hover:bg-slate-300 transition duration-700 hover:-translate-y-1"
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
