import { getDictionary } from "../dictionaries";
import { ContactForm } from "@/components/contact/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: { locale: "fa" | "en" };
}) {
  const dict = await getDictionary(params.locale);
  return (
    <div className="bg-slate-50">
      <h1 className="text-center text-xl p-6 font-bold">
        {dict.contact.title}
      </h1>
      <ContactForm dict={dict.contact} />
    </div>
  );
}
