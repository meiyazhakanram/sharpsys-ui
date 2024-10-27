"use client";
import React from "react";
import { useState } from 'react';

const servicesMap = {
    "Enterprise Solution": [
        { id: 101, order:"01", name: "Microsoft Dynamics 365 Finance & Operations", img: "/images/erp.png" },
        { id: 102, order:"02", name: "Microsoft Dynamics 365 Business Central", img: "/images/bpm.png" },
    ],
    "CRM": [
        { id: 201, order:"01", name: "Microsoft Dynamics Customer Engagement", img: "/images/erp.png" },
        { id: 202, order:"02", name: "Salesforce", img: "/images/bpm.png" },
    ],
    "Advanced Analytics": [
        { id: 301, order:"01", name: "Consulting", description: "Expert guidance to drive strategic business growth", img: "/images/consulting.png" },
        { id: 302, order:"02", name: "Data Analytics", img: "/images/data-analytics.png" },
        { id: 303, order:"03", name: "ETL Mitigation", img: "/images/etl.png" },
        { id: 304, order:"04", name: "Data Migration", img: "/images/migration.png" },
        { id: 305, order:"05", name: "Data Warehousing", img: "/images/warehousing.png" },
        { id: 306, order:"06", name: "Machine Learning", img: "/images/ml.png" },
    ],
    "Business Intelligence": [
        { id: 401, order:"01", name: "Power BI", img: "/images/erp.png" },
        { id: 402, order:"02", name: "Tableau", img: "/images/bpm.png" },
    ],
    "Staff Augmentation": [
        { id: 501, order:"01", name: "Resource Capabilities", img: "/images/erp.png" },
        { id: 502, order:"02", name: "Industry Verticals", img: "/images/bpm.png" },
    ],

};

const Services = () => {
    const [activeTab, setActiveTab] = useState("Advanced Analytics");
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
                <h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
                    Our Services
                </h3>
                <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
                    We deliver <span className="textStartGradient">exceptionally in the below</span> services too
                </h4>
                {/* Navbar */}
                <nav className="flex flex-wrap bg-green-50 rounded space-x-4 mb-8 justify-center">
                    {Object.keys(servicesMap).map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded ${activeTab === tab ? "bg-green-700 text-white transition rounded" : "bg-green-50"}`}
                            onClick={() => setActiveTab(tab)} > {tab}
                        </button>
                    ))}
                </nav>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 ">
                    <div className="flex-1 border-t-2">
                        {servicesMap[activeTab].map((item) => (
                            <div
                                key={item.id}
                                className={`p-3 w-96 border-b cursor-pointer hover:bg-gray-200 text-left`}
                                onClick={() => setSelectedItem(item)}
                            >
                                <h4 className="text-xs">{item.order}</h4>
                                <h2 className={`${selectedItem?.id === item.id ? "text-lg text-black" : ""}`}>{item.name}</h2>
                                {item.description && <p className="text-sm">{item.description}</p>}
                            </div>
                        ))}
                    </div>
                    <div className="flex-none gradient-border rounded w-full md:w-96 h-96 md:h-96">
                        {selectedItem ? (
                            <img
                                src={selectedItem.img}
                                alt={selectedItem.name}
                                className="w-full h-full object-cover shadow-lg border-2"
                            />
                        ) : (
                            <p className="text-gray-500">Select an item to view details</p>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;