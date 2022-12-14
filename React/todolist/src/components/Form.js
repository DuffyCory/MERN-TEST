import {useState} from 'react'


const styledDiv = {
    border:'2px solid black',
    padding:'20px',
}

const Form = (props) => {
    //deconstructed for props from app.js
    const {todoList, setTodoList} = props;
    //state for text input
    const [todoText, setTodoText] = useState ("");

    const submitHandler = (e) => {
        e.preventDefault();
        
        setTodoList([...todoList, {
            content: todoText,
            markedDelete: false,
            id: Math.floor(Math.random() * 1000000)
        }])

        setTodoText("");
    }


  return (
    <div>
        <h2>To Do Items</h2>
        <form onSubmit={submitHandler}>
            <div style={styledDiv}>
                <input value={todoText} onChange={(e) =>setTodoText(e.target.value)} type="text"/>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form