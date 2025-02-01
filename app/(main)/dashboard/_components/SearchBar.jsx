"use client";

import { users } from "@/app/lib/seed";
import React from "react";

const Searchbar = () => {
  const handleClick = () => {
    const result = users.find((user) => user.name === query.name);
    return result;
  };

  return (
    <div className="w-full flex items-center bg-gray-100 p-2 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search person..."
        className="flex-1 p-2 bg-transparent outline-none text-gray-700"
      />
      <button
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;
