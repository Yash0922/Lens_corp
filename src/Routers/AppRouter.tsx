import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/company" element={"company"} />
        <Route path="/blogs" element={"blog"} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;