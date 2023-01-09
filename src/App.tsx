import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import InputPage from './components/InputPage';
import Navbar from './components/Navbar';
import Today from './components/Today';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inputpage" element={<InputPage />} />
          <Route path="/today" element={<Today />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
