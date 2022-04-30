import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import NavBar from './NavBar';
import Quote from './Quote';
import Welcome from './Welcome';

const Home = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default Home;
