import React from "react";
import { getDictionary } from "../dictionaries";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage({
  params,
}: {
  params: { locale: "en" | "fa" };
}) {
  const dict = await getDictionary(params.locale);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-3">{dict.projects.title}</h1>
      <ul className="space-y-2">
        {dict.projects.list.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </ul>
    </div>
  );
}
