import React from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import DisplayAll from './components/DisplayAll';
import OneProduct from './components/OneProduct';


function App() {
  return (
    <div className="App">
      <ProductForm path="/" />
      <DisplayAll />
      <OneProduct />
    </div>
  );
}

export default App;
