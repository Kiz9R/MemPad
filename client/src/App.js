import React from "react";

import { Container } from "@material-ui/core";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
