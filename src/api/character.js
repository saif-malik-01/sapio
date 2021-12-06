import axios from 'axios';

const character = axios.create({
	baseURL:'https://rickandmortyapi.com/api/character',
})


export async function getCharacters(){
	try{
		const {data} = await character.get('/');
		return data.results;
	}catch(err){
		console.log(err.message);
	}
}

export async function getCharactersBy(key,value){
	try{
		const {data} = await character.get(`/?${key}=${value}`);
		return data.results;
	}catch(err){
		console.log(err.message)
	}
}