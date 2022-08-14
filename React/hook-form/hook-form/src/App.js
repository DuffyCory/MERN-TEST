import { useState } from 'react';
import MyForm from './components/MyForm'

const initialState = {
  name:{
    value:'',
    error:null
  },
  email:{
    value:'',
    error:null
  },
  password:{
    value:'',
    error:null
  },
  confirmPassword:{
    value:'',
    error:null
  },
  submitted:false

}

function App() {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState(false)

  return (
    <div className="d-flex flex-column align-items-center">
      <MyForm state ={state} setState = {setState} error = {error} setError={setError} />
    </div>
  );
}

export default App;
