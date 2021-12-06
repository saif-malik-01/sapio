import React,{useState,useRef} from 'react';
import {Divider,TextField,Grid,Paper,Typography,Button,InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import { AuthContext } from '../../context/AuthContext';
import Filter from './Filter';


export default function TopBar({onSearch}) {

    const [openFilter,setOpenFilter] = useState(false);
    const [filter,setFilter] = useState('');
    const inputRef = useRef();
    const {dispatch,user} = React.useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        onSearch(filter.toLowerCase(),e.target.search.value);
        setFilter('');
        e.target.search.value = '';
    }

    function inputAdornmentStart(){      
        if(filter === '') return null
        return (<InputAdornment position="start">
                <Button onClick={()=>setFilter('')} endIcon={<CloseIcon/>}>
                  {filter + ':'}
                </Button>
               </InputAdornment>)
    }

    function inputAdornmentEnd(){
        return (<InputAdornment position="end">
                 <SearchIcon/>
               </InputAdornment>)
    }


    return(
         <Grid container>
            <Grid xs={2} item display="flex" alignItems="center" sx={{p:1}}>
              <ArrowIcon/>
            </Grid>
            <Grid item xs={10} display="flex" justifyContent="end" alignItems="center" sx={{p:1}}>
                <Paper elevation={ openFilter ? 4 : 0}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                          sx={{width:'100%'}}
                          placeholder="Search..."
                          size="small"
                          inputRef={inputRef}
                          name="search"
                          onFocus={()=>setOpenFilter(true)}
                          onBlur={()=>{setTimeout(()=>setOpenFilter(false),200)}}
                          InputProps={{
                          endAdornment:inputAdornmentEnd(),
                          startAdornment:inputAdornmentStart()}}
                        />
                    </form>
                    { openFilter && <Filter onSelect={(type)=>{setFilter(type);inputRef.current.focus()}} />}
                </Paper>
                <Typography variant="subtitle1" sx={{ml:2,mr:2}} color="text.primary">
                    {user.name}
                </Typography>
                <Button onClick={()=>dispatch({ type: "LOGOUT"})} variant="outlined">
                     Sign Out
                </Button>
            </Grid>
            <Grid item xs={12}>
               <Divider/>
            </Grid>
         </Grid>
      )
  
}
