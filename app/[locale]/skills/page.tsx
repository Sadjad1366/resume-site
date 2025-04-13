import SkillsComponent from "@/components/skills/SkillsComponent";
import { getDictionary } from "../dictionaries";

export default async function SkillPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fa' }>
}) {
  const {locale} = await params;
  const dict = await getDictionary(locale);
  return (
    <div className="bg-slate-50">
      <SkillsComponent dict={dict.skills}  />
    </div>
  );
}
