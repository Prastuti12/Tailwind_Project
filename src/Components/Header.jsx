import React from "react";
import navLogo from "../Images/navLogo.png";
import avtar from "../Images/Avatar.png";
import profile from "../Images/profile.png";
import search from "../Images/search.png";
import logOut from "../Images/logOut.png";
import rename from "../Images/rename.svg";
import arrow from "../Images/arrow.svg"

const Header = () => {
  return (
    <div>
      <nav className="bg-zinc-900 md:px-12 py-2 flex justify-between">
        <div className="left flex">
          <div className="h-max md:logo  border-r-2 px-4 border-zinc-400">
            <img src={navLogo} alt="" />
          </div>
          <div className="avatar flex px-4">
            <img src={avtar} alt="" className=" w-50 md:w-[25%]  px-2 h-50" />
            <p className="hidden md:inline text-white text-[14px]">
              All India Institute of Medical <br /> Science, Nagpur
            </p>
          </div>
          <div className="trial-period px-4 grid place-content-center">
            <p className="hidden md:inline text-white text-[14px] border-2 border-zinc-500 py-2 px-6 rounded-xl">
              Trial Period : Dec 13 2023 - Mar 22 2024{" "}
            </p>
          </div>
        </div>
        <div className="icons flex items-center">
          <div className="search px-2">
            <img src={search} alt="" />
          </div>
          <div className="profile px-2">
            <img src={profile} alt="" />
          </div>
          <div className=" hidden md:inline logout px-2">
            <img src={logOut} alt="" />
          </div>
        </div>
      </nav>
      {/**Bottom Header */}
      <nav className="bg-black md:bg-indigo-100 md:flex justify-between px-12 py-2">
        <div className="left-div md:w-1/2 flex items-center">
          <img src={rename} alt="" className="hidden md:inline px-2" />
          <img src={arrow} alt="" className="md:hidden px-2" />
          <p className="text-zinc-400 md:text-grey text-[15px]">
            Basic Search{" "}<span className="text-white md:text-black font-bold">/Advanced Search</span>
          </p>
        </div>
        <div className="right-section mt-4 md:mt-0">
          <button className="bg-blue-600 py-2 px-6 text-white rounded-md">
            Apply Filters
          </button>
          <button className="text-white md:text-black border-2 border-zinc-500 px-4 py-1 rounded-md mx-2">
            Clear All
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
