import AboutContent from "@/components/about/AboutContent";
import { getDictionary } from "../dictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "en" | "fa" }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <div className="bg-slate-50 h-screen">
      <AboutContent
        title={dict.about.title}
        intro={dict.about.intro}
        details={dict.about.details}
      />
    </div>
  );
}
