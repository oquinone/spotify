// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import HomeComponent from "./components/home/home";
import LoginComponent from "./components/login/login";
import SearchComponent from "./components/search/search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/likedSongs" element={<HomeComponent />} />
      <Route path="/search" element={<SearchComponent />} />
    </Routes>
  );
}

export default App;
