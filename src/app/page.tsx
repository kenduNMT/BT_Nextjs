import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-blue-500 font-semibold">Label</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Placeholder"
          className="w-full px-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-3 text-gray-500">
          {/* Biểu tượng FontAwesome */}
          <i className="fa-solid fa-circle-info"></i>
        </span>
      </div>
      <p className="text-sm text-gray-500">Helper Text</p>
    </div>
  );
};


