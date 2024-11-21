import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
import InfoPlace from "./pages/InfoPlace";
import Map from "./pages/Map";
import { SwimPage } from "./pages/SwimPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infoplace" element={<InfoPlace />} />
        <Route path="/map" element={<Map />} />
        <Route path="/swim" element={<SwimPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
