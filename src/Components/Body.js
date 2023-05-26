import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="flex overflow-x-hidden bg-black">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
