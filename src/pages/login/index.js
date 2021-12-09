import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {TextField,Button} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import Token from '../../utils/expire';
import Form from '../../components/form';

export default function Login({onLogin}){

   const [inputs,setInputs] = useState({email:'',password:''});
   const [error,setError] = useState(null);
   const {dispatch} = React.useContext(AuthContext);

   function handleInputChange({target}){
   	setInputs({...inputs,[target.name]:target.value});
   	setError(null);
   }

   async function handleSubmit(e){
   	e.preventDefault();
   	if(error) return;
   	const {email,password} = inputs;
   	const userData = JSON.parse(localStorage.getItem(email));
   	if(userData && "name" in userData){
   		if(userData.password === password){
   			Token.store(email);
   			dispatch({ type: "LOGIN_SUCCESS", payload: {email,name:userData.name} });
   		}else{
   	      setError('Password does not match');
   		}
   		return;
   	}
   	setError('User Not Found');
   }

	return(
 		<Form onSubmit={handleSubmit} img="login.svg">
 		    <h1>Sign In</h1>
		    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>				       
		    <TextField 
		          margin="dense"  
		          required label="Email"
		          error={Boolean(error)} 
		          variant="outlined" 
		          value={inputs.email}
		          name="email"
		          onChange={handleInputChange}
		          placeholder="some@mail.com"
		    />
		    <TextField 
		          margin="dense" 
		          inputProps={{type:"password"}} 
		          required label="Password" 
		          error={Boolean(error)} 
		          name="password"
		          value={inputs.password}
		          helperText={error}
		          onChange={handleInputChange}
		          variant="outlined" 
		    />
		    <Button variant="outlined" type="submit">Sign In</Button>
	    </Form>
		)
}