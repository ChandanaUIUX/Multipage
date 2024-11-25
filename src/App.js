import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './Component/Navbar/Navbar';
import Home from "../src/Page/Home/Home";
/* PAGE-2  Skincare*/
import Facewashpage from "../src/Page/Skincare/Component/Bycatogery/Facewash/Facewashpage";
import Toner from "./Page/Skincare/Component/Bycatogery/Toners/Toner";
import Advanceimgpage from "./Page/Skincare/Component/Advanceimgpage/Advanceimgpage";
import Ayurvedicrangepage from "./Page/Skincare/Component/Ayurvedicrangepage/Ayurvedicrangepage";
import Oilfacepage from "./Page/Skincare/Component/Bycatogery/Oilfacepage/Oilfscepage";
import Skincare from "../src/Page/Skincare/Skincare";
import Filter from "../src/Component/Filter/Filter";
/* PAGE-2 END Skincare */
/* PAGE 3 Makeuppage */
import Kajalpage from "./Page/Makeuppage/Component/Eyepage/Kajalpage/Kajalpage";
import Mascarapage from "./Page/Makeuppage/Component/Eyepage/Mascarapage/Mascarapage";
import Bbcream from "./Page/Makeuppage/Component/Facepage/Bbcream";
import Lipglossespage from "./Page/Makeuppage/Component/Lippage/Lipglossespage/Lipglossepage";
import Lipstickpage from "./Page/Makeuppage/Component/Lippage/Lipstickpage/Lipstickpage";
import Combopage from "./Page/Makeuppage/Component/Combospage/Combopage";
/* PAGE 3 END Makeuppage */

import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        
        {/* PAGE-2 */}
        <Route path="/Facewashpage" element={<Facewashpage />} />
        <Route path="/Skincare" element={<Skincare />} />
        <Route Path="/Toner" element={<Toner />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Advanceimgpage" element={<Advanceimgpage />} />
        <Route path="/Ayurvedicrangepage" element={<Ayurvedicrangepage />} />
        <Route path="/Oilfacepage" element={<Oilfacepage />} />
        {/* PAGE-2 END*/}


        {/* PAGE-3 */}
        <Route path="/Kajalpage" element={<Kajalpage/>} />
        <Route path="/Mascarapage" element={<Mascarapage/>} />
        <Route path="/Bbcream" element={<Bbcream/>} />
        <Route path="/Lipglossespage" element={<Lipglossespage/>} />
        <Route path="/Lipstickpage" element={<Lipstickpage/>} />
        <Route path="/Combopage" element={<Combopage/>} />       
        {/* PAGE-3 END*/}
      </Routes>
      <Footer />

    </>
  );
}

export default App;
