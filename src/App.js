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
        <div className="h-[10%]">
          <Navbar />
        </div>
        <div className="h-[90%]">

        <Home/>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
