import axios from 'axios';

const character = axios.create({
	baseURL:'https://rickandmortyapi.com/api/character',
})

let characters = [];
export async function getCharacters(i=1){
	try{
         const {data} = await character.get(`/?page=${i}`);
         characters = [...characters,...data.results];
         if(characters.length<50) return getCharacters(++i)
         return characters.splice(0,50);
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