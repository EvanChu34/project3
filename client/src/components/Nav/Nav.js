import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

import { 
    AppBar,  
    Toolbar, 
    ListItem, 
    IconButton,
    ListItemIcon, 
    ListItemText,
    Avatar, 
    Divider, 
    List, 
    Typography, 
    Box 
} from '@material-ui/core';

import { 
    Explore,  
    Home, 
    LockOpen  
} from '@material-ui/icons';

//import avatar from "../Images/avatar.png";
//line 80 => DELETE TYPOGRAPHY/REPLACE WITH <Avatar className={classes.avatar} src={avatar} alt="reactAvatar" /> 


//STYLING
const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
      width: 250,
      background: "#511",
      height: "30rem"
  },
  listItem: {
    color: "tan",
  }
}));

const menuItems = [
  {
      listIcon: <Signin/>,
      listText: "Login"
  },
  {
      listIcon: <Home/>,
      listText: "Home"
  },
  //{
  //    listIcon: <Filler/>,
  //    listText: "Filler"
  //},
  //{
  //    listIcon: <Filler/>,
  //    listText: "Filler"
  //},
]

const Navbar = () => {
  const [state, setState] = useState ({
    right: false,
})

const toggleSlider = ((slider, open) => () => {
  setState({ ...state, [slider]: open });
});
const classes = useStyles();

const sideList = slider => (


    <Box       
      className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider(slider, false)}>
    <Typography variant="h4" style={{ color: "black" }}>

      Placeholder for avatar/logo

    </Typography>
    <Divider />
      
      
    <List>
        {menuItems.map((listItem, key)=>(
        <ListItem button key={key}>
          <ListItemIcon className={classes.listItem}>
            {listItem.listIcon}
          </ListItemIcon>
          <ListItemText 
            className={classes.listItem}
            primary={listItem.listText}
          />
        </ListItem>
            ))}
    </List>
    </Box>
        )

  return (
    <>
      <Box component="nav">
          <AppBar position="static" style={{ background: "#222" }}>
             <Toolbar>
             <IconButton onClick={toggleSlider("right", true)}>
                 <Explore style={{ color: "red" }}/>
             </IconButton>
                <Typography variant="h5" style={{ color: "tan" }}>
                Finders Keepers!!!
                </Typography>
                <MobilRightMenuSlider 
                   anchor="right" 
                   open={state.right}
                   onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                </MobilRightMenuSlider>
            </Toolbar>
           </AppBar>
        </Box>
        </>
    )
};
export default Navbar;




























