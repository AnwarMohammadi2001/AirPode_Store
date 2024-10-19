import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./pages/Card";
import { StoreProvider } from "./Context_Reducer/StoreContext";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
