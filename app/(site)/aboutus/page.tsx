import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function AboutUsPage() {
  return (
    <>

      <div className="min-h-screen flex flex-col items-center bg-gray-100 py-16 px-4">
        <section>
          <div className="text-center max-w-2xl my-8">
            <h1 className="text-3xl font-bold text-gray-800">Meet the only platform for your Dynamic Needs</h1>
            <p className="text-gray-600 mt-4">
              Make data-driven decisions to streamline daily operations, drive efficiencies, manage complexity, and grow.
            </p>
          </div>


          {/* Image Section */}
          <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg mb-8">
          <img
            src="/path/to/your-image.jpg"
            alt="Team working"
            className="w-full h-auto object-cover"
          />
        </div>

          <div className="grid grid-cols-3 gap-4 max-w-4xl text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">65%</h3>
              <p className="text-gray-600 mt-2">Text to be added</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">24 Hrs</h3>
              <p className="text-gray-600 mt-2">Text to be added.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-600 mt-2">Text to be added.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
