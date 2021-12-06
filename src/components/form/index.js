import React from 'react';
import {Paper,Grid} from '@mui/material';
import Styles from './form.module.css';

export default function Form({children,onSubmit,img}){
	return(
		<div className={Styles.page}>
		    <Paper className={Styles.page__formCont}>
		    	<Grid container alignItems="center" justifyContent="center" spacing={2}>
		    		{img && <Grid item sm={12} md={6}>
		    			<img src={img} alt="welcome" className={Styles.formCont__img}/>
		    		</Grid>}
		    		<Grid item sm={12} md={6}>
				 		<form onSubmit={onSubmit}>
				 		   {children}
				 	    </form>
		    		</Grid>
		    	</Grid>
		    </Paper>
		 </div>	
		)
}