import React,{memo} from 'react';
import {Grid,Typography} from '@mui/material';
import UserCard from './UserCard';

function RenderList({type,characters,handleClick}){
	if(characters === undefined) return (<Typography variant="h3">Characters Not Found!</Typography>)
	return(<>
		    {type === 1 && characters.length === 0 && <Typography variant="h3">Loading...</Typography>}
		    {type === 2 && characters.length === 0 && <Typography variant="h3">Your Don't have any saved character</Typography>}

		 	{characters.map((c)=>{
		 	 c.btnType = type;
			return <Grid item key={c.id} xs={12} sm={4} display="flex" justifyContent="center">
			            <UserCard {...c} onBtnClick={handleClick}/>
		           </Grid>
		    })}
	       </>)
}

export default memo(RenderList);