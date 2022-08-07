import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
      firstname={"Jane"}
      lastname={"Doe"}
      age={45}
      haircolor={"Black"} />
      <Person
      firstname={"John"}
      lastname={"Smith"}
      age={88}
      haircolor={"Brown"} />
      <Person
      firstname={"Millard"}
      lastname={"Filmore"}
      age={50}
      haircolor={"Brown"} />
      <Person
      firstname={"Maria"}
      lastname={"Smith"}
      age={62}
      haircolor={"Brown"} />
    </div>
  );
}

export default App;
