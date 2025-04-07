'use client'

import React from "react";
import {motion} from 'framer-motion';

type Props = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<Props> = ({title, description}) => {
  return (
<motion.div
initial={{opacity: 0, y: 20}}
animate={{opacity: 1, y: 0}}
transition={{duration: 1, ease: "easeIn"}}
className="border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition-all"
>
<h2 className="text-lg font-semibold mb-2">{title}</h2>
<p className="text-sm text-gray-600">{description}</p>
</motion.div>
  );
};

export default ProjectCard;
