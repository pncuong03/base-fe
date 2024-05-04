import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "src/components/layouts/MainLayout";
import HomePage from "src/components/pages/Home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/404"
          element={
            <div className="flex h-[100vh] w-full items-center justify-center">
              <p className="text-50px text-primary font-bold">404</p>
            </div>
          }
        />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
