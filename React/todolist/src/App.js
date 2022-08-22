import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import List from './components/List';



function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList}/>
      <List todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
