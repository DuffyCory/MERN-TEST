import React from 'react'
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const NewPetForm = (props) => {
    const [newPet, setNewPet] = useState([])
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.post("http://localhost:8000/api/pet")
            .then((response) => {
                console.log(response.data);
                setNewPet(response.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
            })
    }, []);


    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet", {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);

            });
    }

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h3>Know a pet needing a home?</h3>
            <Form onSubmit={submitHandler}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPetName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Pet Name" onChange={(e)=> setName(e.target.value)} />
                    </Form.Group>
                    {errors.name ? <p className="errorText">{errors.name.message}</p> : null}
                </Row>

                <Form.Group className="mb-3" controlId="formTypeAnimal">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="type" placeholder="ex. Dog, Cat, etc." onChange={(e)=> setType(e.target.value)} />
                </Form.Group>
                {errors.type ? <p className="errorText">{errors.type.message}</p> : null}

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="About the Pet" onChange={(e)=> setDescription(e.target.value)} />
                </Form.Group>
                {errors.description ? <p className="errorText">{errors.description.message}</p> : null}

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="skills">
                        <p>Skills (Optional)</p>
                        <Form.Label>Skill 1: </Form.Label>
                        <Form.Control type="skill1" onChange={(e)=> setSkill1(e.target.value)}/>
                        <Form.Label>Skill 2: </Form.Label>
                        <Form.Control type="skill2" onChange={(e)=> setSkill2(e.target.value)}/>
                        <Form.Label>Skill 3: </Form.Label>
                        <Form.Control type="skill3" onChange={(e)=> setSkill3(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Add Pet
                </Button>
            </Form>
        </div>
    )
}

export default NewPetForm;