import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {TextField,Button} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import {isEmail,isPassword} from '../../utils/validation'
import Token from '../../utils/expire';
import Form from '../../components/form'

export default function Register(){
   
   const [inputs,setInputs] = useState({name:'',email:'',password:''});
   const [emailError,setEmailError] = useState('');
   const [passwordError,setPasswordError] = useState('');
   const {dispatch} = React.useContext(AuthContext);

   function handleInputChange({target}){ 
	 	setInputs({...inputs,[target.name]:target.value});
	 	if(inputs.email !== '') setEmailError(isEmail(inputs.email));
   	if(inputs.password !== '') setPasswordError(isPassword(inputs.password));
   }
   
   function handleSubmit(e){
   	e.preventDefault();
   	if(emailError || passwordError) return;
   	try{
   		const {email,password,name} = inputs;
   		localStorage.setItem(email,JSON.stringify({password,name}));
   		Token.store(email);
	   	dispatch({ type: "LOGIN_SUCCESS", payload: {email,name} });
   	}catch(err){console.log(err)}
   }


	return(
        <Form onSubmit={handleSubmit} img="register.svg">
	 		   <h1>Sign up to Sapio</h1>
		      <p>Already a member? <Link to="/login">Log In</Link></p>
	         <TextField 
	          margin="dense" 
	          required label="Name" 
	          name="name"
	          variant="outlined"
	          onChange={handleInputChange}
	          value={inputs.name} 
	         />
		      <TextField 
		       margin="dense" 
		       error={Boolean(emailError)}
		       required label="Email" 
		       variant="outlined" 
		       placeholder="some@mail.com"
		       helperText={emailError}
		       onChange={handleInputChange}
		       name="email"
		       value={inputs.email}
		      />
			   <TextField 
			     margin="dense"
			     error={Boolean(passwordError)} 
			     inputProps={{type:"password"}} 
			     required label="Password" 
			     variant="outlined"
			     name="password"
			     helperText={passwordError}
			     onChange={handleInputChange} 
			     value={inputs.password}
			   />
		      <Button variant="outlined" type="submit">Create an account</Button>
        </Form>
		)
}