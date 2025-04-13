import HomeComponent from "@/components/home/HomeComponent";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fa' }>
}) {
  const {locale} = await params;
  const dict = await getDictionary(locale)
  return <HomeComponent dict={dict.home} />;
}
