"use client";

import { useEffect, useState } from "react";

export type TabItem = {
    label: string;
    value: string;
};

interface ToggleTabsProps {
    tabs: TabItem[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export default function ToggleTabs({
    tabs,
    defaultValue,
    onChange,
}: ToggleTabsProps) {
    const [active, setActive] = useState<string>(
        defaultValue || tabs[0]?.value
    );

    useEffect(() => {
        if (onChange) {
            onChange(active);
        }
    }, [active]);

    return (
        <div className="relative w-[240px] sm:w-[300px] md:w-[360px] h-[40px] sm:h-[44px] md:h-[48px] bg-[#cfe3ee] rounded-full p-1 flex items-center">

            {/* Sliding Background */}
            <div
                className={`absolute top-1 h-[32px] sm:h-[36px] md:h-[40px] w-[49%] rounded-full
        bg-gradient-to-r from-[#1fa2d6] to-[#1c8ec6]
        shadow-md transition-all duration-300 ease-in-out`}
                style={{
                    transform: `translateX(${tabs.findIndex(t => t.value === active) * 100}%)`
                }}
            />

            {/* Buttons */}
            <div className="relative z-10 flex w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActive(tab.value)}
                        className={`w-1/2 transition-colors cursor-pointer duration-300 ${active === tab.value ? "text-white" : "text-[#4F4F4F]"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
