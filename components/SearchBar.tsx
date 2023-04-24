"use client";

import { FormEvent } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <form
      className=" border-2 border-[rgba(139, 218, 255, 0.24)] grid grid-cols-search"
      style={{
        background:
          "linear-gradient(90.91deg, rgba(55, 171, 225, 0.07) 16.09%, rgba(55, 171, 225, 0.19) 115.87%)",
      }}
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <div>
        <input
          type="text"
          className="font-redhat py-[10px] px-5 placeholder:text-[#373737] border-r border-white text-[#373737] w-full h-full bg-transparent text-lg outline-none"
          placeholder="Gözlemek"
        />
      </div>
      <button className="flex items-center justify-center px-4 py-2">
        <FiSearch
          height={20}
          width={20}
          color="#373737"
          className="block w-[22px] h-[22px]"
        />
      </button>
    </form>
  );
};

export default SearchBar;
