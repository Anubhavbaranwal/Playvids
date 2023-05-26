import React from "react";
import { toogleMenu } from "../Utils/Menu";
import { useDispatch } from "react-redux";
import menuicon from "../Assests/icons8-menu-50.png";
import searchicon from "../Assests/icons8-search.svg";
import profileicon from "../Assests/icons8-customer.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const tooglemenubtn = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="flex z-[1200] justify-between p-3 max-sm:px-0 bg-black max-sm:w-fit sticky top-0">
      <div className="flex gap-2">
        <div>
          <img
            src={menuicon}
            onClick={tooglemenubtn}
            className="h-8 pt-1 max-sm:pl-1"
          />
        </div>
        <Link to="/">
          <h1 className="text-white text-2xl font-semibold">
            Play<span className="text-red-700">Tube</span>
          </h1>
        </Link>
      </div>
      <div
        className="w-1/2 flex max-sm:overflow-x-hidden max-sm:justify-start
      "
      >
        <input
          type="text"
          className="h-9 w-1/2 pl-5 border border-gray-400 rounded-l-full"
        />
        <img
          src={searchicon}
          className="h-9 rounded-r-full align-middle bg-zinc-700 w-12"
        />
      </div>
      <img
        src={profileicon}
        className="bg-zinc-800 h-9 rounded-full max-md:hidden max-sm:pr-0"
      />
    </div>
  );
};

export default Header;
