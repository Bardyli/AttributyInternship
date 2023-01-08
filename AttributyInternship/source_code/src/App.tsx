import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:flight_number' element={<CardDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
