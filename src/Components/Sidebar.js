import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.Menu.isMEnuOpen);
  console.log(isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-64 h-full z-[1000] text-white border-r-2 m-2 mt-0 mr-4 max-md:fixed max-md:bg-black ">
      <ul className="pr-2">
        <Link to="/">
          <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl w-60">
            Home
          </li>
        </Link>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Shorts
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Subscription
        </li>
        <hr className="m-2" />
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Watch Later
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Live
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Explore
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Your Videos
        </li>
        <hr className="m-2"></hr>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Liked videos
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Playlists
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Trending
        </li>
        <hr />
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Shopping
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Movies
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          News
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Sports
        </li>
        <li className="h-12 rounded-lg hover:bg-neutral-800 pl-2 py-2 text-xl">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
