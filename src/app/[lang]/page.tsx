import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Design } from "@/components/Design";
import { Experience } from "@/components/Experience";
import { FeaturedCase } from "@/components/FeaturedCase";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { getDictionary, hasLocale } from "@/content/dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} lang={lang} />
        <FeaturedCase dict={dict} />
        <Projects dict={dict} />
        <Services dict={dict} />
        <Design dict={dict} />
        <Experience dict={dict} />
      </main>
      <Contact dict={dict} />
    </>
  );
}
