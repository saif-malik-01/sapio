import React,{createContext,useReducer} from 'react';
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {user:null}


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
	const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

	return (
		<AuthContext.Provider
		  value={{user:state.user,dispatch}}>
		  {children}
		</AuthContext.Provider>  

		)
}