import React from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <header className="relative h-screen bg-[url('/img/background/header-bg.jpg')] bg-cover">
      <SearchBar />
    </header>
  );
};

export default NavBar;
