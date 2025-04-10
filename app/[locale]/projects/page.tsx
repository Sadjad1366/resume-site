import { getDictionary } from "../dictionaries";
import  ProjectsList  from "@/components/projects/ProjectsList";


export default async function ProjectsPage({
  params,
}: {
  params: { locale: "en" | "fa" };
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-3">
        {dict.projects.title}
      </h1>
      <ProjectsList projects={dict.projects.list} />
    </div>
  );
}
