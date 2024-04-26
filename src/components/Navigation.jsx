import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="relative z-10 h-[100px] w-full bg-black/55">
      <div className="w-full h-full flex flex-row items-center justify-around">
        <div className="text-white text-5xl font-sans">
          <h1>KICK FISTA</h1>
        </div>
        {/* links */}
        <div className="flex flex-row gap-20 text-white px-10">
          <Link
            to="/prem"
            className="text-2xl hover:border-b-2 duration-200 hover:border-gray-400 cursor-pointer border-b border-transparent"
          >
            Premier league
          </Link>
          <Link
            to="/champ"
            className="text-2xl hover:border-b-2 duration-200 hover:border-gray-400 cursor-pointer border-b border-transparent"
          >
            Champions league
          </Link>
          <Link
            to="/cup"
            className="text-2xl hover:border-b-2 duration-200 hover:border-gray-400 cursor-pointer border-b border-transparent"
          >
            Cups
          </Link>
          <Link
            to="/allTime"
            className="text-2xl hover:border-b-2 duration-200 hover:border-gray-400 cursor-pointer border-b border-transparent"
          >
            All Time
          </Link>
        </div>
        {/* logout */}
        <div className="text-white">
          <h1 className="text-2xl hover:border-b-2 duration-500 hover:border-gray-400 hover:text-red-600 hover:border-b-red-600">
            Logout
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
