import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./A-Navigation/Nav";
import Product from "./B-Product/Product";
import Cart from "./B-Product/Cart";

const Landing = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (newSearchTerm) => {
    setSearch(newSearchTerm);
  };
  return (
    <BrowserRouter>
      <Nav
        setSearch={setSearch}
        search={search}
        handleSearch={() => handleSearch(search)}
      />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
