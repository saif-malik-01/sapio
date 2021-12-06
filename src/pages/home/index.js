import React,{useState,useEffect,useContext} from 'react';
import {Grid,Box} from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import {getCharacters,getCharactersBy} from '../../api/character';
import Drawer from './Drawer';
import TopBar from './TopBar';
import RenderList from './RenderList';


export default function Home(){

	const [characters,setCharacters] = useState([]);
	const [selectedMenu,setSelectedMenu] = useState(1);
	const [isDrawerOpen,setIsDrawerOpen] = useState(false);
	const {user} = useContext(AuthContext);

    useEffect(()=>{
    	getCharacters()
    	.then((data)=>setCharacters(data))
    },[])

    async function handleSearch(key,value){
    	setCharacters([]);
    	if(key === '') key = 'name';
    	const result = await getCharactersBy(key,value);
    	setCharacters(result);
    }

    async function handleMenuChange(type){
    	if(type===1){   	   
    	   setSelectedMenu(type);
    	   setCharacters([]);
    	   const data = await getCharacters();
    	   setCharacters(data);
    	}else{
    		const data = JSON.parse(sessionStorage.getItem(user.email));
    		setSelectedMenu(type);
    		if(data) setCharacters(data);
    		else setCharacters([]);
    	}
    }

    function handleCharacterSave(character){
    	const collections = sessionStorage.getItem(user.email);
    	if(collections){
    		const prevData = JSON.parse(collections);
    		const newData = JSON.stringify([...prevData,character])
    		sessionStorage.setItem(user.email,newData);
    	}else{
    		const data = JSON.stringify([character])
    		sessionStorage.setItem(user.email,data);
    	}
    }

    function handleCharacterDelete(id){
    	const data = JSON.parse(sessionStorage.getItem(user.email));
    	const newData = data.filter((c)=>c.id !== id);
    	setCharacters(newData);
    	sessionStorage.setItem(user.email,JSON.stringify(newData));
    }

    return(<Box>
			<TopBar onSearch={handleSearch} onDrawer={()=>setIsDrawerOpen(true)}/>
			<Grid container>
			     <Grid item sm={0} md={3}>
			        <Drawer onMenuChange={handleMenuChange} selectedMenu={selectedMenu} open={isDrawerOpen} setOpen={setIsDrawerOpen} />
			     </Grid>
				 <Grid item container xs={12} md={9} spacing={2} sx={{mt:2,mb:2,p:2}} justifyContent="center">
				    <RenderList 
				      type={selectedMenu}
				      handleClick={selectedMenu === 1 ? handleCharacterSave : handleCharacterDelete}
				      characters={characters}
				    />
				</Grid>		
			</Grid>
		</Box>)
}