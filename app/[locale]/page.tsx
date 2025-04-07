import { getDictionary } from "./dictionaries";

export default async function Home({params}:{params: {locale: 'en' | 'fa'}}) {
  const {locale} = await params;
  const dict = await getDictionary(locale)
  return (
    <>
      <p>{dict.intro.greeting}</p>
      <p>{dict.intro.description}</p>
    </>
  );
}
