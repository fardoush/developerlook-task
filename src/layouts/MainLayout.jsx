import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#f0f0f0] min-h-screen p-3 ">
      <div className="relative rounded-[32px] overflow-hidden">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
