import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/company" element={"company"} />
        <Route path="/blogs" element={"blog"} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;