import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPetForm from './components/NewPetForm';
import EditPetForm from './components/EditPetForm';
import DisplayOne from './components/DisplayOne';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<NewPetForm/>}/>
          <Route path="/" element={ <DisplayAll/> }/>
          <Route path="/edit/:id" element={ <EditPetForm/>} />
          <Route path="/pet/:id" element={ <DisplayOne/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
