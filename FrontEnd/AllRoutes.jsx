import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./src/page/Home/Home";
import About from "./src/page/About/About";
import NotesBlock from "./src/page/Notes/NotesBlock";
import Auth from "./src/page/Auth/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notes" element={<NotesBlock />} />
      <Route path="/authenticate" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
