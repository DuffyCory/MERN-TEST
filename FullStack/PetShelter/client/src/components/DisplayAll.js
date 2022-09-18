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
            <Link to="/new">Add a Pet to the Shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Type of Animal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet, index) => {
                        return(
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <Link to={`/pet/${pet._id}`}><button>Details</button></Link>
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