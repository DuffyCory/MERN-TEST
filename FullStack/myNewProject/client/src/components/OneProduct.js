import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";



const OneProduct = (props) => {

  const {id} = useParams();
  const [oneProduct, setOneProduct] = useState({});

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setOneProduct(res.data);
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div>
      <h2>{oneProduct.title}</h2>
      <p>Description: {oneProduct.description}</p>
      <p>Price: ${oneProduct.price}</p>
    </div>
  )
}

export default OneProduct;