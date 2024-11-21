import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
import InfoPlace from "./pages/InfoPlace";
import Map from "./pages/Map";
import { SwimPage } from "./pages/SwimPage";
import { GYMpages } from "./pages/GYMpages";
import { Educationpages } from "./pages/Educationpages";
import { Healtpages } from "./pages/Healtpages";
import { Tourism } from "./pages/Toruismpages";
import { Publicservicepages } from "./pages/publicservicepages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infoplace" element={<InfoPlace />} />
        <Route path="/map" element={<Map />} />
        <Route path="/swim" element={<SwimPage />} />
        <Route path="/gym" element={<GYMpages />} />
        <Route path="/education" element={<Educationpages />} />
        <Route path="/healt_public" element={<Healtpages />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/publicservice" element=  {<Publicservicepages/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;
