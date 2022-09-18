import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const DisplayAll = (props) => {
    const [allPets, setAllPets] = useState([]);
    //const {petList, setPetList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet")
            .then((response) => {
                console.log(response.data);
                setAllPets(response.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, []);

    const deleteHandler = (petId)=>{
        axios.delete(`http://localhost:8000/api/pet/${petId}`)
        .then((res) => {
            console.log(res.data);
            const newList = allPets.filter((pet)=>{
                return pet._id !== petId;
            });
            setAllPets(newList)
        })
        .catch((err)=> console.log(err))
    }




    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Type of Animal</th>
                        <th>Description</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet, index) => {
                        return(
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>{pet.description}</td>
                                <td>{pet.skills}</td>
                                <Link to={`/edit/${pet._id}`}><button>Edit</button></Link>
                                <button onClick={()=>deleteHandler(pet._id)} >Adopt</button>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayAll;