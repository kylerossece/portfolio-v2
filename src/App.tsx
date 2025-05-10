

import {  Routes, Route } from "react-router-dom";
import Page from "./Page";
import Surf from "./components/View/Surf"
import Travel from "./components/View/Travel"
import MMO from "./components/View/MMO"
export default function App() {

  return (
    <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/jk2l2" element={<Surf />} />
          <Route path="/travel-guide" element={<Travel />} />
          <Route path="/mmo-daily" element={<MMO />} />

    </Routes>


  );
}
