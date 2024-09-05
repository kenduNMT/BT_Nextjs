"use client";
import React, { useState } from 'react';
import './bt.css';


export default function page() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

const options = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];

const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
        setSelectedOptions([...selectedOptions, option]);
    }
};

const handleClear = () => {
    setSelectedOptions([]);
};
    return (
        <div className="p-4 border border-blue-400 rounded-lg w-64">
            <label className="text-blue-500 font-semibold mb-2 block">Input Label</label>
            <div className="relative">
                <div className="border border-blue-400 rounded-lg p-2 flex items-center">
                    <span className="mr-2 text-gray-500">
                        <i className="fa-solid fa-clock"></i>
                    </span>
                    <span className="text-gray-700">|</span>
                    <span className="ml-auto text-gray-500">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                </div>
                <div className="border border-blue-400 mt-2 rounded-lg max-h-40 overflow-auto">
                    {options.map((option) => (
                        <label key={option} className="flex items-center p-2">
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleSelect(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handleClear}
                    className="border border-blue-400 text-blue-400 px-4 py-2 rounded-lg"
                >
                    Clear
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Apply</button>
            </div>
        </div>
    )
}
