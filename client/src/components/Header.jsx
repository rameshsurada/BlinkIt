import React from "react";
import Search from "./Search";
import logo from "../assets/blinkItLogo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/**logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex justify-center items-center">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="hidden"
              />
            </Link>
          </div>

          {/**Search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/**login and my cart */}
          <div className="">
            {/**user icons display in only mobile version**/}
            <button className="text-neutral-600 lg:hidden">
              <FaRegCircleUser size={26} />
            </button>

            {/**Desktop**/}
            <div className="hidden lg:flex  items-center gap-10">
              <button onClick={redirectToLoginPage} className="text-lg px-2">
                Login
              </button>

              <button className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white">
                {/**add to card icons */}
                <div className="animate-bounce">
                  <BsCart4 size={26} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   const [isMobile] = useMobile();
//   const location = useLocation();
//   const isSearchPage = location.pathname === "/search";

//   return (
//     <header className="h-28 shadow-md sticky top-0 bg-red-400">
//       <div className="container mx-auto flex items-center h-full  px-2 justify-between">
//         {/* logo */}
//         <div className="h-full">
//           <Link to={"/"} className="h-full flex justify-center items-center ">
//             <img
//               src={logo}
//               width={120}
//               height={60}
//               alt="logo"
//               className=" lg:hidden"
//             />
//             <img
//               src={logo}
//               width={170}
//               height={60}
//               alt="logo"
//               className=" hidden lg:block"
//             />
//           </Link>
//         </div>

//         {/* search */}

//         <div className="hidden lg:block">
//           {" "}
//           <Search />{" "}
//         </div>
//         {/* login and cart */}
//         <div className="">
//           <button className="text-neutral-600 lg:hidden">
//             <FaRegCircleUser size={26} />
//           </button>
//           <div className="hidden lg:block"> login and cart</div>
//         </div>
//       </div>
//       <div className="container mx-auto px-2">
//         <Search />
//       </div>
//     </header>
//   );
// };

// export default Header;
