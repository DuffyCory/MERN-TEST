import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import Todo from './components/Todo';


function App() {

  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList{...setTodoList} />
      <List/>
    </div>
  );
}

export default App;
