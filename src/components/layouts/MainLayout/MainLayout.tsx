import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const MainLayout: React.FC = () => {
  return (
    <div className="h-full">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
