import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>{props.lastname}, {props.firstname}</h2>
            <p>Age:{props.age}</p>
            <p>Hair Color:{props.haircolor}</p> 
        </div> 
        )
}

export default Person;