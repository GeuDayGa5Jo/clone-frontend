import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "../components/Example";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
