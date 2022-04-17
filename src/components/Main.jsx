import "./Main.css"
import React from "react";
import Forecast from "./Forecast";
import Registr from "./Registr";
import Enter from "./Enter";
import Notfound from "./Notfound";
import City from "./City"
import { Route, Routes } from "react-router-dom";

const Main = () => {
  
    return (
      <main>
        <Routes>
          <Route path="/" element={<Forecast />} />
          <Route path="/login" element={<Registr />} />
          <Route path="/enter" element={<Enter />} />          
          <Route path="*" element={<Notfound />} />
          <Route path="cities/:cityId" element={<City />} />
        </Routes>
      </main>
    )
}

export default Main;