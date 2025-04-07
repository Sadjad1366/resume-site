import React from "react";
import { getDictionary } from "../dictionaries";

export default async function AboutPage({
  params,
}: {
  params: { locale: "en" | "fa" };
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  return (
    <div>
      <h1>{dict.about.title}</h1>
      <p>{dict.about.bio}</p>
    </div>
  );
}
