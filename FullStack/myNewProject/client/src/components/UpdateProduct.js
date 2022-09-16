import React, {useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from "axios";



const UpdateProduct = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setPrice(res.data.price);
        })
        .catch((err) => console.log(err))
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            description,
            price
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/"); //takes us back to home when submitted
        })
        .catch((err) => console.log(err))
    }


  return (

    <div>
        <header>Update Product</header>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label><br />
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} name="title" />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" value={description} name="description" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <input type="submit" value="Update" className="submit-input" />
            </form>
            <Link to={"/"}>Home</Link>
    </div>
  )
}

export default UpdateProduct;