"use client";
import React from "react";
import { useState } from 'react';
import { servicesDataMap } from "./serviceDataMap";


const Services = () => {
    const [activeTab, setActiveTab] = useState("Enterprise Solution");
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section>
            <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-6">
                <h3 className="mx-auto mb-4 text-xl text-gray-400  text-center">
                    Our Services
                </h3>
                <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
                    We deliver <span className="textStartGradient">exceptionally</span> <span className="textLastGradient"> in the below</span> services too
                </h4>
                {/* Navbar */}
                <nav className="flex flex-wrap bg-green-50 rounded space-x-4 mb-8 justify-center">
                    {Object.keys(servicesDataMap).map((tab) => (
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
                        {servicesDataMap[activeTab].map((item) => (
                            <div
                                key={item.id}
                                className={`p-3 w-96 border-b cursor-pointer hover:bg-gray-200 text-left`}
                                onClick={() => setSelectedItem(item)}
                            >
                                <h4 className="text-xs">{item.order}</h4>
                                <h2 className={`${selectedItem?.id === item.id ? "text-lg font-bold text-black" : ""}`}>{item.name}</h2>
                                {item.description && selectedItem?.id === item.id && <p className="text-sm">{item.description}</p>}
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