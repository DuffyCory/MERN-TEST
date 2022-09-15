import React, {useState, useEffect} from "react";
import ProductForm from "../components/ProductForm";
import DisplayAll from "../components/DisplayAll";



const Main = (props) => {

    const [productList, setProductList] = useState([]);


  return (
    <div>
        <ProductForm productList={productList} setProductList={setProductList}/>
        <DisplayAll productList={productList} setProductList={setProductList}/>
    </div>
  )
}

export default Main;