import React from 'react';
import './App.css';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./views/Main";
import UpdateProduct from './components/UpdateProduct';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id" element={<OneProduct/>} />
        <Route path="/product/edit/:id" element={<UpdateProduct/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
