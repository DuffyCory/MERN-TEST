import {Form, Button} from 'react-bootstrap';

const MyForm = props => {

    const {state, setState, error, setError}=props;

    const handleChange = (event) => {

        if(event.target.name == 'name') {
            if((event.target.value).trim().length < 2) {
                setState({...state, name:{value:event.target.value,error:"Name must be more than 2 characters long"}})
                setError(true)
            }else{
                setState({...state,name:{value:event.target.value,error:null}})
                setError(false)
            }
        }
        if(event.target.name == 'email'){
            if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(event.target.value)){
                setState({...state,email:{value:event.target.value,error:"Must be a valid email"}})
                setError(true)
            }else{
                setState({...state,email:{value:event.target.value,error:null}})
                setError(false)
            }
        }
        if(event.target.name == 'password') {
            if((event.target.value).trim().length < 8) {
                setState({...state,password:{value:event.target.value, error:"Password must be more than 8 characters long"}})
                setError(true)
            }else{
                setState({...state, password:{value:event.target.value, error:null}})
                setError(false)
            }
        }
        if(event.target.name == 'confirmPassword'){
            if((event.target.value) != state.password.value){
                setState({...state,confirmPassword:{value:event.target.value,error:"Passwords must match"}})
                setError(true)
            }else{
                setState({...state,confirmPassword:{value:event.target.value,error:null}})
                setError(false)
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitting form")
        if(state.name.value === "" || state.email.value === "" || state.password.value === "" || state.confirmPassword === "") {
            console.log("invalid attempt")
            return
        }
        if(error) {
            console.log("also invalid attempt")
            return
        }else{
            setState({...state, submitted:true})
            console.log("valid attempt")
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="border w-50 p-5 rounded shadow">
            <Form.Group>
                <h2>Register:</h2>
            </Form.Group>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control onChange={handleChange} value={state.name.value} name = "name" className={state.name.error?"border-danger":''}></Form.Control>
                {
                    state.name.error ?
                    <Form.Text id= "passwordHelpBlock" muted>{state.name.error}</Form.Text>
                :null
            }
            </Form.Group>
            <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control onChange = {handleChange} value={state.email.value} name = "email" className={state.email.error?"border-danger":''}>

            </Form.Control>
            {
                state.email.error?
                <Form.Text id="passwordHelpBlock" muted>{state.email.error}</Form.Text>
                :null
            }
        </Form.Group>
        <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={state.password.value} onChange = {handleChange} name = "password"  className={state.password.error?"border-danger":''}>

            </Form.Control>
            {
                state.password.error?
                <Form.Text id="passwordHelpBlock" muted>{state.password.error}</Form.Text>
                :null
            }
        </Form.Group>
        <Form.Group>
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" value={state.confirmPassword.value} onChange = {handleChange} name = "confirmPassword"  className={state.confirmPassword.error?"border-danger":''}>

            </Form.Control>
            {
                state.confirmPassword.error?
                <Form.Text id="passwordHelpBlock" muted>{state.confirmPassword.error}</Form.Text>
                :null
            }
        </Form.Group>
        <Form.Group className="mt-4">
            {error?
            <Button disabled type="submit" >Register</Button>
            :
            <Button type="submit" >Register</Button>

            }
        </Form.Group>
        </Form>
    )
}
export default MyForm