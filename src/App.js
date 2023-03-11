import React from "react";
import { Header } from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer/Footer";
import ShipByName from "./Pages/ShipByName";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { PageNotFound } from "./Pages/PageNotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ship/:ship" element={<ShipByName />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
