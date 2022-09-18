import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link, useParams } from 'react-router-dom';


const DisplayOne = (props) => {
    const [onePet, setOnePet] = useState([]);
    const {id} = useParams();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState();
    const [skill3, setSkill3] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then((response) => {
                console.log(response.data);
                setOnePet(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);

    const deleteHandler = (petId)=>{
        axios.delete(`http://localhost:8000/api/pet/${petId}`)
        .then((res) => {
            console.log(res.data);
            const newList = onePet.filter((pet)=>{
                return pet._id !== petId;
            });
            setOnePet(newList)
        })
        .catch((err)=> console.log(err))
    }




    return (
        <div>
            <h3>Details about {name}</h3><Link to="/new">add a pet to the shelter</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pet Type</th>
                        <th>Description</th>
                        <th>Skills</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{description}</td>
                        <td>{skill1}</td>
                        <button onClick={()=>deleteHandler(id)} >Adopt</button>
                    </tr>   
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayOne;