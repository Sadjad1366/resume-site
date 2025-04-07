import { getDictionary } from "../dictionaries";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: { locale: "fa" | "en" };
}) {
  const dict = await getDictionary(params.locale);
  return (
    <>
      <h1 className="text-center text-xl font-bold mt-6 mb-4">
        {dict.contact.title}
      </h1>
      <ContactForm dict={dict.contact} />
    </>
  );
}
