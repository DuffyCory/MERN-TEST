import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const {productList, setProductList} = props;
    //Setting State - keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    
    //handler when the form is submitted
    const SubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post("http://localhost:8000/api/products", {
            title,
            description,
            price,
        })
            .then((res) => {
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setProductList([...productList, res.data])
                setTitle("");
                setDescription("");
                setPrice(""); //these clear out the input boxes after you click submit
            })
            .catch((err) => {console.log(err);})
    }

    return (
        <div>
            <header>Product Manager</header>
            <form onSubmit={SubmitHandler}>
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
                <input type="submit" value="Create" className="submit-input" />
            </form>
        </div>
    )
}
export default ProductForm;


