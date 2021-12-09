 function store(email){
	const now = new Date();
	now.setTime(now.getTime() + (30*60*1000));
	console.log(now.toUTCString())
	document.cookie = `email=${email}; expires=${now.toUTCString()}; path='/';`;
}


function validate(){
	 if(!document.cookie) return null;
     const email = document.cookie.split('=')[1];
     const {name} = JSON.parse(localStorage.getItem(email));
     return {name,email};
}

const Token = {store,validate};

export default Token