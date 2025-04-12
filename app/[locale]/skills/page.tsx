import SkillsComponent from "@/components/skills/SkillsComponent";
import { getDictionary } from "../dictionaries";

export default async function SkillPage({
  params,
}: {
  params: { locale: "fa" | "en" };
}) {
  const dict = await getDictionary(params.locale);
  return (
    <div className="bg-slate-50">
      <SkillsComponent dict={dict.skills}  />
    </div>
  );
}
