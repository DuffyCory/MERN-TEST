import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPetForm from './components/NewPetForm';
import EditPetForm from './components/EditPetForm';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<NewPetForm/>}/>
          <Route path="/" element={ <DisplayAll/> }/>
          <Route path="/edit/:id" element={ <EditPetForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
