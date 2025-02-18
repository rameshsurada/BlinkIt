import React from "react";
import Search from "./Search";
import logo from "../assets/blinkItLogo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-20 shadow-md sticky top-0">
      <div className="container mx-auto flex items-center h-full  px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <Link to={"/"} className="h-full flex justify-center items-center ">
            <img
              src={logo}
              width={120}
              height={60}
              alt="logo"
              className=" lg:hidden"
            />
            <img
              src={logo}
              width={170}
              height={60}
              alt="logo"
              className=" hidden lg:block"
            />
          </Link>
        </div>

        {/* search */}

        <div>
          {" "}
          <Search />{" "}
        </div>
        {/* login and cart */}
        <div> login and cart</div>
      </div>
    </header>
  );
};

export default Header;
