"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  intro: string;
  details: string;
};

 const AboutContent: React.FC<Props> = ({ title, intro, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-4"
    >
     <div className="mt-8 border rounded-lg p-4">
     <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-base text-slate-700 mb-1">{intro}</p>
      <div className="bg-slate-200 h-[1px] mb-6"></div>
      <p className="text-sm text-slate-600 leading-relaxed">{details}</p>
     </div>
    </motion.div>
  );
};

export default AboutContent
