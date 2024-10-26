import Contact from "@/components/Contact";
import SidebarLink from "@/components/Docs/SidebarLink";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function ContactUsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
      <FAQ />
    </>
  );
}
