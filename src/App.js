import { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/navbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
