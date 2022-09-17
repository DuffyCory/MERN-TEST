import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const EditPet = (props) => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    
    const [updatePet, setUpdatePet] = useState([]);
//not sure if I need to break this down to name, type, description? Not working in NewPetForm

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((response) => {
            console.log(response.data);
            setUpdatePet(response.data);
        })
        .catch(err => {
            console.log(err.response);});
    }, [])

    
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, {
            name,
            type,
            description,
            skills
        })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };


    return (
        <div>
            <Link to="/">Home</Link>
            <Form onSubmit={submitHandler}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPetName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="name" value={updatePet.name} onChange={(e)=> setUpdatePet(e.target.value)}/>
                    </Form.Group>
                    {errors.name ? <p className="errorText">{errors.name.message}</p> : null}
                </Row>

                <Form.Group className="mb-3" controlId="formTypeAnimal">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="type" value={updatePet.type} onChange={(e)=> setUpdatePet(e.target.value)} />
                </Form.Group>
                {errors.type ? <p className="errorText">{errors.type.message}</p> : null}

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" value={updatePet.description} onChange={(e)=> setUpdatePet(e.target.value)} />
                </Form.Group>
                {errors.description ? <p className="errorText">{errors.description.message}</p> : null}

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="skills">
                        <Form.Label>Skills </Form.Label>
                        <Form.Control type="skills" value={updatePet.skills} onChange={(e)=> setUpdatePet(e.target.value)} />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Update Pet
                </Button>
            </Form>  
        </div>
    )
}

export default EditPet;