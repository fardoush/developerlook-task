import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#f0f0f0] min-h-screen p-2 ">
      <div className="relative rounded-[32px] overflow-clip">
        <Header />
        <main className="overflow-visible">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
