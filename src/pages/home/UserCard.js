import React from 'react';
import {Avatar,Grid,Card,CardActions,CardContent,Button,Typography} from '@mui/material';


export default function UserCard({name,species,status,gender,image,onBtnClick,id,btnType,}) {

  function handleClick(){
    if(btnType === 1){
       onBtnClick({name,species,status,gender,image,id});
       return
    }
    onBtnClick(id)
  }

  return (
    <Card sx={{ maxWidth: 255 }} variant="outlined">
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item xs={3}>
            <Avatar alt={name} src={image} />
          </Grid>
          <Grid item xs={9}>
            <Typography varient="h5">{name}</Typography>
            <Typography variant="body2" color="text.secondary">Status: {status}</Typography>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <Typography>More Info</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Gender: {gender}</Typography>       
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">Species: {species}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">
          {btnType === 1 ? 'Save' : 'Delete'}
        </Button>
      </CardActions>
    </Card>
  );
}