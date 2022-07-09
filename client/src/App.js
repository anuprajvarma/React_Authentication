import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Login from './components/login'
import Register from './components/register'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
