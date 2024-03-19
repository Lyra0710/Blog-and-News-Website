// import React, { useState, useEffect } from "react";
import "./App.css";
import NewsCatalogue from "./modules/NewsCatalogue";
import Navbar from "./modules/Navbar";
import Apod from "./modules/Apod"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Apod />
      <h1>Latest News</h1>
      <NewsCatalogue />
    </div>
  );
}

export default App;