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


    const deleteFilter = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            setProductList(productList.filter((product, index)=> product._id !== idFromBelow));
        })
        .catch((err)=> console.log(err))
    }

  return (
    <div>
        <header>All Products</header>
        {
            productList.map((product, index)=>(
                <div key={product.id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <Link to={`/product/edit/${product._id}`}>Edit</Link>
                    <button onClick={()=>deleteFilter(product._id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAll;