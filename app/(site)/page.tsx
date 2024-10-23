import { Metadata } from "next";
import Dashboard from "@/components/Dashboard";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Sharpsys - Elevate your Business Productivity",
  description: "This is the home for your entire business solutions",
};

export default function Home() {
  return (
    <main>
      <Dashboard />
       <Brands />
      {/*<Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Blog /> */}
      <Contact />
    </main>
  );
}
