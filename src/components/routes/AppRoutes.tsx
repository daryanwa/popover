import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
