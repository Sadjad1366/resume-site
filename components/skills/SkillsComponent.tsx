"use client";

import React from "react";
import { classNames } from "@/utils/classNames";
import { motion } from "framer-motion";

interface SkillGroup {
  title: string;
  items: string[];
}

interface Props {
  dict: {
    title: string;
    categories: SkillGroup[];
  };
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const SkillsPage: React.FC<Props> = ({ dict }) => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {dict.title}
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-1"
      >
        {dict.categories.map((group, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h2 className="text-xl font-semibold text-slate-700 mb-1">
              {group.title}
            </h2>
            <div className="flex flex-wrap gap-2 border p-4 rounded-lg bg-white">
              {group.items.map((item, idx) => (
                <span
                  key={idx}
                  className={classNames(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    "bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsPage;
