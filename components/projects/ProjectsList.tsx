"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: {
    title: string;
    description: string;
    link: string;
    techs: string[];
  }[];
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-4 px-4"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          techs={project.techs}
        />
      ))}
    </motion.ul>
  );
};

export default ProjectsList
