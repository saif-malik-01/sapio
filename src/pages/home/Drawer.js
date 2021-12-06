import React,{useState,useEffect} from 'react';
import {List,ListItem,ListItemIcon,ListItemText,Typography,Drawer} from '@mui/material';
import StoreIcon from '@mui/icons-material/ShoppingBagRounded';
import CollectionIcon from '@mui/icons-material/ArchiveRounded';
import ArrowIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const styles = {
  root:{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
           width: 240,
           boxSizing: 'border-box',
          },
      }
}

export default function DrawerLeft({onMenuChange,selectedMenu,open,setOpen}) {

    const [isSmall,setIsSmall] = useState(window.innerWidth<900);
  
    useEffect(()=>{
        function handleWindowSize(e){
          setIsSmall(window.innerWidth<900)
        }  
      window.addEventListener('resize',handleWindowSize);
      return ()=> window.removeEventListener('resize',handleWindowSize);
    },[]) 

    function renderColor(i){
      if(selectedMenu === i){
        return {color:'#3972f6'};
      }

      return {};
    }

    function handleClick(i){
      if(i!==0){
        onMenuChange(i)
        if(isSmall) setOpen(false);
        return;
      }
      setOpen(false);
    }

  return (
      <Drawer sx={styles.root} variant="persistent" anchor="left" open={!isSmall || open}>
        <List>
          {['Close','Store', 'Collections'].map((text,i) => {
             if(!isSmall && i===0) return null;
             return <ListItem button key={text} onClick={()=>handleClick(i)} sx={renderColor(i)}>
                      <ListItemIcon style={renderColor(i)}>
                        {i===1 ? <StoreIcon/> : i===2 ? <CollectionIcon/> : <ArrowIcon/> }
                      </ListItemIcon>
                      <ListItemText >
                        <Typography variant="subtitle2" >{text}</Typography>
                      </ListItemText>
                    </ListItem>
              })}
        </List>
      </Drawer>  
  );
}
