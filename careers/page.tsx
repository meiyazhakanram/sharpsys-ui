import { Metadata } from "next";
import CareerData from "./careerMapData"


export const metadata: Metadata = {
    title: "Sharpsys",
    description: "Sharpsys - Elevate your Business Productivity"
};

export default function CareersPage() {
    return (
        <>
            <section className="pb-10 pt-24 md:pb-20 md:pt-28 lg:pb-14 lg:pt-32">
                <div className="container mx-auto">
                    <h2 className="mx-auto mb-2 text-3xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                        Be a part of our proficient team
                    </h2>
                </div>
            </section>


            <section className="bg-white py-1 mb-8">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-32.5">
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">50+</h3>
                            <p className="text-lg lg:text-para2">Employees</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">10+</h3>
                            <p className="text-lg lg:text-para2">locations</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">15+</h3>
                            <p className="text-lg lg:text-para2">Finished Projects</p></div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">100+</h3>
                            <p className="text-lg lg:text-para2">Client across world</p>
                        </div>
                        <div className="animate_top text-center">
                            <h3 className="text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">11+</h3>
                            <p className="text-lg lg:text-para2">Domain Expert</p>
                        </div>
                    </div>
                </div>
            </section>

            {CareerData.map((c) => (
                <section className="bg-white mb-4">
                    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-3">
                        <h5 className="mb-1 text-xl font-bold tracking-tight text-black dark:text-black">{c.title}</h5>


                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm border text-left rtl:text-right">
                                <thead className="text-xs">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            {c.heading.positiontitle}
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            {c.heading.locationtitle}
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            {c.heading.noofopeningstitle}
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            {c.heading.jobtypetitle}
                                        </th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-black dark:text-black">
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                            {c.job.position}
                                        </th>
                                        <td className="px-6 py-4">
                                            {c.job.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            {c.job.noofopenings}
                                        </td>
                                        <td className="px-6 py-4">
                                            {c.job.jobtype}
                                        </td>
                                        <td className="px-6 py-4"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            ))}
        </>
    );
}
