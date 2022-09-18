import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link, useParams, useNavigate } from 'react-router-dom';


const DisplayOne = (props) => {
    const [onePet, setOnePet] = useState([]);
    const {id} = useParams();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState();
    const [skill3, setSkill3] = useState();

    const navigate = useNavigate();

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
            <h3>Details about {onePet.name}</h3><Link to="/">Back to Home</Link>
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
                        <td>{onePet.type}</td>
                        <td>{onePet.description}</td>
                        <td>1.{onePet.skill1} / 2.{onePet.skill2} / 3.{onePet.skill3}</td>
                        <button onClick={()=>deleteHandler(id)} >Adopt</button>
                    </tr>   
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayOne;