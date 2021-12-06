import React from 'react';
import {Paper,Button,Typography} from '@mui/material';

const styles = {
	root:{
		position:'absolute',
		top:'60px',
		width:'18%',
		p:1,
		zIndex:222,
		border:'solid 1px #3972f6'
	}
}


export default function Filter({onSelect}){

    function handleBtnClick({target}){
    	onSelect(target.name.toUpperCase())
    }

	return( <Paper sx={styles.root} elevation={4}>
			    <Typography sx={{ml:1}} variant="body1" color="text.secondary">
			       Filter
			    </Typography>
			    <Button onClick={handleBtnClick} name="name">Name</Button>
			    <Button onClick={handleBtnClick} name="species">Species</Button>
			    <Button onClick={handleBtnClick} name="status">Status</Button>
			    <Button onClick={handleBtnClick} name="gender">Gender</Button>
	        </Paper>
	    )
}