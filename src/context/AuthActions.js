export const LoginSuccess = (user) =>({
	type:"LOGIN_SUCCESS",
	payload:user,
});

export const LoginFailure = (error) =>({
	type:"LOGOUT",
	payload:null,
});