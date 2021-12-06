export const isEmail = (email)=>{
   const check = /(.+)@(.+){2,}\.(.+){2,}/.test(email);
   if(!check){
   	 return "Email is not valid!"
   }
   return null;	
}


export const isPassword = (password)=>{
   const check = password.length < 6;
   if(check){
       return "Password must be greater than 6 characters"
   }
   return null;  
}