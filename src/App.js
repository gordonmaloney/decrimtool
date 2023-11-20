import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Header } from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
