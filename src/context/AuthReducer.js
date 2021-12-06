const AuthReducer = (state, action) =>{
	switch (action.type){
		case "LOGIN_SUCCESS":
		return {
			user:action.payload,
			isFetching:false,
			error:false,
		}
		default:
		return{
			user:action.payload,
			isFetching:false,
			error:false
		}
	}
}

export default AuthReducer;