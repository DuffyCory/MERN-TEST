import React, {useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const DisplayAll = (props) => {

    const {productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) => console.log(err));
    }, [])


  return (
    <div>
        <header>All Products</header>
        {
            productList.map((product, index)=>(
                <div key={product.id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAll;