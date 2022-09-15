import React from 'react';
import './App.css';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./views/Main";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<OneProduct/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
