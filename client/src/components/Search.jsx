import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSearchPage, setIsSearchPage] = useState(false);
  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  console.log("search ", isSearchPage);
  const redirectToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="w-full min-500-w-[300px] lg:min-w-[420px] h-12 rounded-lg border overflow-hidden  flex tems-center text-neutral-500">
      {" "}
      <button className="flex justify-center items-center h-full p-3">
        <IoSearch size={22} />
      </button>
      <div onClick={redirectToSearchPage}>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Search "milk"',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Search "bread" ',
            1000,
            'Search "butter" ',
            1000,
            'Search "chocolate',
            1000,
            'Search "rice" ',
            1000,
            'Search "eggs" ',
            1000,
            'Search "paneer',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Search;
