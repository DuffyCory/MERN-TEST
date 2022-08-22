import React, {useState} from 'react'


const List = (props) => {
    //deconstruct props from app.js
    const {todoList, setTodoList}=props;

const clickHandler = (todo) => {
    todo.markedDelete = !todo.markedDelete;
    let updateTodos = [...todoList];
    setTodoList(updateTodos);
}

const styled = (markedDelete) => {
    if(markedDelete === true) {
        return "completed"
    }
    else {
        return "not completed"
    }
}

const deleteButton = (idFromBelow) => {
    setTodoList(todoList.filter((todo, index) => {
        return todo.id !== idFromBelow;
    })
    );
};

  return (
    <div>
        <h2>List</h2>

        {todoList.map((todo, index) => (
            <div className={styled(todo.markedDelete)} key={index}>
                <p>{todo.content}</p>
                <input onChange={(e)=>clickHandler(todo)} type="checkbox" />
                <button onClick={() => deleteButton(todo.id)}>Delete</button>
            </div>
            ))
        }
        
    </div>
  )
}

export default List