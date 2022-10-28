import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Main from "../pages/Main";

const page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Main />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default page;
