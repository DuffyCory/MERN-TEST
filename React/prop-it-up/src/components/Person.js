import React, {useState} from 'react';

const Person = (props) => {
    const [newBirthday, setNewBirthday] = useState(props.age);
    return (
        <div>
            <h2>{props.lastname}, {props.firstname}</h2>
            <p>Age:{newBirthday}</p>
            <p>Hair Color:{props.haircolor}</p> 
            <button onClick={ (event) => setNewBirthday(newBirthday + 1)}>Birthday Button for {props.firstname}{props.lastname}</button>
        </div> 
        )
}

export default Person;