import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="w-full bg-red-200 min-500-w-[300px] lg:min-w-[420px] h-12 rounded-lg ">
      Search{" "}
      <button>
        <IoSearch />{" "}
      </button>
    </div>
  );
};

export default Search;
